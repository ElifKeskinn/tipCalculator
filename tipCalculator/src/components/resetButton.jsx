import React from 'react';

const ResetButton = ({ reset }) => {
  return (
    <button className="resetBtn" onClick={reset}>
      Reset
    </button>
  );
};

export default ResetButton;
