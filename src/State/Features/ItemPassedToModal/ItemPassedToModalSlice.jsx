import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemPassedToModal: [],
};

export const itemPassedToModalSlice = createSlice({
  name: 'itemPassedToModal',
  initialState,
  reducers: {
    itemPassedToModal: (state, action) => {
      state.itemPassedToModal.push(action.payload);
    },
    clearItemPassedToModal: (state, action) => {
      state.itemPassedToModal = [];
    },
  },
});

export const { itemPassedToModal, clearItemPassedToModal } =
  itemPassedToModalSlice.actions;

export default itemPassedToModalSlice.reducer;
