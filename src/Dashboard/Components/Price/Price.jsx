import React from 'react';
import './price.css';
import { useSelector, useDispatch } from 'react-redux';
import { sumOrder } from '../../../State/Features/OrderPrice/OrderPriceSlice';

function Price() {
  const orderState = useSelector((state) => state.activeOrder);
  const price = useSelector((state) => state.orderPrice);
  const activeOrder = orderState.activeOrder;
  const orderPrice = price.orderPrice.toFixed(2);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(sumOrder(e));
  };

  return (
    <div className="c-db__price">
      <div className="c-price-inner">
        <div className="c-discount-wrapper">
          <h5>No Discount Active</h5>
        </div>
        <div className="c-item-wrapper">
          <h5>Item Total: {orderPrice}</h5>
        </div>
        <div className="c-total-wrapper">
          <h5>Order Total:</h5>
        </div>
        <div className="c-delivery-wrapper">
          <h5>Select A Delivery Type</h5>
        </div>
      </div>
      <div className="c-order__button-wrapper">
        <button onClick={() => handleClick(activeOrder)}>Confirm Order</button>
      </div>
    </div>
  );
}

export default Price;
