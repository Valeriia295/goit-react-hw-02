import css from "./Feedback.module.css";

export const Feedback = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <div className={css.container}>
      <p className={css.text}>Good:{good}</p>
      <p className={css.text}>Neutral:{neutral}</p>
      <p className={css.text}>Bad:{bad}</p>
      <p className={css.text}>Total:{totalFeedback}</p>
      <p className={css.text}>Positive:{positiveFeedback}%</p>
    </div>
  );
};
