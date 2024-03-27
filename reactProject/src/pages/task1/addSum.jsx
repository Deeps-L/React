import React, { useState } from 'react';
// import '../../style/style.css';


const AddSumTwo = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState(null);

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const calculateSum = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setSum(num1 + num2);
    } else {
      setSum(null);
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <div>
        <label htmlFor="number1">Number 1:</label>
        <input
          type="text"
          id="number1"
          value={number1}
          onChange={handleNumber1Change}
        />
      </div>
      <div>
        <label htmlFor="number2">Number 2:</label>
        <input
          type="number"
          id="number2"
          value={number2}
          onChange={handleNumber2Change}
        />
      </div>
      <button onClick={calculateSum}  className="calculate-btn">ADD</button>
      {sum !== null && <p>The Sum is-: {sum}</p>}
    </div>
  );
};

export default AddSumTwo;
