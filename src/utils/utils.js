export const convertMovieLink = (link) => {
  return `https://api.nomoreparties.co${link}`;
};

export const convertMovieDuration = (duration) => {
  return `${Math.floor(duration / 60) || 0}ч ${Math.floor(duration % 60)}м`;
};

export const getMovieByKeyword = (movies, keyword) =>
  movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
  });

export const markSavedMovies = (allMovies, savedMovies) => {
  savedMovies.forEach((savedMovie) => {
    const movie = allMovies.find((movie) => movie.nameRU === savedMovie.nameRU);
    movie.isSaved = true;
  });
  return allMovies;
};

export const getShortMovies = (movies, checked) => {
  return movies.filter((movie) => (checked ? movie.duration <= 40 : Number));
};

export const getMoviesQty = () => {
  if (window.innerWidth <= 520) {
    return 5;
  } else if (window.innerWidth <= 768) {
    return 8;
  } else {
    return 12;
  }
};

export const getMoreMovies = () => {
  if (window.innerWidth <= 768) {
    return 2;
  } else if (window.innerWidth <= 1100) {
    return 3;
  } else {
    return 4;
  }
};
