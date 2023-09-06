import React, { useState } from 'react';
import {
  ChevronUp,
  ChevronsUp,
  RotateCcw,
  Hash,
  ChevronsDown,
} from 'react-feather';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleIncreaseByTen = () => {
    setCount(count + 10);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleSetRandom = () => {
    setCount(Math.floor(Math.random() * 100) + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleDecreaseByTen = () => {
    setCount(count - 10);
  };

  return (
    <div className="generalBody">
      <div className="container">
        <h1>Current value:</h1>
        <h1 className="count">{count}</h1>

        <div className="buttons">
          <button onClick={handleIncrease}>
            <ChevronUp />
          </button>
          <button onClick={handleIncreaseByTen}>
            <ChevronsUp />
          </button>
          <button onClick={handleReset}>
            <RotateCcw />
          </button>
          <button onClick={handleSetRandom}>
            <Hash />
          </button>
          <button onClick={handleDecrease}>
            <ChevronsDown />
          </button>
          <button onClick={handleDecreaseByTen}>
            <ChevronsDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
