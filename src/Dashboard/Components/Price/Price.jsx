import React from 'react';
import './price.css';

function Price() {
  return (
    <div className="c-db__price">
      <div className="c-db__price-inner">
        <div className="c-db__discount-wrapper">
          <h5>No Discount Active</h5>
        </div>
        <div className="c-db__item-wrapper">
          <h5>Item Total:</h5>
        </div>
        <div className="c-db__total-wrapper">
          <h5>Order Total:</h5>
        </div>
        <div className="c-db__delivery-wrapper">
          <h5>Select A Delivery Type</h5>
        </div>
      </div>
      <div className="c-db__order__button-wrapper">
        <button>Confirm Order</button>
      </div>
    </div>
  );
}

export default Price;
