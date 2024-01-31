import React from 'react';
import './price.css';
import { useSelector, useDispatch } from 'react-redux';
import { sumOrderPrice } from '../../../State/Features/OrderPrice/OrderPriceSlice';

function Price() {
  const orderState = useSelector((state) => state.activeOrder);
  const price = useSelector((state) => state.orderPrice);
  const orderPrice = price.orderPrice;
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(orderPrice);
  };

  return (
    <div className="c-db__price">
      <div className="c-price-inner">
        <div className="c-discount-wrapper">
          <h5>No Discount Active</h5>
        </div>
        <div className="c-item-wrapper">
          <h5>Item(s) Total: ${Number(orderPrice + 0).toFixed(2)}</h5>
        </div>
        <div className="c-total-wrapper">
          <h5>Order Total:</h5>
        </div>
        <div className="c-delivery-wrapper">
          <h5>Select A Delivery Type</h5>
        </div>
      </div>
      <div className="c-order__button-wrapper">
        <button onClick={() => handleClick()}>Confirm Order</button>
      </div>
    </div>
  );
}

export default Price;
