import { takehomeQuestions } from "@/questions";

import classes from "./mainheader.module.css";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header className={classes.nav}>
      <ul className={classes.navContainer}>
        {takehomeQuestions.map((question) => (
          <li key={question.id} className={classes.questions}>
            <Link href={`/questions/${question.id.replace(/ /g, "-").toLowerCase()}`}>{question.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default MainHeader;
