import React, { useState } from 'react';
import './deliveryform.css';
import Autocomplete from 'react-google-autocomplete';
import { useDispatch } from 'react-redux';
import { setAddressForDelivery } from '../../../State/Features/Address/AddressSlice';

function DeliveryForm({ setDisplayDeliveryComponent }) {
  const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    if (address.length > 0) {
      dispatch(setAddressForDelivery(address));
      setDisplayDeliveryComponent();
    }
  };

  return (
    <form id="c-delivery__form">
      <h3>Enter your address for delivery</h3>
      <div id="address__search">
        <Autocomplete
          id="autocomplete"
          apiKey={key}
          options={{
            types: ['geocode', 'establishment'],
          }}
          onPlaceSelected={(place) => {
            setAddress(place.formatted_address);
          }}
        />
        <button
          type="button"
          className="button"
          id="submit__address"
          onClick={() => handleClick()}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export default DeliveryForm;
