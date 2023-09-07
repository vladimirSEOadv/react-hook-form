export const emailValid = (str) => {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str)) {
    return "Почта должна соответствовать формату name@domain.com";
  }
  return true;
};
