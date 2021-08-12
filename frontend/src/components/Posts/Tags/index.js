import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllTags } from '../../../actions/tags';
import Search from './Search';
import TagList from './TagList';

const Tags = ({ getAllTags, tags }) => {
  useEffect(() => getAllTags(), [getAllTags]);

  return (
    <aside className="rest">
      <div className="tags">
        <Search />
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