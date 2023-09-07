export const doesNotContainCyrillic = (str) => {
  if (/[а-яА-Я]/.test(str)) {
    return "Пароль не должен содержать кирилицу";
  }
  return true;
};
