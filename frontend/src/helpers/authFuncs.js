export const signUpFormValidaton = values => {
  let returnValue = true;
  values.forEach(val => (!val ||  (val === {})) ? returnValue = false : null);
  return returnValue;
}

export const signUpFormCheckErrors = values => {
  let returnValue = true;
  values.forEach(val => val ? returnValue = false : null);
  return returnValue;
}