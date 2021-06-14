import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  premiere: false,
  effects: false
}

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    setWorkspace: (state,action) => {
      return state = {...action.payload}
    }
  }
})

export const { setWorkspace } = workspaceSlice.actions

export default workspaceSlice.reducer