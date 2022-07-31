import { createSlice } from '@reduxjs/toolkit'

export const userSlicer = createSlice({
  name: 'user',
  initialState: {
    value: 0,
    userData:null
  },
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
    setUserData : (state,action)=>{
        state.userData = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserData } = userSlicer.actions

export default userSlicer.reducer