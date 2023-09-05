import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import { clsx } from "clsx";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitFormHandler = (data) => {
    console.log("data", data);
    console.log("errors", errors);
    console.log("formState", formState);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitFormHandler)}>
      <div className={styles.form__row}>
        <label
          className={clsx(styles.form__label, {
            [styles["form__label--error"]]: errors.email,
          })}
        >
          Электронная почта
        </label>
        <input
          type="text"
          placeholder="Введите email"
          className={clsx(styles.form__input, {
            [styles["form__input--error"]]: errors.email,
          })}
          {...register("email", {
            required: "Поле email не заполнено",
          })}
        />
        {errors.email && (
          <div className={styles.error}>{errors.email.message}</div>
        )}
      </div>
      <div className={styles.form__row}>
        <label
          className={clsx(styles.form__label, {
            [styles["form__label--error"]]: errors.password,
          })}
        >
          Пароль
        </label>
        <input
          type="password"
          placeholder="Введите пароль"
          className={clsx(styles.form__input, {
            [styles["form__input--error"]]: errors.password,
          })}
          {...register("password", {
            required: "Поле пароль не заполнено",
            maxLength: { value: 5, message: "Пароль длинее 5 символов" },
          })}
        />
        {errors.password && (
          <div className={styles.error}>{errors.password.message}</div>
        )}
      </div>
      <div className={styles.form__row}>
        <button
          className={clsx(styles.form__btn, {
            [styles["form__btn--valid"]]:
              !Object.keys(errors).length && formState.isDirty,
          })}
        >
          Отправить
        </button>
      </div>
    </form>
  );
};
