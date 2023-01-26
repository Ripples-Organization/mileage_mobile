export const sanitizePhoneNumber = string =>
  string.toLowerCase().replace(/[^0-9]/g, "");

export const isEmailValid = email =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export const isPasswordValidField = str =>
  str && str.length > 6 ? true : false;

export const isEmpty = str => (str && str.length === 0 ? true : false);