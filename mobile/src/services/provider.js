import React, { useState } from 'react'
import MyContext from './context';

function MyProvider({children}) {
  const [movieList, setMovieList] = useState([
    {
      popularity: 15.982,
      vote_count: 5879,
      video: false,
      poster_path: "/rLneZNaulvXFfCJeJMy8gN2VvhQ.jpg",
      image: "https://image.tmdb.org/t/p/w500/rLneZNaulvXFfCJeJMy8gN2VvhQ.jpg",
      id: 68734,
      adult: false,
      backdrop_path: "/iVk4mVKwNE66JbBcoDwcYFvuUXM.jpg",
      original_language: "en",
      original_title: "Argo",
      genre_ids: [
      18,
      53
      ],
      title: "Argo",
      vote_average: 7.2,
      overview: "As the Iranian revolution reaches a boiling point, a CIA 'exfiltration' specialist concocts a risky plan to free six Americans who have found shelter at the home of the Canadian ambassador.",
      release_date: "2012-10-11"
    },
    {
      popularity: 1.309,
      id: 92069,
      video: false,
      vote_count: 6,
      vote_average: 6.8,
      title: "Argo",
      release_date: "2004-09-16",
      original_language: "hu",
      original_title: "Argo",
      genre_ids: [
      28,
      35
      ],
      backdrop_path: "/nJBpPuUmSB8XxuAYGEXLlPrZoFF.jpg",
      adult: false,
      overview: "The crew of Tibi Balogh sets out on a journey across Hungary to get the ancient Gold Owl statue, as well as the Milk Man. The treasure is worth millions, who gets there first?",
      poster_path: "/oxBu1dJt5q1hmxfmk1tF4DgkTco.jpg",
      image: "https://image.tmdb.org/t/p/w500/oxBu1dJt5q1hmxfmk1tF4DgkTco.jpg"
    },
  ])

  return (
    <MyContext.Provider
      value={{
        movieList,
        setMovieList
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyProvider