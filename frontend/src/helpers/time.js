import moment from 'moment';

export const getTime = time => {
  const fromNow = moment(time).fromNow();

  const fromNowArr = fromNow.split(' ');
  let firstString = '';
  let secondString = '';

  // const modifiedStr = 
  // (isNaN(parseInt(fromNowArr[0])) ? '1' : fromNowArr[0]) + 
  // (isNaN(parseInt(fromNowArr[0])) ? fromNowArr[1].charAt(0).toUpperCase() : 
  // fromNowArr[1].charAt(0));

  if(fromNowArr[0] === 'a' || fromNowArr[0] === 'an') {
    firstString = 1;
  } else {
    firstString = fromNowArr[0];
  }

  if(fromNowArr[1] === 'minutes' || fromNowArr[1] === 'minute') {
    secondString = 'm';
  } else if(fromNowArr[1] === 'months' || fromNowArr[1] === 'month') {
    secondString = 'M';
  } else if(fromNowArr[1] === 'years' || fromNowArr[1] === 'year') {
    secondString = 'Y';
  } else if(fromNowArr[1] === 'few' || fromNowArr[1] === 'seconds' 
  || fromNowArr[1] === 'second') {
    secondString = 'm';
  } else if(fromNowArr[1] === 'hours' || fromNowArr[1] === 'hour') {
    secondString = 'h';
  }

  const modifiedStr = firstString + '' + secondString;
  
  return modifiedStr;
}

export const formatDate = date => {
  return moment(date).format('MMM, d, YYYY'); 
}