import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  video: false,
  audio: false,
  text: false
}

export const materialsSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {
    setMaterials: (state,action) => {
      return state = {...action.payload}
    }
  }
})

export const { setMaterials } = materialsSlice.actions

export default materialsSlice.reducer