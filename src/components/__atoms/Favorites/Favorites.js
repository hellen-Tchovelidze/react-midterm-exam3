
import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteToggle = (movieTitle) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(movieTitle)
        ? prevFavorites.filter((title) => title !== movieTitle)
        : [...prevFavorites, movieTitle];
      return updatedFavorites;
    });
  };

  return { favorites, handleFavoriteToggle };
};
