import React, { useState } from 'react';
// import CustomBtn from '../components/CustomBtn';

const Visibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Toggle Elements</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Element
      </button>
      {isVisible && <p>This element is visible.</p>}
    </div>
  );
};

export default Visibility;
