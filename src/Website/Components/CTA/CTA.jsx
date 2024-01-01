import React from 'react';
import './cta.css';

function CTA({ textContent, setIsDashboardActive, isDashboardActive }) {
  const handleClick = () => {
    if (!isDashboardActive) {
      setIsDashboardActive(true);
    }
  };

  return (
    <button
      className="cta__btn"
      onClick={() => {
        handleClick();
      }}
    >
      {textContent}
    </button>
  );
}

export default CTA;
