export const inArray = (needle, hayStack) => {
  const length  = hayStack.length;

  for (let i = 0; i < length; i++) {
    if(hayStack[i] === needle) return true;
  }

  return false;
};

export const capitalize = string => {
  const arr = string.split('');
  const capitalizedFirstLetter = arr[0].toUpperCase();
  const remainingString = string.slice(1);
  return capitalizedFirstLetter + remainingString;
}


export const getHashtags = str => {
  const safeStr = str.replace(/<\/?script[^>]*>/g, '');
  const pureStr = safeStr.replace(/<\/?span[^>]*>/g, '');
  const regExHash = /(#[a-zA-Z0-9-_]+)/g;
  const regExProfile = /(@[a-zA-Z0-9-_]+)/g;
  const regExSpcial = /[`!$%^&*()_+\-=[\]{};':"\\|,.<>/?~`]/;
  const strArr = pureStr.split(' ');
  const returnArr = [];

  strArr.forEach(el => {
    if((regExHash.test(el) || regExProfile.test(el)) && !regExSpcial.test(el)) {
      el = `<span>${el}</span>`
    }

    if(/\n/g.test(el)) console.log('new Line');

    returnArr.push(el);
  });


  return returnArr.join(' ');
}