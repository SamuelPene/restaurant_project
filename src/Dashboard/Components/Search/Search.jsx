import React from 'react';
import './search.css';
import { BiSearch } from '../../Assets/Icons/Index';
import { useSelector } from 'react-redux';

function Search() {
  const activeMenu = useSelector((state) => state.activeMenu);
  const activeMenuLength = activeMenu.activeMenu[0]?.data.length;

  return (
    <div className="c-db__search">
      <div className="c-db__search-inner">
        <input
          type="text"
          placeholder="Search Menu Item..."
          className="c-db__input"
        ></input>
        <button className="c-db__search__button-wrapper">
          <BiSearch />
        </button>
      </div>
      <h1>Sam's Kitchen - Menu Items</h1>
      <h5>{`Available Menu Items: ${activeMenuLength || 0}`}</h5>
    </div>
  );
}

export default Search;
