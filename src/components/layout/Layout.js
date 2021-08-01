import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main class={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
