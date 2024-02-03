import React from 'react';
import './deliveryoptionscreen.css';
import { displayDeliveryOptionScreen } from '../../../State/Features/DeliveryOption/DeliveryOptionSlice';
import { useDispatch } from 'react-redux';
import { isDeliveryActive } from '../../../State/Features/isDeliveryActive/isDeliveryActiveSlice';

function DeliveryOptionScreen() {
  const dispatch = useDispatch();

  const handleClickPickup = () => {
    dispatch(displayDeliveryOptionScreen());
  };
  const handleClickDelivery = () => {
    dispatch(displayDeliveryOptionScreen());
    dispatch(isDeliveryActive());
  };

  return (
    <div className="c-delivery">
      <div className="delivery__inner">
        <div className="heading__wrapper">
          <h1>Sam's Kitchen</h1>
        </div>
        <div className="delivery__description">
          <p>
            The #1 hottest local restaurant serving a mix of european and
            western cuisine
          </p>
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
      </div>
    </div>
  );
}

export default DeliveryOptionScreen;
