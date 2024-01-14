import React from 'react';
import './dashboardnav.css';
import DashboardCard from '../DashboardCard/DashboardCard';
import {
  PiBowlFoodDuotone,
  PiHamburger,
  PiPizzaThin,
  GiSteak,
  GiBread,
  FaPastafarianism,
  RiCake3Line,
  BiDrink,
} from '../../Assets/Icons/Index';

function DashboardNav() {
  return (
    <div className="c-db-nav">
      <div className="c-db-nav__title-wrapper">
        <h1>Dashboard</h1>
      </div>
      <div className="c-db-nav__card-container">
        <DashboardCard
          icon={<PiBowlFoodDuotone />}
          category={'Entrees'}
          amount={3}
        />
        <DashboardCard icon={<PiHamburger />} category={'Burgers'} amount={4} />
        <DashboardCard icon={<PiPizzaThin />} category={'Pizza'} amount={4} />
        <DashboardCard icon={<GiSteak />} category={'Steak'} amount={4} />
        <DashboardCard
          icon={<FaPastafarianism />}
          category={'Pasta'}
          amount={5}
        />
        <DashboardCard icon={<GiBread />} category={'Sides'} amount={4} />
        <DashboardCard
          icon={<RiCake3Line />}
          category={'Desserts'}
          amount={4}
        />
        <DashboardCard icon={<BiDrink />} category={'Drinks'} amount={4} />
      </div>
      <div className="c-db-nav__subtitle-wrapper">
        <h3>Delivery Available</h3>
      </div>
    </div>
  );
}

export default DashboardNav;
