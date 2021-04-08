import React, { useState } from 'react'
import MyContext from './context';

function MyProvider({children}) {
  const [savedMovieList, setMovieList] = useState([]);

  const movieIsSaved = (movie) => {
    return savedMovieList.some((mv) => mv.id == movie.id);
  }

  const bookmarkMovie = (movie) => {
    const isInList = movieIsSaved(movie)

    if (isInList) return;

    const movies = [...savedMovieList];
    movies.push(movie);
    setMovieList(movies);
  }

  const removeSavedMovie = (movieId) => {
    const movies = [...savedMovieList];
    const index = movies.findIndex((movie) => movie.id == movieId);
    movies.splice(index, 1);
    setMovieList(movies);
  }

  return (
    <MyContext.Provider
      value={{
        savedMovieList,
        setMovieList,
        bookmarkMovie,
        removeSavedMovie,
        movieIsSaved
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider