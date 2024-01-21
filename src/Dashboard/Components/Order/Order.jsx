import React from 'react';
import './order.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setActiveOrderSlice,
  removeItemFromActiveOrder,
} from '../../../State/Features/ActiveOrder/ActiveOrderSlice';

function Order() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.activeOrder);
  const activeOrder = orderState.activeOrder;

  const handleClick = (e) => {
    dispatch(removeItemFromActiveOrder(e));
  };

  return (
    <div className="c-db__order">
      <div className="c-db__coupon-wrapper">
        <a>Promotions</a>
      </div>
      <div className="c-db__order-id">
        <h3>My Order</h3>
        <h3>Order ID:</h3>
      </div>
      <div className="c-db__order__item-wrapper">
        {`No Items Currently Selected` &&
          activeOrder.map((item) => (
            <div className="c-db__item" key={item.id}>
              <div>{item.data.name}</div>
              <button
                className="c-db__removal-button"
                onClick={() => handleClick(item)}
              >
                X
              </button>
            </div>
          ))}
      </div>
      <div className="c-db__delivery">Pickup / Delivery</div>
    </div>
  );
}

export default Order;
