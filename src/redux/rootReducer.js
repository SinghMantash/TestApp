import { combineReducers } from '@reduxjs/toolkit';
import userDataReducer from './slices/userDataSlice';

const rootReducer = combineReducers({
  userData:userDataReducer
  // Add other reducers here
});

export default rootReducer;
