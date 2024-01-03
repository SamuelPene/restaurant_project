import React from 'react';
import './menuitem.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuApiData } from '../../../State/Features/MenuApi/MenuApiSlice';
import { useEffect } from 'react';

function MenuItem() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.menuApiData);

  useEffect(() => {
    dispatch(fetchMenuApiData());
  }, []);

  if (apiData.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="dashboard__menu-item__container">
      Dashboard Item container
      {apiData.data && apiData.data.menu.burgers.map((e) => <li>{e.name}</li>)}
    </div>
  );
}

export default MenuItem;
