import classes from "./landing.module.css";

const Landing = ({ intro, text }) => {
  return (
    <>
      <h1 className={classes.intro}>{intro}</h1>
      <p className={classes.text}>{text}</p>
    </>
  );
};

export default Landing;
