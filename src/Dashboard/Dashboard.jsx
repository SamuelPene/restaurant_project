import React from 'react';
import './Stylesheet/dashboard.css';
import { MenuItem, MenuNav, Search, Order, Price } from './Components';

function Dashboard() {
  return (
    <main className="dashboard__container">
      <div className="dashboard-inner">
        <MenuNav />
        <Search />
        <MenuItem />
        <Order />
        <Price />
      </div>
    </main>
  );
}

export default Dashboard;
