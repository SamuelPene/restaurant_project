import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderPrice: 0,
};

export const orderPriceSlice = createSlice({
  name: 'orderPrice',
  initialState,
  reducers: {
    sumOrderPrice: (state, action) => {
      state.orderPrice += action.payload;
    },
    deductRemovedItemPrice: (state, action) => {
      state.orderPrice -= action.payload;
    },
  },
});

export const { sumOrderPrice, deductRemovedItemPrice } =
  orderPriceSlice.actions;

export default orderPriceSlice.reducer;
