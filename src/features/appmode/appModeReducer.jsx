import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode:false
}

const appModeReducer = createSlice({
  name: '$appmode',
  initialState,
  reducers: {
    changeToDarkMode:(state) => {
        state.darkMode = false
    },
    changeToLightMode:(state) => {
        state.darkMode = true
    }
  },
});

export const {changeToDarkMode,changeToLightMode} = appModeReducer.actions

export default appModeReducer.reducer