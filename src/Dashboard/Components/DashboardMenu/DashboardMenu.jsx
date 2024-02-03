import React from 'react';
import './dashboardMenu.css';
import { IoMdAddCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuApiData } from '../../../State/Features/MenuApi/MenuApiSlice';
import { isMenuItemModalActive } from '../../../State/Features/isMenuItemModalActive/isMenuItemModalActiveSlice';
import { itemPassedToModal } from '../../../State/Features/ItemPassedToModal/ItemPassedToModalSlice';
import { useEffect } from 'react';

function MenuItem() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.menuApiData);
  const activeMenu = useSelector((state) => state.activeMenu);

  const handleClick = (e) => {
    dispatch(itemPassedToModal(e));
    dispatch(isMenuItemModalActive());
  };

  useEffect(() => {
    dispatch(fetchMenuApiData());
  }, []);

  if (apiData.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="c-db-menu">
      {activeMenu.activeMenu &&
        activeMenu.activeMenu[0]?.data.map((e) => (
          <div className="c-menu__card" key={e.id}>
            <div className="c-menu__img-wrapper">
              <img
                className="c-menu__img"
                alt="A food item from the menu"
                src={e.image}
              ></img>
            </div>
            <h3>{e.name}</h3>
            <span className="c-menu__span">
              <h3>${e.price.toFixed(2)}</h3>
              <IoMdAddCircle
                className="c-menu__add-button"
                onClick={() => handleClick(e)}
              />
            </span>
          </div>
        ))}
    </div>
  );
}

export default MenuItem;
