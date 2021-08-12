import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { getAllTags } from '../../../actions/tags';
import Search from './Search';
import TagList from './TagList';

const Tags = ({ getAllTags, tags }) => {
  const [searchWidth, setSearchWidth] = useState(0);

  useEffect(() => { getAllTags(); setWidth(); }, [getAllTags]);

  const searchRef = useRef(null);

  const setWidth = () => {
    if(searchRef && searchRef.current && searchRef.current.offsetWidth) {
      setSearchWidth(searchRef.current.offsetWidth);
    }
  }

  return (
    <aside className="rest" ref={searchRef}>
      <div className="tags">
        <Search searchWidth={searchWidth} />
        <TagList tags={tags} />
      </div>
    </aside>
  );
}

const mapStateToProps = state => {
  return {
    tags: Object.values(state.tags)
  };
}

export default connect(mapStateToProps, { getAllTags })(Tags);