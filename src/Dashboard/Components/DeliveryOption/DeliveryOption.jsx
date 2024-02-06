import React from 'react';
import './deliveryoption.css';

function DeliveryOption({ handleClickDelivery, handleClickPickup }) {
  return (
    <>
      <div className="heading__wrapper">
        <h1>Sam's Kitchen</h1>
      </div>
      <div className="delivery__text">
        <h5>Select a method of delivery!</h5>
      </div>
      <div className="delivery__button__container">
        <button
          className="pickup__button button"
          onClick={() => handleClickPickup()}
        >
          Pick Up
        </button>
        <button
          className="delivery__button button"
          onClick={() => handleClickDelivery()}
        >
          Delivery
        </button>
      </div>
    </>
  );
}

export default DeliveryOption;
