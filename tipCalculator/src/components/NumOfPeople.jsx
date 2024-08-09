import React from 'react';

const NumOfPeople = ({ onNumOfPeopleChange }) => {
  return (
    <div className="numberofpeople">
      <h1>Number Of People</h1>
      <input 
        type="number" 
        placeholder="0" 
        className="numberofInput" 
        onChange={(e) => onNumOfPeopleChange(Number(e.target.value))}
      />
    </div>
  );
};

export default NumOfPeople;
