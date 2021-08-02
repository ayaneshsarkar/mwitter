import React from 'react';
import { Link } from 'react-router-dom';

const Tag = ({ tag }) => {
  return (
    <li className="tags__list--item">
      <Link to={`/tag/${tag.name}`} className="tags__list__box">
        <div className="tags__list--item-link">
          <p>#{ tag.name }</p>
        </div>
      </Link>
    </li>
  );
}

export default Tag;