export const containsSpecialCharacter = (str) => {
  return (
    /[!@#$%^&*]/.test(str) ||
    "Пароль должен содержать хотя бы один спецсимвол (!@#$%^&*)"
  );
};
