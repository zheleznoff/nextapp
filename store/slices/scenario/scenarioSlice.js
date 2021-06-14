import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  writing: false,
  subtitles: false
}

export const scenarioSlice = createSlice({
  name: 'scenario',
  initialState,
  reducers: {
    setScenarioPoints: (state,action) => {
      return state = {...action.payload}
    }
  }
})

export const { setScenarioPoints } = scenarioSlice.actions

export default scenarioSlice.reducer