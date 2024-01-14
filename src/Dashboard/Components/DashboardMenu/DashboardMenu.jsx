import React from 'react';
import './dashboardMenu.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuApiData } from '../../../State/Features/MenuApi/MenuApiSlice';
import { setActiveMenu } from '../../../State/Features/ActiveMenu/ActiveMenuSlice';
import { useEffect } from 'react';

function MenuItem() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.menuApiData);
  const activeMenu = useSelector((state) => state.activeMenu);

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
            <h3>{e.price}</h3>
            {/* <h5>{e.description}</h5> */}
          </div>
        ))}
    </div>
  );
}

export default MenuItem;
