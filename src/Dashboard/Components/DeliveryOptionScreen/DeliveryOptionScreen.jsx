import React, { useState } from 'react';
import './deliveryoptionscreen.css';
import { displayDeliveryOptionScreen } from '../../../State/Features/DeliveryOption/DeliveryOptionSlice';
import { useDispatch } from 'react-redux';
import { isDeliveryActive } from '../../../State/Features/isDeliveryActive/isDeliveryActiveSlice';
import { DeliveryForm, DeliveryOption } from '../index';

function DeliveryOptionScreen() {
  const dispatch = useDispatch();
  const [displayDeliveryComponent, setDisplayDeliveryComponent] =
    useState(false);

  const handleClickPickup = () => {
    dispatch(displayDeliveryOptionScreen());
  };
  const handleClickDelivery = () => {
    setDisplayDeliveryComponent((current) => !current);
    dispatch(isDeliveryActive());
  };

  return (
    <div className="c-delivery">
      <div className="delivery__inner">
        {displayDeliveryComponent ? (
          <DeliveryForm
            setDisplayDeliveryComponent={setDisplayDeliveryComponent}
          />
        ) : (
          <div
            className={
              displayDeliveryComponent
                ? 'delivery__method-inactive'
                : 'delivery__method'
            }
          >
            <DeliveryOption
              handleClickDelivery={handleClickDelivery}
              handleClickPickup={handleClickPickup}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DeliveryOptionScreen;
