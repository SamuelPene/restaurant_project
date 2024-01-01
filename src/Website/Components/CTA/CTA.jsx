import React from 'react';
import './cta.css';

function CTA({ textContent }) {
  const handleClick = () => {
    /* CTA onClick code */
  };

  return (
    <button className="cta__btn" onClick={handleClick()}>
      {textContent}
    </button>
  );
}

export default CTA;
