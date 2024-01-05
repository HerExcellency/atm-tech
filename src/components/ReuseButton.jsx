// ReusableLinkButton.js

import React from 'react';

const ReuseButton = ({ url, buttonText }) => {
  const goToPage = () => {
    window.location.href = url;
  };

  return (
    <button className="customButton borderRadius" onClick={goToPage}>
      {buttonText}
    </button>
  );
};

export default ReuseButton;
