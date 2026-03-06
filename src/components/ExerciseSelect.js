import React from 'react';

const exercises = [
  { name: 'Push Ups', type: 'Repetition' },
  { name: 'Running', type: 'Running' },
  { name: 'Plank', type: 'Duration' },
];

function ExerciseSelect({ onStart }) {
  return (
    <div>
      <h2>Select Exercise</h2>
      {exercises.map(({ name, type }) => (
        <button key={name} onClick={() => onStart(name, type)}>
          {name}
        </button>
      ))}
    </div>
  );
}

export default ExerciseSelect;
