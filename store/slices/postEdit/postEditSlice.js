import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bonding: false,
    soundMixing: false,
    subtitleSync: false
}

export const postEditSlice = createSlice({
  name: 'postEdit',
  initialState,
  reducers: {
    setPostEdit: (state,action) => {
      return state = {...action.payload}
    }
  }
})

export const { setPostEdit } = postEditSlice.actions

export default postEditSlice.reducer