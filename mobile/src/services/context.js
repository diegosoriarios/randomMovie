import React from 'react';

const MyContext = React.createContext({
    savedMovieList: {},
    setMovieList: () => {},
    bookmarkMovie: () => {},
    removeSavedMovie: () => {},
    movieIsSaved: () => {}
});

export default MyContext;