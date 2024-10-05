import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from '../../services/users/users.thunk';

const initialState = {
    data:[],
    loading:false,
    error:false
}

const usersReducer = createSlice({
  name: '$users',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(fetchUsers.pending,(state) => {
        state.loading = true;
        state.data = [];
        state.error = false
    })
    builder.addCase(fetchUsers.fulfilled,(state,action) => {
        state.loading = false;
        state.error = false
        state.data = action.payload
    })
    builder.addCase(fetchUsers.rejected,(state) => {
        state.loading = false;
        state.error = true
        state.data = []
    })
  }
});

// export const {} = usersReducer.actions

export default usersReducer.reducer