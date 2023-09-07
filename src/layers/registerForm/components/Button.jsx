import { clsx } from "clsx";
import styles from "./Button.module.css";

export const Button = ({ errors, formState, text }) => {
  return (
    <button
      type={"submit"}
      className={clsx(styles.form__btn, {
        [styles["form__btn--valid"]]:
          !Object.keys(errors).length && formState.isDirty,
      })}
    >
      {text}
    </button>
  );
};
