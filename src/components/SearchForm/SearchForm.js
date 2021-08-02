import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onSearchSubmit, onFilterChecked, handleToggle }) {
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState('');

  function handleChange(evt) {
    setKeyword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearchSubmit(keyword);
  }

  function handleClick() {
    if (!keyword) {
      setError('Нужно ввести ключевое слово.');
    } else {
      setError('');
    }
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="search"
          required
          value={keyword}
          onChange={handleChange}
        />
        <button
          className="button search-form__button"
          type="submit"
          onClick={handleClick}
        ></button>
      </form>
      <span className="search-form_error">{error}</span>
      <FilterCheckbox
        onFilterChecked={onFilterChecked}
        handleToggle={handleToggle}
      />
    </>
  );
}

export default SearchForm;
