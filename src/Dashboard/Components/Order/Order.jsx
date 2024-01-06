import React from 'react';
import './order.css';

function Order() {
  return (
    <div className="dashboard__order__container">
      <div className="order__coupon-wrapper">
        <a>Promotions</a>
      </div>
      <div className="order__id__container">
        <h3>My Order</h3>
        <h3>Order ID:</h3>
      </div>
      <div className="order__item-wrapper">No Items Currently Selected</div>
      <div className="order__delivery-wrapper">Pickup / Delivery</div>
    </div>
  );
}

export default Order;
