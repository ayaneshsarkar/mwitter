import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { removePost } from '../../../actions/posts';
import { removeComment } from '../../../actions/comments';
import { getMediaUrl, getUser } from '../../../asynchronus/Posts';
import history from '../../../config/history';
import CommentAlert from './CommentAlert';
import Img from '../../../assets/img/SamplePic.jpg';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const Mweet = ({ user, mweet, location, removePost, removeComment, single, comments }) => {
  const [author, setAuthor] = useState(null);
  const [mweetAuthorUrl, setMweetAuthorUrl] = useState(null);
  const [paddingTop, setPaddingTop] = useState(0);
  const [commentBox, setCommentBox] = useState(false);
  const checkUser = user => Object.keys(user).length;

  useEffect(() => getAuthor(mweet.author), [mweet.author]);

  const getAuthor = async authorId => {
    const author = await getUser(authorId);
    setAuthor(author);

    if(author) {
      const mediaUrl = await getMediaUrl(parseInt(author.acf.avatar.id));
      setMweetAuthorUrl(mediaUrl);
    }
  }

  const deleteMweet = async id => {
    try {
      !comments ? await removePost(id) : await removeComment(id);
    } catch(err) {
      console.error(err.message);
    }
  }

  const getPaddingTop = (mweetData, containerWidth) => {
    if(location.pathname === '/posts' || location.pathname.includes('search')
    || location.pathname.includes('tag') || location.pathname.includes('profile')) {
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

  return (
    <div className={`posts__post${single ? ' single' : ''}`}>
      {/* Profile Image */}
      <div className="posts__post--avatar">
        <div 
          className="posts__post--icon"
          style={{ 
            backgroundImage: `url(${mweetAuthorUrl ? mweetAuthorUrl : ''})`
          }}
          >
        </div>
      </div>

      {/* Profile Content */}
      <div className="posts__post--content">
        <div className="profile">
          <Link to="/posts" className="profile__info">
            <h4 className="profile__info--title">
              { author ? author.name : '' }
            </h4>
            <p className="profile__info--handle">
              @{ author ? author.slug : '' }
            </p>
            <p className="dot singleDot">.</p>
            <p className="profile__info--time singleTime">5m</p>
          </Link>

          {(checkUser(user) && (mweet.author === user.id)) ? 
            <div className="postDelete" onClick={() => deleteMweet(mweet.id)}>
              <svg className="postDelete__icon">
                <use xlinkHref={`${Sprite}#trash`}></use>
              </svg>
            </div> : ''
          }
        </div>

        {/* Mweet Content */}
        {!single ? 
          <>
            {!comments ? 
              <p 
                onClick={(e) => getTag(e)}
                className="text" dangerouslySetInnerHTML={{ __html: mweet.acf.text }}>
              </p> : 

              <p 
                onClick={(e) => getTag(e)}
                className="text comment" 
                dangerouslySetInnerHTML={{ 
                  __html: mweet.content.rendered.replace(/(<([^>]+)>)/ig, '')
                }}>
              </p>
            }

            {mweet.acf.image && !comments ? 
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

            {!comments ? <ul className="icons">
              <li className="item">
                <svg className="icon">
                  <use xlinkHref={`${Sprite}#heart`}></use>
                </svg>
              </li>
              <li className="item" onClick={() => setCommentBox(true)}>
                <svg className="icon">
                  <use xlinkHref={`${Sprite}#message-circle`}></use>
                </svg>
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
              <p className="mr-1 int">500</p> Likes
            </div>
            <div className="d-flex-center">
              <p className="mr-1 int">5</p> Comments
            </div>
          </div>

          <ul className="icons">
            <li className="item">
              <svg className="icon">
                <use xlinkHref={`${Sprite}#heart`}></use>
              </svg>
            </li>
            <li className="item" onClick={() => setCommentBox(true)}>
              <svg className="icon">
                <use xlinkHref={`${Sprite}#message-circle`}></use>
              </svg>
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

export default connect(null, { removePost, removeComment })(Mweet);