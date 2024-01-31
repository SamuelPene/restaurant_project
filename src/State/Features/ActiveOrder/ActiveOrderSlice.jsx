import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  activeOrder: [],
};

export const ActiveOrderSlice = createSlice({
  name: 'activeOrder',
  initialState,
  reducers: {
    addItemToActiveOrder: (state, action) => {
      const currentOrder = {
        data: [action.payload[0], action.payload[1]],
        id: uuidv4(),
      };
      state.activeOrder.push(currentOrder);
    },
    removeItemFromActiveOrder: (state, action) => {
      for (let i = 0; i < state.activeOrder.length; i++) {
        if (state.activeOrder[i].id == action.payload.id) {
          state.activeOrder = state.activeOrder.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const { addItemToActiveOrder, removeItemFromActiveOrder } =
  ActiveOrderSlice.actions;

export default ActiveOrderSlice.reducer;
