import React, { useState } from 'react';

const EnableDisable = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleInputChange = (event) => {
    // Enable the button if the input value is not empty
    setIsButtonEnabled(event.target.value !== '');
  };

  const handleSubmit = () => {
    // Handle form submission
    alert('Form submitted!');
  };

  return (
    <div>
      <h1>Enable/Disable Button Example</h1>
      <input type="text" onChange={handleInputChange} />
      {/* Button is enabled/disabled based on the state */}
      <button onClick={handleSubmit} disabled={!isButtonEnabled}>
        Submit
      </button>
    </div>
  );
};

export default EnableDisable;
