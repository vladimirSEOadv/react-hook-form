const MINPASSWORDLENGTH = 8;
const MAXPASSWORDLENGTH = 15;

export const passwordValidation = {
  required: "Обязательное поле для заполнения",
  validate: {
    passwordDoesNotContainCyrillic: (formValue) => {
      return (
        !/[а-яА-Я]/.test(formValue) || "Пароль не должен содержать кирилицу"
      );
    },
    passwordNotTooShort: (formValue) => {
      return (
        formValue.length > MINPASSWORDLENGTH ||
        `Пароль должен быть длинее ${MINPASSWORDLENGTH} символов`
      );
    },
    passwordNotTooLong: (formValue) => {
      return (
        formValue.length < MAXPASSWORDLENGTH ||
        `Пароль не должен быть длинее ${MAXPASSWORDLENGTH} символов`
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
