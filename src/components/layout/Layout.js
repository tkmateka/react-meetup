import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.mainSection}>{props.children}</main>
    </div>
  );
};

export default Layout;
