import React from 'react';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const Search = () => {
  return (
    <div className="tags__searchBox">
      <form className="tags__search">
        <svg className="tags__search--icon">
          <use xlinkHref={`${Sprite}#search`}></use>
        </svg>
        <input type="text" className="tags__search--input" placeholder="Search Mwitter" />
      </form>
    </div>
  );
}

export default Search;