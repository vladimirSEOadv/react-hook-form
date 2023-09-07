import { doesNotContainSpaces } from "../../../utils/doesNotContainSpaces";
import { doesNotContainCyrillic } from "../../../utils/doesNotContainCyrillic";
import { notTooShort } from "../../../utils/notTooShort";
import { notTooLong } from "../../../utils/notTooLong";
import { containsCapitalLetters } from "../../../utils/containsCapitalLetters";
import { containsSpecialCharacter } from "../../../utils/containsSpecialCharacter";

export const passwordValidation = {
  required: "Обязательное поле для заполнения",
  validate: {
    doesNotContainSpaces,
    doesNotContainCyrillic,
    notTooShort,
    notTooLong,
    containsCapitalLetters,
    containsSpecialCharacter,
  },
};
