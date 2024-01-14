import React from 'react';
import './order.css';

function Order() {
  return (
    <div className="c-db__order">
      <div className="c-db__coupon-wrapper">
        <a>Promotions</a>
      </div>
      <div className="c-db__order-id">
        <h3>My Order</h3>
        <h3>Order ID:</h3>
      </div>
      <div className="c-db__item">No Items Currently Selected</div>
      <div className="c-db__delivery">Pickup / Delivery</div>
    </div>
  );
}

export default Order;
