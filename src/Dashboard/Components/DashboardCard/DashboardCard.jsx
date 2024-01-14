import React from 'react';
import './dashboardcard.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveMenu,
  clearActiveMenu,
} from '../../../State/Features/ActiveMenu/ActiveMenuSlice';

function MenuNavCard({ icon, category, amount }) {
  const dispatch = useDispatch();
  const menuApiData = useSelector((state) => state.menuApiData);
  const activeMenu = useSelector((state) => state.activeMenu);

  const handleClick = (cat) => {
    const category = cat.toLowerCase();

    switch (category) {
      case 'entrees':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.data.menu.entrees));
        break;
      case 'burgers':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.data.menu.burgers));
        break;
      case 'pizza':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.data.menu.pizza));
        break;
      case 'steak':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.data.menu.steak));
        break;
      case 'pasta':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.data.menu.pasta));
        break;
      case 'sides':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.data.menu.sides));
        break;
      case 'desserts':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.data.menu.desserts));
        break;
      case 'drinks':
        dispatch(clearActiveMenu());
        dispatch(setActiveMenu(menuApiData.data.menu.drinks));
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
      <span className="c-db__icon-wrapper">{icon}</span>
      <span className="c-db__title">
        <span className="c-db__title-wrapper">
          <h3>{category}</h3>
        </span>
        <span className="c-db__text">{`${amount} items available`}</span>
      </span>
    </button>
  );
}

export default MenuNavCard;
