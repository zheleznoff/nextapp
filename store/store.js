import { configureStore } from '@reduxjs/toolkit';
import layoutSlice from './slices/layout/layoutSlice';
import scenarioSlice from './slices/scenario/scenarioSlice';
import techSupportSlice from './slices/techSupport/techSupportSlice';
import workspaceSlice from './slices/workspace/workspaceSlice';
import materialsSlice from './slices/materials/materialsSlice';
import postEditSlice from './slices/postEdit/postEditSlice';
import scenarioWorkSlice from './slices/scenario-work/scenarioWorkSlice';
import threeDWorkSlice from './slices/3dWork/threeDWorkSlice';
import totalWorkSlice from './slices/totalWork/totalWorkSlice'

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    scenario: scenarioSlice,
    techSupport: techSupportSlice,
    workspace: workspaceSlice,
    materials: materialsSlice,
    postEdit: postEditSlice,
    scenarioWork: scenarioWorkSlice,
    threeDWork: threeDWorkSlice,
    totalWork: totalWorkSlice
  },
})
