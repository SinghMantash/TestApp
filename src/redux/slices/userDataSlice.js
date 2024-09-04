import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userProfile: '',
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      Object.assign(state, action.payload);
    },
    deleteUserData: (state, action) => {
      Object.assign(state, action.payload);
    },
    reset: () => initialState,
  },
});

export const {saveUserData, deleteUserData ,reset} = userDataSlice.actions;
export default userDataSlice.reducer;
