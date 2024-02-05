import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
};

export const isConfirmationModalActiveSlice = createSlice({
  name: 'isConfirmationModalActive',
  initialState,
  reducers: {
    setConfirmationModalActive: (state) => {
      state.active = true;
    },
    setConfirmationModalInactive: (state) => {
      state.active = false;
    },
  },
});

export const { setConfirmationModalActive, setConfirmationModalInactive } =
  isConfirmationModalActiveSlice.actions;

export default isConfirmationModalActiveSlice.reducer;
