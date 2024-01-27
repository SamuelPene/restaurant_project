import React from 'react';
import './menuitemmodal.css';
import { useSelector } from 'react-redux';

function MenuItemModal() {
  const active = useSelector((state) => state.active);

  return <div className="c-item-modal">Menu Item Modal</div>;
}

export default MenuItemModal;
