import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import * as utils from '../../utils/utils';
import './Movies.css';

function Movies({
  movies,
  onGetMovies,
  isLoading,
  searchMessage,
  onCardButtonClick,
  loggedIn,
}) {
  const [movieSearchWord, setMovieSearchWord] = useState('');
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [moviesQty, setMoviesQty] = useState(utils.getMoviesQty());
  const [allMovies, setAllMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);

  function handleSearchSubmit(value) {
    setMovieSearchWord(value);
    if (!movies.length) {
      onGetMovies();
    }
  }

  function handleMoreButtonClick() {
    setMoviesQty(moviesQty + utils.getMoreMovies());
  }

  function toggleFilter() {
    setIsFilterChecked(!isFilterChecked);
  }

  useEffect(() => {
    const foundMovies = utils.getMovieByKeyword(movies, movieSearchWord);
    const filteredMovies = utils.getShortMovies(foundMovies, isFilterChecked);
    setAllMovies(filteredMovies);
    setCurrentMovies(filteredMovies.slice(0, moviesQty));
  }, [movies, movieSearchWord, isFilterChecked, moviesQty]);

  useEffect(() => {
    function updateWindowWidth() {
      setTimeout(() => {
        setMoviesQty(utils.getMoviesQty());
        setCurrentMovies(allMovies.slice(0, utils.getMoviesQty()));
      }, 1000);
    }

    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, [allMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies-content movies-section app__section">
        <SearchForm
          onSearchSubmit={handleSearchSubmit}
          isFilterChecked={isFilterChecked}
          handleToggle={toggleFilter}
        />
        {isLoading && <Preloader />}
        <MoviesCardList
          movies={currentMovies}
          moreCards={currentMovies.length < allMovies.length}
          onMoreCardsButtonClick={handleMoreButtonClick}
          onCardButtonClick={onCardButtonClick}
          searchMessage={searchMessage}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
