import { configureStore } from '@reduxjs/toolkit';
import isDashboardActiveReducer from '../Features/isDashboardActive/isDashboardActiveSlice';
import isWebsiteActiveReducer from '../Features/isWebsiteActive/isWebsiteActiveSlice';
import menuApiReducer from '../Features/MenuApi/MenuApiSlice';
import activeMenuReducer from '../Features/ActiveMenu/ActiveMenuSlice';

export default configureStore({
  reducer: {
    isDashBoardActive: isDashboardActiveReducer,
    isWebsiteActive: isWebsiteActiveReducer,
    menuApiData: menuApiReducer,
    activeMenu: activeMenuReducer,
  },
});
