export const passwordValidation = {
  required: "Обязательное для заполнения",
  validate: {
    passwordDoesNotContainCyrillic: (formValue) => {
      return (
        !/[а-яА-Я]/.test(formValue) || "Пароль не должен содержать кирилицу"
      );
    },
    passwordNotTooShort: (formValue) => {
      return formValue.length > 5 || "Пароль должен быть длинее 5 символов";
    },
    passwordNotTooLong: (formValue) => {
      return (
        formValue.length < 15 || "Пароль не должен быть длинее 15 символов"
      );
    },
    containsCapitalLetters: (formValue) => {
      return (
        /[A-Z]/.test(formValue) ||
        "Пароль должен содержать хотя бы одну большую букву"
      );
    },
    containsSpecialCharacter: (formValue) => {
      return (
        /[!@#$%^&*]/.test(formValue) ||
        "Пароль должен содержать хотя бы один спецсимвол (!@#$%^&*)"
      );
    },
  },
};
