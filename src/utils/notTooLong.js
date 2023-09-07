const MAXPASSWORDLENGTH = 15;
export const notTooLong = (str) => {
  return (
    str.length < MAXPASSWORDLENGTH ||
    `Пароль не должен быть длинее ${MAXPASSWORDLENGTH} символов`
  );
};
