export const doesNotContainCyrillic = (str) => {
  if (/[а-яА-Я]/.test(str)) {
    return "Кирилица не допустима";
  }
  return true;
};

export const doesNotContainSpaces = (str) => {
  if (/\s/.test(str)) {
    return "Пробелов быть не должно";
  }
  return true;
};
