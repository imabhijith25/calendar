import { configureStore } from '@reduxjs/toolkit'
import userSlicer from './userSlicer'
export default configureStore({
  reducer: {user : userSlicer},
})