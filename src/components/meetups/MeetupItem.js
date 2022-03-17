import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.meetup.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.meetup.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.meetup.id,
        image: props.meetup.image,
        title: props.meetup.title,
        address: props.meetup.address,
        description: props.meetup.description,
      });
    }
  };

  return (
    <div key={props.meetup.id} className={classes.meetupCard}>
      <div className={classes.marginBottom40px}>
        <div className="padding-10px">
          <h2>{props.meetup.title}</h2>
        </div>
        <div>
          <img
            src={props.meetup.image}
            alt={props.meetup.title}
            width={"100%"}
          />
        </div>
        <div className="padding-10px">
          <h3>{props.meetup.address}</h3>
          <p>{props.meetup.description}</p>
        </div>
      </div>
      <div className={classes.favoriteButtonContainer}>
        <button
          className={classes.favoriteButton}
          onClick={toggleFavoriteStatusHandler}
        >
          {itemIsFavorite ? "Remove From Favorites" : "To Favorites"}
        </button>
      </div>
    </div>
  );
};

export default MeetupItem;
