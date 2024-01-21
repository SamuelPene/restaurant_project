import React from 'react';
import './dashboardMenu.css';
import { IoMdAddCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuApiData } from '../../../State/Features/MenuApi/MenuApiSlice';
import { setActiveOrder } from '../../../State/Features/ActiveOrder/ActiveOrderSlice';
import { setActiveMenu } from '../../../State/Features/ActiveMenu/ActiveMenuSlice';
import { useEffect } from 'react';

function MenuItem() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.menuApiData);
  const activeMenu = useSelector((state) => state.activeMenu);
  const activeOrder = useSelector((state) => state.activeOrder);

  const handleClick = (e) => {
    dispatch(setActiveOrder(e));
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
          <div className="c-db-menu__card" key={e.id}>
            <div className="c-db-menu__img-wrapper">
              <img className="c-db-menu__img" src={e.image}></img>
            </div>
            <h3>{e.name}</h3>
            <span className="c-db-menu__span">
              <h3>{e.price}</h3>
              <IoMdAddCircle
                className="c-db-menu__add-button"
                onClick={() => handleClick(e)}
              />
            </span>

            {/* <h5>{e.description}</h5> */}
            {/* <button onClick={() => handleClick(e)}>add to menu</button> */}
          </div>
        ))}
    </div>
  );
}

export default MenuItem;
