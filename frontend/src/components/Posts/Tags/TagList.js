import React from 'react';
import Tag from './Tag';

const TagList = ({ tags, postTags }) => {
  return (
    <ul className={`tags__list${postTags ? ' postTags' : ''}`}>
      <li className="tags__list--item tagHead">
        <div className="tags__list--item-heading">What's Happening</div>
      </li>

      { tags.length ? tags.map((tag, i) => <Tag key={i} tag={tag} />): '' }
    </ul>
  );
}

export default TagList;