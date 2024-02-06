import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddressForDelivery: (state) => {
      state.value = state;
    },
  },
});

export const { setAddressForDelivery } = addressSlice.actions;

export default addressSlice.reducer;
