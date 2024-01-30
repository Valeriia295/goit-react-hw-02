import css from "./Options.module.css";

export const Options = ({ onGood, onNeutral, onBad, onReset }) => {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={onGood}>
        Good
      </button>
      <button className={css.button} onClick={onNeutral}>
        Neutral
      </button>
      <button className={css.button} onClick={onBad}>
        Bad
      </button>
      <button className={css.button} onClick={onReset}>
        Reset
      </button>
    </div>
  );
};
