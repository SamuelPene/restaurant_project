import { configureStore } from '@reduxjs/toolkit';
import isDashboardActiveReducer from '../Features/isDashboardActive/isDashboardActiveSlice';
import isWebsiteActiveReducer from '../Features/isWebsiteActive/isWebsiteActiveSlice';

export default configureStore({
  reducer: {
    isDashBoardActive: isDashboardActiveReducer,
    isWebsiteActive: isWebsiteActiveReducer,
  },
});
