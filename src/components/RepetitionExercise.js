import React, { useState } from 'react';

function RepetitionExercise({ exercise, onReturn }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{exercise}</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+ Rep</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={onReturn}>Return</button>
    </div>
  );
}

export default RepetitionExercise;
