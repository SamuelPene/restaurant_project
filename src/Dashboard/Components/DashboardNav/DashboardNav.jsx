import React from 'react';
import { useSelector } from 'react-redux';
import DashboardCard from '../DashboardCard/DashboardCard';
import './dashboardnav.css';

function DashboardNav() {
  const dashBoardData = useSelector((state) => state.menuNavCategories);

  return (
    <div className="c-db-nav">
      <div className="c-nav__title-wrapper">
        <h1>Dashboard</h1>
      </div>
      <nav className="c-nav__card-container">
        {dashBoardData.value.map((e) => (
          <DashboardCard category={e.name} amount={e.length} icon={e.icon} />
        ))}
      </nav>
      <div className="c-nav__subtitle-wrapper">
        <h3>Delivery Available</h3>
      </div>
    </div>
  );
}

export default DashboardNav;
