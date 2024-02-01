import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const devliveryOptionSlice = createSlice({
  name: 'deliveryOption',
  initialState,
  reducers: {
    displayDeliveryOptionScreen: (state) => {
      state.value = false;
    },
  },
});

export const { displayDeliveryOptionScreen } = devliveryOptionSlice.actions;

export default devliveryOptionSlice.reducer;
