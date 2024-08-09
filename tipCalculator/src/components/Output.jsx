import React from 'react';

const Output = ({ tipAmount, totalAmount }) => {
  return (
    <div className="output">
      <div className="output-inform">
        <h1>Tip Amount <span className="tip-amount">{tipAmount.toFixed(2)}</span></h1>
        <p>/ Person</p>
      </div>
      <div className="output-inform">
        <h1>Total: <span className="total-amount">{totalAmount.toFixed(2)}</span></h1>
        <p>/ Person</p>
      </div>
    </div>
  );
};

export default Output;
