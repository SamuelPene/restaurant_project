import React from 'react';
import './Stylesheet/dashboard.css';
import {
  DashboardNav,
  DashboardMenu,
  Search,
  Order,
  Price,
} from './Components';

function Dashboard() {
  return (
    <main className="c-db">
      <div className="c-db-inner">
        <DashboardNav />
        <Search />
        <DashboardMenu />
        <Order />
        <Price />
      </div>
    </main>
  );
}

export default Dashboard;
