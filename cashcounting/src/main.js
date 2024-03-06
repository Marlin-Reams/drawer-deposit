import React, { useState } from 'react';
import './main.css';

function App() {
  const [startingAmount, setStartingAmount] = useState(300);
  const [pennyRolls, setPennyRolls] = useState('');
  const [pennies, setPennies] = useState('');
  const [nickleRolls, setNickleRolls] = useState('');
  const [nickels, setNickels] = useState('');
  const [dimeRolls, setDimeRolls] = useState('');
  const [dimes, setDimes] = useState('');
  const [quarterRolls, setQuarterRolls] = useState('');
  const [quarters, setQuarters] = useState('');
  const [dollars, setDollars] = useState('');
  const [fives, setFives] = useState('');
  const [tens, setTens] = useState('');
  const [twenties, setTwenties] = useState('');
  const [fifties, setFifties] = useState('');
  const [hundreds, setHundreds] = useState('');

  // Calculate total cash count
  const total = (parseFloat(pennyRolls || 0) * 0.50) + (parseFloat(pennies || 0) * 0.01) + (parseFloat(nickleRolls || 0) * 2) + (parseFloat(nickels || 0) * 0.05) +
    (parseFloat(dimeRolls || 0) * 5) + (parseFloat(dimes || 0) * 0.10) + (parseFloat(quarterRolls || 0) * 10) + (parseFloat(quarters || 0) * 0.25) + parseFloat(dollars || 0)
    + (parseFloat(fives || 0) * 5) + (parseFloat(tens || 0) * 10) + (parseFloat(twenties || 0) * 20) + (parseFloat(fifties || 0) * 50) + (parseFloat(hundreds || 0) * 100);

  // Reset all input fields to 0
  const resetFields = () => {
    setPennyRolls('');
    setPennies('');
    setNickleRolls('');
    setNickels('');
    setDimes('');
    setDimeRolls('');
    setQuarters('');
    setQuarterRolls('');
    setDollars('');
    setFives('');
    setTens('');
    setTwenties('');
    setFifties('');
    setHundreds('');
  };

  function calcDepo(total) {
    return total - startingAmount;
  }
  

  // Function to calculate coin totals
  const pennyTotal = () => {
    return (parseFloat(pennyRolls || 0) * 0.50) + (parseFloat(pennies || 0) * 0.01);
  };

  const nickleTotal = () => {
    return (parseFloat(nickleRolls || 0) * 2) + (parseFloat(nickels || 0) * 0.05);
  }

  const dimeTotal = () => {
    return (parseFloat(dimeRolls || 0) * 5) + (parseFloat(dimes || 0) * 0.10);
  }

  const quarterTotal = () => {
    return (parseFloat(quarterRolls || 0) * 10) + (parseFloat(quarters || 0) * 0.25);
  }

  const dollarTotal = () => {
    return (parseFloat(dollars || 0) * 1);
  }

  const fivesTotal = () => {
    return (parseFloat(fives || 0) * 5);
  }

  const tensTotal = () => {
    return (parseFloat(tens || 0) * 10);
  }

  const twentiesTotal = () => {
    return (parseFloat(twenties || 0) * 20);
  }

  const fiftiesTotal = () => {
    return (parseFloat(fifties || 0) * 50);
  }

  const hundredsTotal = () => {
    return (parseFloat(hundreds || 0) * 100);
  }

  return (
    <div className="container">
      <h1 className='title'>Cash Counting App</h1>
      <div className="drawer-container">
        <label className="drawer-box"><h2>Starting Drawer Amount:</h2></label>
        <input type="number" value={startingAmount} onChange={(e) => setStartingAmount(parseInt(e.target.value))} />
      </div>
      <div className="input-groups">
        <div className="coins-section">
          <h2>Coins</h2>

          <div className="denomination-box">
            <div>
              <label className="label">Penny Rolls:</label>
              <input type="number" value={pennyRolls} onChange={(e) => setPennyRolls(parseInt(e.target.value))} />
              <label className="label">Pennies:</label>
              <input type="number" value={pennies} onChange={(e) => setPennies(parseInt(e.target.value))} />
              <h2>Total Pennies: ${pennyTotal().toFixed(2)}</h2>
            </div>
          </div>
          <div className="denomination-box">

            <label className="label">Nickle Rolls:</label>
            <input type="number" value={nickleRolls} onChange={(e) => setNickleRolls(parseInt(e.target.value))} />
            <label className="label">Nickels:</label>
            <input type="number" value={nickels} onChange={(e) => setNickels(parseInt(e.target.value))} />
            <h2>Total Nickles: ${nickleTotal().toFixed(2)}</h2>
          </div>

          <div className="denomination-box">
            <label className="label">Dime Rolls:</label>
            <input type="number" value={dimeRolls} onChange={(e) => setDimeRolls(parseInt(e.target.value))} />
            <label className="label">Dimes:</label>
            <input type="number" value={dimes} onChange={(e) => setDimes(parseInt(e.target.value))} />
            <h2>Total Dimes: ${dimeTotal().toFixed(2)}</h2>
          </div>

          <div className="denomination-box">
            <label className="label">Quarter Rolls:</label>
            <input type="number" value={quarterRolls} onChange={(e) => setQuarterRolls(parseInt(e.target.value))} />
            <label className="label">Quarters:</label>
            <input type="number" value={quarters} onChange={(e) => setQuarters(parseInt(e.target.value))} />
            <h2>Total Quarters: ${quarterTotal().toFixed(2)}</h2>
          </div>

        </div>
        <div className="currency-section">
          <h2>Bills</h2>
          <div className="denomination-box">
            <label className="label">Ones:</label>
            <input type="number" value={dollars} onChange={(e) => setDollars(parseInt(e.target.value))} />
            <h2>Total Dollars: ${dollarTotal().toFixed(2)}</h2>
          </div>

          <div className="denomination-box">
            <label className="label">Fives:</label>
            <input type="number" value={fives} onChange={(e) => setFives(parseInt(e.target.value))} />
            <h2>total Fives: ${fivesTotal().toFixed(2)}</h2>
          </div>

          <div className="denomination-box">
            <label className="label">Tens:</label>
            <input type="number" value={tens} onChange={(e) => setTens(parseInt(e.target.value))} />
            <h2>Total Tens: ${tensTotal().toFixed(2)}</h2>
          </div>

          <div className="denomination-box">
            <label className="label">Twenties:</label>
            <input type="number" value={twenties} onChange={(e) => setTwenties(parseInt(e.target.value))} />
            <h2>Total Twenties: ${twentiesTotal().toFixed(2)}</h2>
          </div>

          <div className="denomination-box">
            <label className="label">Fifties:</label>
            <input type="number" value={fifties} onChange={(e) => setFifties(parseInt(e.target.value))} />
            <h2>Total Fifties: ${fiftiesTotal().toFixed(2)}</h2>
          </div>

          <div className="denomination-box">
            <label className="label">Hundreds:</label>
            <input type="number" value={hundreds} onChange={(e) => setHundreds(parseInt(e.target.value))} />
            <h2>Total Hundreds: ${hundredsTotal().toFixed(2)}</h2>
          </div >
        </div>
      </div>
      <div className="total-box">
        <div className="button-container">
        <button className="button-success" onClick={() => alert(`Deposit: $${calcDepo(total).toFixed(2)}`)}>Calculate Deposit</button>
          <button className="button-danger" onClick={resetFields}>Reset</button>
        
        </div>
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default App;
