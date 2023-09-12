import classes from './title.module.css';
const Title = ({ question }) => {
  return <h1 className={classes.title}>{question}</h1>;
};

export default Title;
