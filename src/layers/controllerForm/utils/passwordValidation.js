import {
  doesNotContainSpaces,
  doesNotContainCyrillic,
} from "../../../utils/universalValidationFunc";
import {
  notTooShort,
  notTooLong,
  containsCapitalLetters,
  containsSpecialCharacter,
} from "../../../utils/validationForPassword";

export const passwordValidation = {
  required: "Обязательное поле для заполнения",
  validate: {
    doesNotContainSpaces,
    doesNotContainCyrillic,
    containsCapitalLetters,
    containsSpecialCharacter,
    notTooShort,
    notTooLong,
  },
};
