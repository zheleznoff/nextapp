import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sideBarIsOpen: true
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    sideBarSwitch: (state) => {
      state.sideBarIsOpen = !state.sideBarIsOpen
    }
  },
})

export const { sideBarSwitch } = layoutSlice.actions

export default layoutSlice.reducer
