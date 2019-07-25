export const parseMovie = movie => {
  return {
    type: "movie",
    id: movie.id,
    imdbId: movie.imdb_id,
    title: movie.title,
    releaseDate: movie.release_date,
    year: movie.release_date.slice(0, 4),
    posterUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
    backdropUrl: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
    description: movie.overview,
    runtime: `${movie.runtime} min`,
    rating: movie.popularity
  };
};

export const parseSeries = series => {
  return {
    type: "series",
    id: series.id,
    imdbId: series.imdb_id,
    title: series.name,
    releaseDate: series.first_air_date,
    year: series.first_air_date.slice(0, 4),
    posterUrl: `https://image.tmdb.org/t/p/w500/${series.poster_path}`,
    backdropUrl: `https://image.tmdb.org/t/p/original/${series.backdrop_path}`,
    description: series.overview,
    runtime: `${series.number_of_seasons} seasons, ${
      series.number_of_episodes
    } episodes, about ${series.episode_run_time[0]} min per episode`,
    rating: series.popularity
  };
};
