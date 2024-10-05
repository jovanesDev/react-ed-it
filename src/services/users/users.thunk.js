import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosClient } from "../../client/axios"

const fetchUsers = createAsyncThunk(
    '$users/fetchUsers',
    async () => {
      const response = await axiosClient(`/users/`)
      return response.data
    },
)

const fetchUserById = createAsyncThunk(
  '$user/fetchUserById',
  async ( userId ) => {
    const response = await await axiosClient(`/users/${userId}`);
    return response.data
  }
)

export {
    fetchUsers,
    fetchUserById
}
  