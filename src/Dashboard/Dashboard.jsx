import React from 'react';
import './Stylesheet/dashboard.css';
import {
  DashboardNav,
  DashboardMenu,
  Search,
  Order,
  Price,
  MenuItemModal,
  DeliveryOptionScreen,
  ConfirmationModal,
} from './Components';
import { useSelector } from 'react-redux';

function Dashboard() {
  const isActive = useSelector((state) => state.isMenuItemModalActive);
  const isConfirmationModalActive = useSelector(
    (state) => state.isConfirmationModalActive.active
  );
  const displayDeliveryModeScreen = useSelector(
    (state) => state.deliveryOption.value
  );

  return (
    <>
      {displayDeliveryModeScreen && <DeliveryOptionScreen />}
      {displayDeliveryModeScreen || (
        <main className="c-db">
          <div className="c-db-inner">
            <DashboardNav />
            <Search />
            <DashboardMenu />
            <Order />
            <Price />
            {isActive.active && <MenuItemModal />}
            {isConfirmationModalActive && <ConfirmationModal />}
          </div>
        </main>
      )}
    </>
  );
}

export default Dashboard;
