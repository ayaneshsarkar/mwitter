export const nullFunc = () => null;

export const setFieldValue = (e, callback) => {
  callback(e.target.value);
}

export const setFieldError = (e, setError, validationFunc) => {
  const err = validationFunc(e.target.value, e.target.placeholder.toLowerCase());

  if(err) setError(err);
}

export const callUserFuncArr = funcs => {
  if(Array.isArray(funcs)) {
    funcs.forEach(func => func());
  } else {
    funcs();
  }
}