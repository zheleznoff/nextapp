import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hasCamera: false,
  hasPC: false
}

export const techSupportSlice = createSlice({
  name: 'techSupport',
  initialState,
  reducers: {
    setTechSupport: (state,action) => {
      return state = {...action.payload}
    }
  }
})

export const { setTechSupport } = techSupportSlice.actions

export default techSupportSlice.reducer