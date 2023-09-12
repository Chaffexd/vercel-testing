import MainHeader from "./MainHeader";

import classes from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className={classes.layout}>
        <div className={classes.mainContainer}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
