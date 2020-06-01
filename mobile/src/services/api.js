import axios from 'axios';

export async function findMovieId(name) {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=fc9e6d8f685e69fb9398d50821c31f08&language=en-US&query=${name}&page=1&include_adult=true`;

  const response = await axios.get(url);
  const id = response.data.results[0].id;
  return id;
}

export async function findSimilarMovie(id) {
  let similarMovieUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=fc9e6d8f685e69fb9398d50821c31f08&language=en-US`;

  const response = await axios.get(similarMovieUrl);

  const maxMovieCount = response.data.results.length;

  const movie =
    response.data.results[Math.floor(Math.random() * maxMovieCount)];

  movie.image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return movie;
}

export async function getGenreName(ids) {
  let genreUrl =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=fc9e6d8f685e69fb9398d50821c31f08&language=en-US';

  const response = await axios.get(genreUrl);

  let genreNames = [];
  response.data.genres.forEach(genres => {
    if (ids.includes(genres.id)) {
      genreNames.push(genres.name);
    }
  });

  return genreNames;
}
