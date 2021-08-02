import React from 'react';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const Tags = () => {
  return (
    <aside className="rest">
      <div className="tags">
        <div className="tags__searchBox">
          <form className="tags__search">
            <svg className="tags__search--icon">
              <use xlinkHref={`${Sprite}#search`}></use>
            </svg>
            <input type="text" className="tags__search--input" placeholder="Search Mwitter" />
          </form>
        </div>

        <ul className="tags__list">
          <li className="tags__list--item">
            <div className="tags__list--item-heading">What's Happening</div>
          </li>

          <li className="tags__list--item">
            <div className="tags__list--item-link">
              <a href="/posts">#Witcher</a>
            </div>
          </li>

          <li className="tags__list--item">
            <div className="tags__list--item-link">
              <a href="/posts">#Witcher</a>
            </div>
          </li>

          <li className="tags__list--item">
            <div className="tags__list--item-link">
              <a href="/posts">#Witcher</a>
            </div>
          </li>

          <li className="tags__list--item">
            <div className="tags__list--item-link">
              <a href="/posts">#Witcher</a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Tags;