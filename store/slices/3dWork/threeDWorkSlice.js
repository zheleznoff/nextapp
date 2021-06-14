import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  create: false,
  upgrade: false,
  done: false
}

export const threeDWorkSlice = createSlice({
  name: 'threeDWork',
  initialState,
  reducers: {
    setThreeDWork: (state,action) => {
      return state = {...action.payload}
    }
  }
})

export const { setThreeDWork } = threeDWorkSlice.actions

export default threeDWorkSlice.reducer