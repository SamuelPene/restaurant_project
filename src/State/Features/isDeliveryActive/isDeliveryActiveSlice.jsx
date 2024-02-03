import { createSlice } from '@reduxjs/toolkit';

export const isDeliveryActiveSlice = createSlice({
  name: 'isDeliveryActive',
  initialState: {
    value: false,
  },
  reducers: {
    isDeliveryActive: (state) => {
      state.value = true;
    },
  },
});

export const { isDeliveryActive } = isDeliveryActiveSlice.actions;

export default isDeliveryActiveSlice.reducer;
