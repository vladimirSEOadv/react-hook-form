export const containsCapitalLetters = (str) => {
  return (
    /[A-Z]/.test(str) || "Пароль должен содержать хотя бы одну большую букву"
  );
};

export const containsSpecialCharacter = (str) => {
  return (
    /[!@#$%^&*]/.test(str) ||
    "Пароль должен содержать хотя бы один спецсимвол (!@#$%^&*)"
  );
};
const MAXPASSWORDLENGTH = 15;
export const notTooLong = (str) => {
  return (
    str.length < MAXPASSWORDLENGTH ||
    `Пароль не должен быть длинее ${MAXPASSWORDLENGTH} символов`
  );
};

const MINPASSWORDLENGTH = 8;
export const notTooShort = (str) => {
  if (str.length < MINPASSWORDLENGTH) {
    return `Пароль должен быть длинее ${MINPASSWORDLENGTH} символов`;
  }
  return true;
};
