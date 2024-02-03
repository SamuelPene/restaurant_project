import { configureStore } from '@reduxjs/toolkit';
import isDashboardActiveReducer from '../Features/isDashboardActive/isDashboardActiveSlice';
import isWebsiteActiveReducer from '../Features/isWebsiteActive/isWebsiteActiveSlice';
import menuApiReducer from '../Features/MenuApi/MenuApiSlice';
import activeMenuReducer from '../Features/ActiveMenu/ActiveMenuSlice';
import activeOrderReducer from '../Features/ActiveOrder/ActiveOrderSlice';
import orderPriceReducer from '../Features/OrderPrice/OrderPriceSlice';
import isMenuItemModalActiveReducer from '../Features/isMenuItemModalActive/isMenuItemModalActiveSlice';
import ItemPassedToModalReducer from '../Features/ItemPassedToModal/ItemPassedToModalSlice';
import ItemQuantityReducer from '../Features/ItemQuantity/ItemQuantitySlice';
import DeliveryOptionReducer from '../Features/DeliveryOption/DeliveryOptionSlice';
import MenuNavCategoriesReducer from '../Features/MenuNavCategories/MenuNavCategoriesSlice';
import isDeliveryActiveReducer from '../Features/isDeliveryActive/isDeliveryActiveSlice';

export default configureStore({
  reducer: {
    isDashBoardActive: isDashboardActiveReducer,
    isWebsiteActive: isWebsiteActiveReducer,
    menuApiData: menuApiReducer,
    activeMenu: activeMenuReducer,
    activeOrder: activeOrderReducer,
    orderPrice: orderPriceReducer,
    isMenuItemModalActive: isMenuItemModalActiveReducer,
    itemPassedToModal: ItemPassedToModalReducer,
    itemQuantity: ItemQuantityReducer,
    deliveryOption: DeliveryOptionReducer,
    menuNavCategories: MenuNavCategoriesReducer,
    isDeliveryActive: isDeliveryActiveReducer,
  },
});
