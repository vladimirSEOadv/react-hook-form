import {
  doesNotContainSpaces,
  doesNotContainCyrillic,
} from "../../../utils/universalValidationFunc";
import { validationForEmail } from "../../../utils/validationForEmail";

export const emailValidation = {
  required: "Обязательное поле для заполнения",
  validate: {
    doesNotContainCyrillic,
    doesNotContainSpaces,
    validationForEmail,
  },
};
