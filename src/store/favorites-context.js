import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

// Provide the context to all the components that are in need of it
export const FavoritesContextProvider = (props) => {
  const [userFavovites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    // Get previous user favorites and concat them with the new favorite
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((previousUserFavorites) => {
      return previousUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavovites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavovites,
    totalFavorites: userFavovites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
