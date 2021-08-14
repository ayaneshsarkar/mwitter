import { server } from '../../config/server';
import { fetchSingleData } from '../../helpers/fetch';

export const getLikes = async (postId, userId) => {
  try {
    let likes = [];
    const likesRes = await fetchSingleData('GET', `${server}/likes`, null);
    const likesData = await likesRes.json();
  
    if(likesData.length) {
      for(const i in likesData) {
        if(likesData[i].id && (likesData[i].author === userId) && 
        (parseInt(likesData[i].acf.postId) === postId)) {
          likes.push(likesData[i]);
        }
      }
    }
  
    return likes;

  } catch(err) {
    throw new Error(err.message);
  }
}

export const createLike = async postId => {
  try {
    const fields = { fields: { postId }  };
    const likeRes = await fetchSingleData('POST', `${server}/likes`, fields);
    const likeData = await likeRes.json();

    return likeData;

  } catch(err) {
    throw new Error(err.message);
  }
}