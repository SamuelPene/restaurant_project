import { createSlice } from '@reduxjs/toolkit';

export const isMenuItemModalActiveSlice = createSlice({
  name: 'isMenuItemModalActive',
  initialState: {
    active: false,
  },
  reducers: {
    isMenuItemModalActive: (state) => {
      state.active = !state.active;
    },
  },
});

export const { isMenuItemModalActive } = isMenuItemModalActiveSlice.actions;

export default isMenuItemModalActiveSlice.reducer;
