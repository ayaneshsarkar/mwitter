import React from 'react';
import Mweet from './Mweet';

const Mweets = ({ user, posts, comments, location, create }) => {
  return (
    <div className={`posts__allPosts${!create ? ' margin' : '' }`}>
      {comments ? <div className="breaker comments"></div> : ''}

      {posts.length ? 
        posts.map((post, i) => 
          <Mweet key={i} mweet={post} user={user} location={location} single={false}
          comments={comments ? comments : undefined}
        />) : ''
      }
    </div>
  )
}

export default Mweets;