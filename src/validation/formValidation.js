export const isString = (str, fieldName) => {
  return str ? null : `The ${fieldName} field is required`;
}