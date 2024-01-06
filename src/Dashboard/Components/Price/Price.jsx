import React from 'react';
import './price.css';

function Price() {
  return (
    <div className="dashboard__price__container">
      <div className="price__text__container">
        <div className="price__discount-wrapper">
          <h5>No Discount Active</h5>
        </div>
        <div className="price__item-total-wrapper">
          <h5>Item Total:</h5>
        </div>
        <div className="price__order-total-wrapper">
          <h5>Order Total:</h5>
        </div>
        <div className="price__delivery-type-wrapper">
          <h5>Select A Delivery Type</h5>
        </div>
      </div>
      <div className="price__confirm-order-btn-wrapper">
        <button>Confirm Order</button>
      </div>
    </div>
  );
}

export default Price;
