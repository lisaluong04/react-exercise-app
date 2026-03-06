import React from 'react';
import RepetitionExercise from './RepetitionExercise';
import DurationExercise from './DurationExercise';
import RunningExercise from './RunningExercise';

function ExerciseScreen({ exercise, type, onReturn }) {
  let component;

  switch (type) {
    case 'Repetition':
      component = <RepetitionExercise exercise={exercise} onReturn={onReturn} />;
      break;
    case 'Duration':
      component = <DurationExercise exercise={exercise} onReturn={onReturn} />;
      break;
    case 'Running':
      component = <RunningExercise exercise={exercise} onReturn={onReturn} />;
      break;
    default:
      component = null;
  }

  return (
    <div>
      {component}
    </div>
  );
}

export default ExerciseScreen;
