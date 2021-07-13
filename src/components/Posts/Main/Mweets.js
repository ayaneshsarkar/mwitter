import React from 'react';
import Mweet from './Mweet';

const Mweets = ({ user, posts }) => {
  return (
    <div className="posts__allPosts">
      {posts.length ? 
        posts.map((post, i) => <Mweet key={i} mweet={post} user={user} />) : ''
      }
    </div>
  )
}

export default Mweets;