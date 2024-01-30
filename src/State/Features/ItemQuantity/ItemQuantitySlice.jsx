import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

export const itemQuantitySlice = createSlice({
  name: 'itemQuantity',
  initialState,
  reducers: {
    addOneToItemQuantity: (state) => {
      state.value++;
    },
    removeOneFromItemQuantity: (state) => {
      state.value--;
    },
    resetItemQuantityToDefault: (state) => {
      state.value = 1;
    },
  },
});

export const {
  addOneToItemQuantity,
  removeOneFromItemQuantity,
  resetItemQuantityToDefault,
} = itemQuantitySlice.actions;

export default itemQuantitySlice.reducer;
