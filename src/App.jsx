import { useState } from "react";
import { useEffect } from "react";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import { Notification } from "./components/Notification/Notification";

export const App = () => {
  const [options, setOptions] = useState(() => {
    const savedOptions = window.localStorage.getItem("saved-options");
    if (savedOptions !== null) {
      return JSON.parse(savedOptions);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-options", JSON.stringify(options));
  }, [options]);

  const handleUpdate = (value) => {
    setOptions((options) => ({
      ...options,
      [value]: options[value] + 1,
    }));
  };

  const availableFeedback = options.good + options.neutral + options.bad;

  const handleReset = () => {
    return setOptions({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Description />
      <Options
        onGood={() => handleUpdate("good")}
        onNeutral={() => handleUpdate("neutral")}
        onBad={() => handleUpdate("bad")}
        onReset={handleReset}
      />
      {availableFeedback ? (
        <Feedback
          good={options.good}
          neutral={options.neutral}
          bad={options.bad}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};
