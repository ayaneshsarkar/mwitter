import React from 'react';
import Mweet from './Mweet';

const Mweets = ({ user, posts, location, create }) => {
  return (
    <div className={`posts__allPosts${!create ? ' margin' : '' }`}>
      {posts.length ? 
        posts.map((post, i) => 
          <Mweet key={i} mweet={post} user={user} location={location} single={false}
        />) : ''
      }
    </div>
  )
}

export default Mweets;