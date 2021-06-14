import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cutting: false,
    audio: false,
    text: false
}

export const scenarioWorkSlice = createSlice({
  name: 'scenarioWork',
  initialState,
  reducers: {
    setScenarioWork: (state,action) => {
      return state = {...action.payload}
    }
  }
})

export const { setScenarioWork } = scenarioWorkSlice.actions

export default scenarioWorkSlice.reducer