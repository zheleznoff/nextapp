import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colorCorrections: false,
    totalCorrections: false,
    rendering: false
}

export const totalWorkSlice = createSlice({
  name: 'totalWork',
  initialState,
  reducers: {
    setTotalWork: (state,action) => {
      return state = {...action.payload}
    }
  }
})

export const { setTotalWork } = totalWorkSlice.actions

export default totalWorkSlice.reducer