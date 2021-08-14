import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { removePost } from '../../../actions/posts';
import { removeComment } from '../../../actions/comments';
import { likePost } from '../../../actions/posts';
import { getMediaUrl, getUser } from '../../../asynchronus/Posts';
import history from '../../../config/history';
import CommentAlert from './CommentAlert';
import DeleteAlert from './DeleteAlert';
import Img from '../../../assets/img/SamplePic.jpg';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const Mweet = ({
  user, mweet, location, removePost, removeComment, likePost, single, comments 
}) => {
  const [author, setAuthor] = useState(null);
  const [mweetAuthorUrl, setMweetAuthorUrl] = useState(null);
  const [paddingTop, setPaddingTop] = useState(0);
  const [commentBox, setCommentBox] = useState(false);
  const [deleteBox, setDeleteBox] = useState(false);
  const [liked, setLiked] = useState(false);

  const checkUser = user => Object.keys(user).length;

  useEffect(() => {
    getAuthor(mweet.author);
    handleLikes((mweet.likes || null), user, mweet.id);
  }, 
  [liked, mweet.author, mweet.id, mweet.likes, user]);

  const getAuthor = async authorId => {
    const author = await getUser(authorId);
    setAuthor(author);

    if(author && author.acf) {
      const mediaUrl = await getMediaUrl(parseInt(author.acf.avatar.id));
      setMweetAuthorUrl(mediaUrl);
    }
  }

  const deleteMweet = async (id) => {
    try {
      !comments ? await removePost(id) : await removeComment(id, user.id, mweet.post);
    } catch(err) {
      console.error(err.message);
    }
  }

  const getPaddingTop = (mweetData, containerWidth) => {
    if(location.pathname === '/posts' || location.pathname.includes('search')
    || location.pathname.includes('tag') || location.pathname.includes('profile')
    || location.pathname.includes('user')) {
      setPaddingTop('50%');
    } else if(location.pathname.includes('post')) {
      setPaddingTop('65%')
    } else {
      setPaddingTop(
        mweetData.acf.image.sizes['large-height'] / 
        mweetData.acf.image.sizes['large-width'] * containerWidth
      );
    }
  }

  const getTag = (e) => {
    const tagName = e.target.tagName.toLowerCase();

    if(!comments) {
      if(tagName === 'span') {
        const tag = e.target.textContent.replace('#', '');
        history.push(`/tag/${tag}`);
      } else {
        history.push(`/post/${mweet.id}`);
      }
    }
  }

  const handleLikes = (likes, user, postId) => {
    if(likes && likes.length) {
      for(const i in likes) {
        if(likes[i].author === user.id && parseInt(likes[i].acf.postId) === postId) {
          setLiked(true);
        }
      }
    }
  }

  const manageLikes = async (likes, user, mweetId) => {
    if(!likes.length) {
      // Create
      await likePost(mweetId, user.id);
      setLiked(true);

    } else {
      for(const i in likes) {
        if(likes[i].author === user.id) {
          // Delete
          await likePost(mweetId, user.id, likes[i].id);
          setLiked(false);
        }
      }
    }
  }

  return (
    <div className={`posts__post${single ? ' single' : ''}${comments ? ' comments' : ''}`}>
      {/* Profile Image */}
      {(author && author.acf) && <div className="posts__post--avatar">
        <div 
          className="posts__post--icon"
          style={{ 
            backgroundImage: `url(${mweetAuthorUrl ? mweetAuthorUrl : ''})`
          }}
          onClick={() => history.push(`/user/${author.id}`)}
          >
        </div>
      </div>}

      {/* Profile Content */}
      <div className="posts__post--content">
        <div className="profile">
          {(author && author.acf && author.name) && 
            <Link to={`/user/${author.id}`} className="profile__info">
              <h4 className="profile__info--title">
                { author ? author.name : '' }
              </h4>
              <p className="profile__info--handle">
                @{ author ? author.slug : '' }
              </p>
              <p className="dot singleDot">.</p>
              <p className="profile__info--time singleTime">5m</p>
            </Link>
          }

          {(checkUser(user) && (mweet.author === user.id)) ? 
            <>
              <div className="postDelete" onClick={() => setDeleteBox(true)}>
                <svg className="postDelete__icon">
                  <use xlinkHref={`${Sprite}#trash`}></use>
                </svg>
              </div> 

              <DeleteAlert open={deleteBox} setClose={setDeleteBox} 
                callback={deleteMweet}
                id={mweet.id} 
              />
            </>
            : ''
          }
        </div>

        {/* Mweet Content */}
        {!single ? 
          <>
            {(!comments && mweet.acf && mweet.acf.text) ? 
              <p 
                onClick={(e) => getTag(e)}
                className="text" dangerouslySetInnerHTML={{ __html: mweet.acf.text }}>
              </p> : (mweet.content && mweet.content.rendered) ?

              <p 
                onClick={(e) => getTag(e)}
                className="text comment" 
                dangerouslySetInnerHTML={{ 
                  __html: mweet.content.rendered.replace(/(<([^>]+)>)/ig, '')
                }}>
              </p> : ''
            }

            {(mweet.acf && mweet.acf.image && !comments) ? 
              <div
              className="media"
              onLoad={(e) => getPaddingTop(mweet, e.target.offsetWidth)}
              style={{ 
                backgroundImage: `url(${mweet.acf.image.sizes.large})`, paddingTop
              }}
              >
                <img src={Img} alt="Sample" className="img" />
              </div> 
              : ''
            }

            {/* Icons */}
            {(!comments && mweet.acf) ? <ul className="icons">
              <li className="d-flex-center">
                <div className="item">
                  <svg className={`icon${liked ? ' liked' : ''}`}
                  onClick={() => manageLikes((mweet.likes || []), user, mweet.id)} >
                    <use xlinkHref={`${Sprite}#heart`}></use>
                  </svg>
                </div>
                {(mweet.likes && (mweet.likes.length > 0)) && 
                  <span className="count">{ mweet.likes.length }</span>
                }
              </li>
              <li className="d-flex-center" onClick={() => setCommentBox(true)}>
                <div className="item">
                  <svg className="icon">
                    <use xlinkHref={`${Sprite}#message-circle`}></use>
                  </svg>
                </div>
                {(mweet.comments && (mweet.comments.length > 0)) && 
                  <span className="count">{ mweet.comments.length }</span>
                }
              </li>
              <li className="item">
                <svg className="icon">
                  <use xlinkHref={`${Sprite}#share`}></use>
                </svg>
              </li>
            </ul> : ''}
          </>
          : ''
        }
      </div>

      {single ? 
        <div className="posts__post--content last">
          <p 
            onClick={(e) => getTag(e)}
            className="text" dangerouslySetInnerHTML={{ __html: mweet.acf.text }}>
          </p>

          {mweet.acf.image ? 
            <div
            className="media"
            onLoad={(e) => getPaddingTop(mweet, e.target.offsetWidth)}
            style={{ 
              backgroundImage: `url(${mweet.acf.image.sizes.large})`, paddingTop
            }}
            >
              <img src={Img} alt="Sample" className="img" />
            </div> 
            : ''
          }

          <div className="d-flex-center postTime">
            <p className="profile__info--time">5m</p>
            <p className="dot">.</p>
            <p className="profile__info--time">Aug 10, 2021</p>
            <p className="dot">.</p>
            <p className="profile__info--time">Mwitter For Web</p>
          </div>

          <div className="interactInfo">
            <div className="d-flex-center item">
              <p className="mr-1 int">{ mweet.likes.length }</p>
              { (mweet.likes.length === 1) ? 'Like' : 'Likes'  }
            </div>
            <div className="d-flex-center">
              <p className="mr-1 int">{ mweet.comments ? mweet.comments.length : '' }</p>
              { (mweet.comments && mweet.comments.length === 1) ? 'Comment' : 'Comments'  }
            </div>
          </div>

          {/* Icons */}
          <ul className="icons">
            <li className="d-flex-center">
              <div className="item">
                <svg className={`icon${liked ? ' liked' : ''}`}
                  onClick={() => manageLikes((mweet.likes || []), user, mweet.id)} >
                  <use xlinkHref={`${Sprite}#heart`}></use>
                </svg>
              </div>
              {(mweet.likes && (mweet.likes.length > 0)) && 
                <span className="count">{ mweet.likes.length }</span>
              }
            </li>
            <li className="d-flex-center" onClick={() => setCommentBox(true)}>
              <div className="item">
                <svg className="icon">
                  <use xlinkHref={`${Sprite}#message-circle`}></use>
                </svg>
              </div>
              {(mweet.comments && (mweet.comments.length > 0)) && 
                <span className="count">{ mweet.comments.length }</span>
              }
            </li>
            <li className="item">
              <svg className="icon">
                <use xlinkHref={`${Sprite}#share`}></use>
              </svg>
            </li>
          </ul>
        </div> 
        : ''
      }

      <CommentAlert open={commentBox} setClose={setCommentBox} user={user} id={mweet.id} />
    </div>
  );
}

export default connect(null, { removePost, removeComment, likePost })(Mweet);