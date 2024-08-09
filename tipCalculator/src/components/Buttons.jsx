import React from 'react';

const Buttons = ({ onTipChange }) => {
  const handleTipButton = (tip) => onTipChange(tip);
  const handleTipInput = (e) => onTipChange(Number(e.target.value));
  return (
    <div className="tip">
      <h1>Select Tip %</h1>
      <div className="tip-select">
        <button onClick={() => handleTipButton(5)}>5</button>
        <button onClick={() => handleTipButton(10)}>10</button>
        <button onClick={() => handleTipButton(15)}>15</button>
        <button onClick={() => handleTipButton(25)}>25</button>
        <button onClick={() => handleTipButton(50)}>50</button>
        <input 
          type="number" 
          placeholder="Another" 
          className="tipInput" 
          onChange={handleTipInput} 
        />
      </div>
    </div>
  );
  
};

export default Buttons;
