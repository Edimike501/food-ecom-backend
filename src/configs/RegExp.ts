/* eslint-disable no-useless-escape */
export const fullMobileRegExp = /^\+?\d{1,4}\d{7,10}$/;
export const fullNigMobileRegExp = /^(?:\+234|234|0)[789][01]\d{8}$/;
export const tldRegex =
  /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9]+)\.((com|net|mail|ng|co)(\.(com|net|ng|uk))?)$/;
// Country code: Optional '+' followed by 1-3 digits
export const countryCodeRegExp = /^\+?\d{1,4}$/;

// Mobile number: Starts with 0 or 7-9, followed by 7-10 digits
export const mobileRegExp = /^[0-9]{7,10}$/;

/* export const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.])[A-Za-z\d@$!%*?&]+$/; */
export const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+-={}\[\]|\\:;"'<>,.?/~`]+$/;
