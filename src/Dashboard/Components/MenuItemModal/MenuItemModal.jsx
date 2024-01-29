import React from 'react';
import './menuitemmodal.css';
import { useSelector, useDispatch } from 'react-redux';
import { isMenuItemModalActive } from '../../../State/Features/isMenuItemModalActive/isMenuItemModalActiveSlice';
import { addItemToActiveOrder } from '../../../State/Features/ActiveOrder/ActiveOrderSlice';
import { clearItemPassedToModal } from '../../../State/Features/ItemPassedToModal/ItemPassedToModalSlice';

function MenuItemModal() {
  const active = useSelector((state) => state.active);
  const activeOrder = useSelector((state) => state.activeOrder);
  const itemPassed = useSelector((state) => state.itemPassedToModal);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(addItemToActiveOrder(e));
    dispatch(clearItemPassedToModal());
    dispatch(isMenuItemModalActive());
  };

  return (
    <div className="c-item-modal">
      <div className="c-modal__grid">
        <button
          className="c-modal__button"
          onClick={() => dispatch(isMenuItemModalActive())}
        >
          x
        </button>
        <button onClick={() => handleClick(itemPassed.itemPassedToModal)}>
          Add to Order
        </button>
      </div>
    </div>
  );
}

export default MenuItemModal;
