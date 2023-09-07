const MINPASSWORDLENGTH = 8;
export const notTooShort = (str) => {
  if (str.length < MINPASSWORDLENGTH) {
    return `Пароль должен быть длинее ${MINPASSWORDLENGTH} символов`;
  }
  return true;
};
