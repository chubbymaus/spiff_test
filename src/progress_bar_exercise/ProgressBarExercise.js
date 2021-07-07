import React from "react";
import Exercise from "../exercise/Exercise";
import ProgressBar from "../components/progress_bar/ProgressBar";
import ProgressComponent from "../components/ProgressComponent/ProgressComponent";

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
        <ProgressBar/>
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  return <ProgressComponent/>
};
