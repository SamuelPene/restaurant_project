import React from 'react';
import './order.css';
import { useSelector, useDispatch } from 'react-redux';
import { deductRemovedItemPrice } from '../../../State/Features/OrderPrice/OrderPriceSlice';
import { removeItemFromActiveOrder } from '../../../State/Features/ActiveOrder/ActiveOrderSlice';

function Order() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.activeOrder);
  const activeOrder = orderState.activeOrder;

  const handleClick = (e) => {
    dispatch(removeItemFromActiveOrder(e));
    dispatch(deductRemovedItemPrice(e.data[0][0].price * e.data[1]));
  };

  return (
    <div className="c-db__order">
      <div className="c-coupon-wrapper">
        <a>Promotions</a>
      </div>
      <div className="c-order-id">
        <h3>My Order</h3>
        <h3>Order ID:</h3>
      </div>
      <div
        className={
          activeOrder.length > 5
            ? 'c-order__item-wrapper scroll'
            : 'c-order__item-wrapper'
        }
      >
        {activeOrder.length <= 0 ? (
          <h4>No Items Currently Selected</h4>
        ) : (
          activeOrder.map((item) => (
            <div className="c-item" key={item.id}>
              <h4>{item.data[0][0].name} -</h4>
              <h4>(x{item.data[1]})</h4>
              <div className="c-item-inner">
                <h4>
                  ${Number(item.data[0][0].price * item.data[1]).toFixed(2)}
                </h4>
              </div>
              <button
                className="c-removal-button"
                onClick={() => handleClick(item)}
              >
                x
              </button>
            </div>
          ))
        )}
      </div>
      <div className="delivery__change__option">Pickup / Delivery</div>
    </div>
  );
}

export default Order;
