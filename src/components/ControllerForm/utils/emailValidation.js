export const emailValidation = {
  required: "Обязательное для заполнения",
  validate: {
    emailValid: (formValue) => {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formValue)) {
        return "Почта должна соответствовать формату name@domain.com";
      }
      return true;
    },
  },
};
