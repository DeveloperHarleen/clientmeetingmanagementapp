// src/components/Counter.jsx
import React, { useState } from 'react';
import './Counter.css'; // Optional: Include styling

const Counter = () => {
  const [count, setCount] = useState(0); // State for the counter

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
