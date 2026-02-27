import React, { useState, useEffect, useRef } from 'react';

function DurationExercise({ exercise, onReturn }) {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (running) {
      startTimeRef.current = Date.now() - elapsed;
      intervalRef.current = setInterval(() => {
        setElapsed(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const handleReset = () => {
    setRunning(false);
    setElapsed(0);
  };

  const formatTime = (ms) => {
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const millis = ms % 1000;
    return [
      String(m).padStart(2, '0'),
      String(s).padStart(2, '0'),
      String(millis).padStart(3, '0'),
    ].join(':');
  };

  return (
    <div>
      <h1>{exercise}</h1>
      <p>{formatTime(elapsed)}</p>
      <button onClick={() => setRunning(true)} disabled={running}>Start</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={onReturn}>Return</button>
    </div>
  );
}

export default DurationExercise;
