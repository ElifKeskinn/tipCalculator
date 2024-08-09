import React from 'react';

const Input = ({ onChange }) => {
  return (
    <div className="bill">
      <h1>Bill</h1>
      <input 
        type="number" 
        placeholder="00.00" 
        className="billInput" 
        onChange={(e) => onChange(Number(e.target.value))} 
      />
    </div>
  );
};

export default Input;
