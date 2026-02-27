import React, { useState } from 'react';
import ExerciseSelect from './components/ExerciseSelect';
import ExerciseScreen from './components/ExerciseScreen';

function App() {
  const [screen, setScreen] = useState(1);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleStart = (exercise, type) => {
    setSelectedExercise(exercise);
    setSelectedType(type);
    setScreen(2);
  };

  if (screen === 1) {
    return <ExerciseSelect onStart={handleStart} />;
  }

  if (screen === 2) {
    return <ExerciseScreen exercise={selectedExercise} type={selectedType} onReturn={() => setScreen(1)} />;
  }
}

export default App;
