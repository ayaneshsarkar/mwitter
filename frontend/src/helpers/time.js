import moment from 'moment';

export const getTime = time => {
  const fromNow = moment(time).fromNow();

  const fromNowArr = fromNow.split(' ');
  const modifiedStr = 
  (isNaN(parseInt(fromNowArr[0])) ? '1' : fromNowArr[0]) + 
  (isNaN(parseInt(fromNowArr[0])) ? fromNowArr[1].charAt(0).toUpperCase() : 
  fromNowArr[1].charAt(0));

  return modifiedStr;
}

export const formatDate = date => {
  return moment(date).format('MMM, d, YYYY'); 
}