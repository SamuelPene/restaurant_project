import React from 'react';
import './cta.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setDashboardActive,
  setDashboardInactive,
} from '../../../State/Features/isDashboardActive/isDashboardActiveSlice';
import {
  setWebsiteActive,
  setWebsiteInactive,
} from '../../../State/Features/isWebsiteActive/isWebsiteActiveSlice';

function CTA({ textContent }) {
  const dispatch = useDispatch();
  const isWebsiteActive = useSelector((state) => state.isWebsiteActive.value);
  const isDashboardActive = useSelector(
    (state) => state.isDashBoardActive.value
  );

  return (
    <button
      className="cta__btn"
      onClick={() => {
        if (isWebsiteActive && !isDashboardActive) {
          dispatch(setDashboardActive());
          dispatch(setWebsiteInactive());
        }
      }}
    >
      {textContent}
    </button>
  );
}

export default CTA;
