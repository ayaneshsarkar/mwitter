import React from 'react';
// import { connect } from 'react-redux';
// import { getAllPosts } from '../actions/posts';
//import PostsLayout from '../components/Posts/PostsLayout';
import PostContainer from '../containers/Posts/PostContainer';

const Search = (props) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //useEffect(() => props.getAllPosts(), []);

  console.log(props)
  
  return (
    <PostContainer>
      {/* <PostsLayout user={props.user} posts={props.posts} location={props.location} /> */}
    </PostContainer>
  );
}

// const mapStateToProps = state => {
//   return {
//     user: state.auth.user,
//     posts: Object.values(state.posts).sort((a, b) => b.id - a.id)
//   }
// }

export default Search;