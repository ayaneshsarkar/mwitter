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