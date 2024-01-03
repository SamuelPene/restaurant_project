import React from 'react';
import './menunavcard.css';

function MenuNavCard({ icon, category, amount }) {
  return (
    <div className="menu__nav-category__container">
      <div className="icon-wrapper">{icon}</div>
      <div className="subcategory__container">
        <div className="subcategory-wrapper">
          <h3>{category}</h3>
        </div>
        <div className="subcategory-number-text">{`${amount} items available`}</div>
      </div>
    </div>
  );
}

export default MenuNavCard;
