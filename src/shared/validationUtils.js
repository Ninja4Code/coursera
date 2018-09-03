export const REQUIRED = (val) => val && val.length;
export const MAX_LENGTH = (len) => (val) => !(val) || (val.length <= len);
export const MIN_LENGTH = (len) => (val) => !(val) || (val.length >= len);
export const IS_NUMBER = (val) => !isNaN(Number(val));
export const VALID_EMAIL = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);