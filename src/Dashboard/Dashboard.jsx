import React from 'react';
import './Stylesheet/dashboard.css';
import {
  DashboardNav,
  DashboardMenu,
  Search,
  Order,
  Price,
  MenuItemModal,
} from './Components';
import { useSelector } from 'react-redux';

function Dashboard() {
  const isActive = useSelector((state) => state.isMenuItemModalActive);

  return (
    <main className="c-db">
      <div className="c-db-inner">
        <DashboardNav />
        <Search />
        <DashboardMenu />
        <Order />
        <Price />
        {isActive.active && <MenuItemModal />}
      </div>
    </main>
  );
}

export default Dashboard;
