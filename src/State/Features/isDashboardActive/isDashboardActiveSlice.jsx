import { createSlice } from '@reduxjs/toolkit';

export const isDashboardActiveSlice = createSlice({
  name: 'isDashboardActive',
  initialState: {
    value: false,
  },
  reducers: {
    setDashboardActive: (state) => {
      state.value = true;
    },
    setDashboardInactive: (state) => {
      state.value = false;
    },
  },
});

export const { setDashboardActive, setDashboardInactive } =
  isDashboardActiveSlice.actions;

export default isDashboardActiveSlice.reducer;
