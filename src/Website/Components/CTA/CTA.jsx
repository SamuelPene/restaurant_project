import React from 'react';
import './cta.css';

function CTA({
  textContent,
  setIsDashboardActive,
  isDashboardActive,
  setIsWebsiteActive,
}) {
  const handleClick = () => {
    if (!isDashboardActive) {
      setIsDashboardActive(true);
      setIsWebsiteActive(false);
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
