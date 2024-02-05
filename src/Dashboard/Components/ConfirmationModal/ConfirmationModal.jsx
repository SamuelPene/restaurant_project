import React from 'react';
import './confirmationmodal.css';
import { setConfirmationModalInactive } from '../../../State/Features/isConfirmationModalActive/isConfirmationModalActiveSlice';
import { useDispatch } from 'react-redux';

function ConfirmationModal() {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setConfirmationModalInactive());
  };

  return (
    <div id="c-confirmation__modal">
      <div id="confirmation__container">
        <button
          className="confirmation__button button"
          onClick={() => handleClose()}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
