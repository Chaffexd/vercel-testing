import classes from "./answer.module.css";

const Answer = ({ text, list }) => {
  return (
    <div className={classes.answerContainer}>
      <p className={classes.text}>{text}</p>
      {list && (
        <ul>
            {list.map((point) => (
                <li key={point.id} className={classes.list}>{point.point}</li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Answer;
