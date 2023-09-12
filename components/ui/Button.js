import Link from "next/link";
import classes from "./button.module.css";
const Button = ({ link, text }) => {
  return (
    <Link href={link} className={classes.button}>
      {text}
    </Link>
  );
};

export default Button;
