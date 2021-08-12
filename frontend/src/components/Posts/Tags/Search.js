import React, { useState } from 'react';
import history from '../../../config/history';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const Search = ({ searchWidth }) => {
  const [search, setSeatch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if(search) history.push(`/search/${search}`);
  }
  
  return (
    <div className="tags__searchBox" style={{ width: searchWidth }}>
      <form className="tags__search" onSubmit={(e) => handleSubmit(e)}>
        <button type="submit">
          <svg className="tags__search--icon">
            <use xlinkHref={`${Sprite}#search`}></use>
          </svg>
        </button>

        <input 
          name="search" 
          type="text" 
          className="tags__search--input" 
          placeholder="Search Mwitter" 
          value={search}
          onChange={(e) => setSeatch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;