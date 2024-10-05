import { createSlice } from '@reduxjs/toolkit'
import { fetchUserById } from '../../services/users/users.thunk';

const initialState = {
    data:null,
    loading:false,
    error:true
}

const userReducer = createSlice({
  name: '$user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending,(state) => {
        state.loading = true;
        state.error = false;
        state.data = null
    })
    builder.addCase(fetchUserById.fulfilled,(state,action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload
    })
    builder.addCase(fetchUserById.rejected,(state) => {
        state.loading = false;
        state.error = true;
        state.data = null
    })
  }
});

// export const {} = userReducer.actions

export default userReducer.reducer