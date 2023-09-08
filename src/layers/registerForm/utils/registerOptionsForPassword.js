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

export const registerOptionsForPassword = {
  validate: {
    doesNotContainSpaces,
    doesNotContainCyrillic,
    containsCapitalLetters,
    containsSpecialCharacter,
    notTooShort,
    notTooLong,
  },
};
