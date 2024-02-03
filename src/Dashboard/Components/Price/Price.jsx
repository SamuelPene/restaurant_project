import React from 'react';
import './price.css';
import { useSelector } from 'react-redux';

function Price() {
  const price = useSelector((state) => state.orderPrice);
  const deliveryFee = useSelector((state) => state.isDeliveryActive);
  const orderPrice = price.orderPrice;

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
          <h5>
            {deliveryFee.value === true
              ? `Item(s) Total: $${Number(orderPrice + 0).toFixed(
                  2
                )} (+$4.99 Delivery Fee)`
              : `Item(s) Total: $${Number(orderPrice + 0).toFixed(2)}`}
          </h5>
        </div>
        <div className="c-total-wrapper">
          <h5>
            {deliveryFee.value === true
              ? `Order Total: $${Number(orderPrice + 4.99).toFixed(2)}`
              : `Order Total: $${orderPrice.toFixed(2)}`}
          </h5>
        </div>
        <div className="c-delivery-wrapper">
          <h5>
            {deliveryFee.value === true ? 'Delivery' : 'Pick-Up In Store'}
          </h5>
        </div>
      </div>
      <div className="c-order__button-wrapper">
        <button onClick={() => handleClick()}>Confirm Order</button>
      </div>
    </div>
  );
}

export default Price;
