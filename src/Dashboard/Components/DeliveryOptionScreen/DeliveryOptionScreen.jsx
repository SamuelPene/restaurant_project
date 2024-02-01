import React from 'react';
import './deliveryoptionscreen.css';
import { displayDeliveryOptionScreen } from '../../../State/Features/DeliveryOption/DeliveryOptionSlice';
import { useDispatch } from 'react-redux';

function Mode() {
  const dispatch = useDispatch();

  const handleClickPickup = () => {
    dispatch(displayDeliveryOptionScreen());
  };
  const handleClickDelivery = () => {
    dispatch(displayDeliveryOptionScreen());
  };

  return (
    <div className="c-mode">
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
  );
}

export default Mode;
