import React from 'react'

const FavouriteContext = React.createContext({
  favoriteList: [],
  onToggleFavorite: () => {},
})

export default FavouriteContext
