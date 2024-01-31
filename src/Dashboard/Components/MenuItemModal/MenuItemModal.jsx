import React from 'react';
import './menuitemmodal.css';
import { IoMdAddCircle, IoMdRemoveCircleOutline } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { isMenuItemModalActive } from '../../../State/Features/isMenuItemModalActive/isMenuItemModalActiveSlice';
import { addItemToActiveOrder } from '../../../State/Features/ActiveOrder/ActiveOrderSlice';
import { clearItemPassedToModal } from '../../../State/Features/ItemPassedToModal/ItemPassedToModalSlice';
import { sumOrderPrice } from '../../../State/Features/OrderPrice/OrderPriceSlice';
import {
  addOneToItemQuantity,
  removeOneFromItemQuantity,
  resetItemQuantityToDefault,
} from '../../../State/Features/ItemQuantity/ItemQuantitySlice';

function MenuItemModal() {
  const quantityValue = useSelector((state) => state.itemQuantity);
  const quantity = quantityValue.value;
  const itemPassed = useSelector((state) => state.itemPassedToModal);
  const item = itemPassed.itemPassedToModal[0];
  const priceToAddToOrder = item.price * quantity;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(addItemToActiveOrder([e, quantity]));
    dispatch(sumOrderPrice(priceToAddToOrder));
    dispatch(resetItemQuantityToDefault());
    dispatch(clearItemPassedToModal());
    dispatch(isMenuItemModalActive());
  };

  const handleClose = () => {
    dispatch(clearItemPassedToModal());
    dispatch(resetItemQuantityToDefault());
    dispatch(isMenuItemModalActive());
  };

  const handleIncrement = () => {
    if (quantity < 100) {
      dispatch(addOneToItemQuantity());
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(removeOneFromItemQuantity());
    }
  };

  return (
    <div className="c-item-modal">
      <div className="c-modal__container">
        <button className="c-modal__button" onClick={() => handleClose()}>
          x
        </button>
        <div className="modal__image">
          <img src={item.image}></img>
        </div>
        <div className="item__title">
          <h3 id="title__name">{item.name}</h3>
          <h3 id="title__price">${item.price.toFixed(2)}</h3>
        </div>
        <div className="item__rating">
          <h3>{item.rating} ★</h3>
        </div>
        <div className="item__description">{item.description}</div>
        <div className="item__total">
          <h3 id="item__total__text">
            {item.name} x {quantity}
          </h3>
          <h3 id="item__total__price__text">
            Price Total: ${priceToAddToOrder.toFixed(2)}
          </h3>
        </div>
        <div className="item__quantity">
          <IoMdRemoveCircleOutline onClick={() => handleDecrement()} />
          {quantity}
          <IoMdAddCircle onClick={() => handleIncrement()} />
        </div>
        <button
          className="item__button"
          onClick={() => handleClick(itemPassed.itemPassedToModal)}
        >
          Add Item To Order
        </button>
      </div>
    </div>
  );
}

export default MenuItemModal;
