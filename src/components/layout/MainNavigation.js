import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>React Meetups</h1>
      <div className={classes.navBar}>
        <ul>
          <li>
            <Link className={classes.navItems} to="/">
              All Meetups
            </Link>
          </li>
          <li>
            <Link className={classes.navItems} to="/new-meetup">
              New Meetup
            </Link>
          </li>
          <li>
            <Link className={classes.navItems} to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainNavigation;
