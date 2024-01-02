import { createSlice } from '@reduxjs/toolkit';

export const isWebsiteActiveSlice = createSlice({
  name: 'isWebsiteActive',
  initialState: {
    value: true,
  },
  reducers: {
    setWebsiteActive: (state) => {
      state.value = true;
    },
    setWebsiteInactive: (state) => {
      state.value = false;
    },
  },
});

export const { setWebsiteActive, setWebsiteInactive } =
  isWebsiteActiveSlice.actions;

export default isWebsiteActiveSlice.reducer;
