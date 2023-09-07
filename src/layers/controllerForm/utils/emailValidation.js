import { doesNotContainSpaces } from "../../../utils/doesNotContainSpaces";
import { doesNotContainCyrillic } from "../../../utils/doesNotContainCyrillic";
import { emailValid } from "../../../utils/emailValid";

export const emailValidation = {
  required: "Обязательное поле для заполнения",
  validate: {
    doesNotContainCyrillic,
    doesNotContainSpaces,
    emailValid,
  },
};
