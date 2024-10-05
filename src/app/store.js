import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterReducer'
import usersReducer from '../features/users/usersReducer'
import userReducer from '../features/users/userReducer'
import appModeReducer from '../features/appmode/appModeReducer'

export const store = configureStore({
  reducer: {
    appmode:appModeReducer,
    contador:counterReducer,
    users:usersReducer,
    user:userReducer,

  },
})