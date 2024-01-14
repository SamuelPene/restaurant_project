import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMenu: [],
};

export const ActiveMenuSlice = createSlice({
  name: 'activeMenu',
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      const currentMenu = {
        data: action.payload,
      };
      state.activeMenu.push(currentMenu);
    },
    clearActiveMenu: (state) => {
      state.activeMenu = [];
    },
  },
});

export const { setActiveMenu, clearActiveMenu } = ActiveMenuSlice.actions;

export default ActiveMenuSlice.reducer;
