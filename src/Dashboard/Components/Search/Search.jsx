import React from 'react';
import './search.css';
import { BiSearch } from '../../Assets/Icons/Index';

function Search() {
  return (
    <div className="dashboard__search__container">
      <div className="dashboard__search-inner">
        <input
          type="text"
          placeholder="Search Menu Item..."
          className="search__input"
        ></input>
        <button className="search__btn-wrapper">
          <BiSearch />
        </button>
      </div>
      <h1>Sam's Kitchen - Menu Items</h1>
      <h5>Available Menu Items: 0</h5>
    </div>
  );
}

export default Search;
