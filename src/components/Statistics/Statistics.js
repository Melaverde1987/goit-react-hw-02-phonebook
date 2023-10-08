import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Statistics</h3>
      <p>
        <strong>Good:</strong> {good}
      </p>
      <p>
        <strong>Neutral:</strong> {neutral}
      </p>
      <p>
        <strong>Bad:</strong> {bad}
      </p>
      <hr></hr>
      <p>
        <strong className={css.underline}>Total:</strong> {total}
      </p>
      <p>
        <span className={css.underline}>Positive Feedback:</span>{' '}
        {Math.ceil(positivePercentage)}%
      </p>
    </div>
  );
};
