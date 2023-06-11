import React, { createContext, useState } from 'react';

// Crea el contexto de favoritos
export const FavoritesContext = createContext();

// Proveedor del contexto de favoritos
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Función para agregar una imagen a los favoritos
  const addFavorite = (photo) => {
    setFavorites((prevFavorites) => [...prevFavorites, photo]);
  };

  // Función para quitar una imagen de los favoritos
  const removeFavorite = (photo) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== photo.id)
    );
  };

  // Verificar si una imagen está en los favoritos
  const isFavorite = (photo) => {
    return favorites.some((fav) => fav.id === photo.id);
  };

  // Objeto de contexto que se proporcionará a los componentes hijos
  const favoritesContextValue = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={favoritesContextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
