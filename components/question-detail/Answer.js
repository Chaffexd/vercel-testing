import classes from "./answer.module.css";

const Answer = ({ text, list, frustratedPoint, scenarios }) => {
  return (
    <div className={classes.answerContainer}>
      <p className={classes.text}>{text}</p>
      {list && (
        <ul>
          {list.map((point) => (
            <li key={point.id} className={classes.list}>
              {point.point}
            </li>
          ))}
        </ul>
      )}
      {frustratedPoint && (
        <>
          <h2 className={classes.frustration}>{frustratedPoint}</h2>
          <ul>
            {scenarios.map((scenario) => (
              <div key={scenario.id}>
                <li className={classes.scenarios}>
                  {scenario.scenario}
                </li>
                <p className={classes.answer}>{scenario.answer}<a href={scenario.article} target="_blank">{scenario.article}</a></p>
              </div>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Answer;
