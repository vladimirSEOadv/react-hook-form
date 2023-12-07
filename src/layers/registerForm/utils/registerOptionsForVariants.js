const notThree = (value) => {
  if (value === "Three") {
    return "Вариант Three недопустим";
  } else {
    return true;
  }
};

export const registerOptionsForVariants = {
  validate: {
    notThree,
  },
};
