import './App.css'
import React, { useState } from 'react';
import Input from './components/Input';
import Buttons from './components/Buttons';
import NumOfPeople from './components/NumOfPeople';
import Output from './components/Output';
import ResetButton from './components/resetButton';

const App = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleBillChange = (value) => setBill(value);
  const handleTipChange = (value) => setTip(value);
  const handleNumberOfPeopleChange = (value) => setNumberOfPeople(value);

  const calculateTipAmount = () => (bill * tip) / 100;
  const calculateTotalAmount = () => (bill + calculateTipAmount()) / numberOfPeople;

  return (
    <div className="container">
      <img src="img/SPLITTER.svg" alt="Logo"/>
      <div className="splitter">
        <div className="getinform">
          <Input onBillChange={handleBillChange} />
          <Buttons onTipChange={handleTipChange} />
          <NumOfPeople onNumberOfPeopleChange={handleNumberOfPeopleChange} />
        </div>
        <Output tipAmount={calculateTipAmount()} totalAmount={calculateTotalAmount()} />
        <ResetButton reset={() => {
          setBill(0);
          setTip(0);
          setNumberOfPeople(1);
        }} />
      </div>
    </div>
  );
};

export default App;

