import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderPrice: 0,
};

export const orderPriceSlice = createSlice({
  name: 'orderPrice',
  initialState,
  reducers: {
    sumOrder: (state, action) => {
      let total = 0;
      for (let i = 0; i < action.payload.length; i++) {
        total += action.payload[i].data.price;
      }
      state.orderPrice = total;
    },
  },
});

export const { sumOrder } = orderPriceSlice.actions;

export default orderPriceSlice.reducer;
