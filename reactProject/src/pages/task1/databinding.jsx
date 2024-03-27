import React, { useState } from 'react';

const DataBinding = () => {
    const [name, setName] = useState('');

    // Event handler to update the name
    const handleNameChange = (event) => {
      setName(event.target.value);
    };

  return (
    <div>
      <h1>Data Binding Example is Here.</h1>
      <input
        type="text"
        value={name} 
        onChange={handleNameChange} 
      />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default DataBinding;
