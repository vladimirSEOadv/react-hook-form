export const doesNotContainSpaces = (str) => {
  if (/\s/.test(str)) {
    return "Пробелов быть не должно";
  }
  return true;
};
