import React from 'react';
import './dashboardcard.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveMenu,
  clearActiveMenu,
} from '../../../State/Features/ActiveMenu/ActiveMenuSlice';

function MenuNavCard({ icon, category, amount }) {
  const dispatch = useDispatch();
  const menuApiData = useSelector((state) => state.menuApiData.data);
  const activeMenu = useSelector((state) => state.activeMenu);

  const handleClick = (cat) => {
    const category = cat.toLowerCase();

    switch (category) {
      case 'entrees':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.menu.entrees));
        break;
      case 'burgers':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.menu.burgers));
        break;
      case 'pizza':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.menu.pizza));
        break;
      case 'steak':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.menu.steak));
        break;
      case 'pasta':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.menu.pasta));
        break;
      case 'sides':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.menu.sides));
        break;
      case 'desserts':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.menu.desserts));
        break;
      case 'drinks':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.menu.drinks));
        break;
      default:
        console.log('no match', activeMenu);
        break;
    }
  };

  return (
    <button
      className="c-db__card"
      onClick={(e) => handleClick(e.currentTarget.value)}
      value={category}
    >
      <span className="c-card__icon">{icon}</span>
      <span className="c-card__title">{category}</span>
      <span className="c-card__text">{`${amount} items available`}</span>
    </button>
  );
}

export default MenuNavCard;
