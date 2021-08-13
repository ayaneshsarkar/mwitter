import React, { useState } from 'react';
import history from '../../config/history';
import Sprite from '../../assets/svg/feather-sprite.svg';

const PostSearch = ({ term }) => {
  const [search, setSeatch] = useState('');
  const [searchTouched, setSeatchTouched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(search) history.push(`/search/${search}`);
  }

  return (
    <form className="tags__search postSearch" onSubmit={(e) => handleSubmit(e)}>
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
        value={searchTouched ? search : (term || '')}
        onChange={ (e) => {setSeatchTouched(true); setSeatch(e.target.value);} }
      />
    </form>
  )
}

export default PostSearch;