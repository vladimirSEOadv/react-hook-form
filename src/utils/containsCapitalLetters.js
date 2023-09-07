export const containsCapitalLetters = (str) => {
  return (
    /[A-Z]/.test(str) || "Пароль должен содержать хотя бы одну большую букву"
  );
};
