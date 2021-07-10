export const nullFunc = () => null;

export const setFieldValue = (e, callback) => callback(e.target.value);

export const setFieldError = (e, setError, validationFunc) => {
  const err = validationFunc(e.target.value, e.target.placeholder.toLowerCase());

  if(err) {
    setError(err)
  } else {
    setError('');
  };
}

export const setPasswordError = (e, setErrors, validationFunc, matchItem) => {
  let err = '';

  err = validationFunc(e.target.value, 'passwords', matchItem);

  if(err) {
    setErrors.forEach(setError => setError(err));
  } else {
    setErrors.forEach(setError => setError(''));
  };
}

export const setFileValue = (e, callback) => callback(e.target.files[0]);

export const setFileError = (e, setError, validationFunc) => {
  const err = validationFunc(e.target.files[0], e.target.placeholder.toLowerCase());

  if(err) {
    setError(err)
  } else {
    setError('');
  };
}

export const callUserFuncArr = funcs => {
  if(Array.isArray(funcs)) {
    funcs.forEach(func => func());
  } else {
    funcs();
  }
}