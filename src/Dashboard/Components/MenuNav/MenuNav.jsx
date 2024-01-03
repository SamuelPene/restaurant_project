import React from 'react';
import './menunav.css';
import MenuNavCard from '../MenuNavCard/MenuNavCard';
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

function MenuNav() {
  return (
    <div className="dashboard__nav__container">
      <div className="dashboard__nav__title-wrapper">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard__nav-card__container">
        <MenuNavCard
          icon={<PiBowlFoodDuotone />}
          category={'Entrees'}
          amount={3}
        />
        <MenuNavCard icon={<PiHamburger />} category={'Burgers'} amount={4} />
        <MenuNavCard icon={<PiPizzaThin />} category={'Pizza'} amount={4} />
        <MenuNavCard icon={<GiSteak />} category={'Steak'} amount={4} />
        <MenuNavCard
          icon={<FaPastafarianism />}
          category={'Pasta'}
          amount={5}
        />
        <MenuNavCard icon={<GiBread />} category={'Sides'} amount={4} />
        <MenuNavCard icon={<RiCake3Line />} category={'Deserts'} amount={4} />
        <MenuNavCard icon={<BiDrink />} category={'Drinks'} amount={4} />
      </div>
      <div className="dashboard__nav__subtitle-wrapper">
        <h3>Delivery Available</h3>
      </div>
    </div>
  );
}

export default MenuNav;
