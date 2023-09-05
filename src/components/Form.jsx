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
      variant: "",
    },
  });

  const selectOptions = [
    { id: 1, value: "", text: "Выберите один из вариантов..." },
    { id: 2, value: "One", text: "One" },
    { id: 3, value: "Two", text: "Two" },
    { id: 4, value: "Three", text: "Three" },
  ];

  const submitFormHandler = (data) => {
    console.log("data", data);
    console.log("errors", errors);
    console.log("formState", formState);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitFormHandler)}>
      <div className={styles.form__row}>
        <label
          htmlFor="email"
          className={clsx(styles.form__label, {
            [styles["form__label--error"]]: errors.email,
          })}
        >
          Электронная почта
        </label>
        <input
          id="email"
          type="text"
          placeholder="Введите email"
          className={clsx(styles.form__input, {
            [styles["form__input--error"]]: errors.email,
          })}
          {...register("email", {
            required: "Поле email не заполнено",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Почта должна соответствовать формату asd@asd.asd",
            },
          })}
        />
        {errors.email && (
          <div className={styles.error}>{errors.email.message}</div>
        )}
      </div>
      <div className={styles.form__row}>
        <label
          htmlFor="password"
          className={clsx(styles.form__label, {
            [styles["form__label--error"]]: errors.password,
          })}
        >
          Пароль
        </label>
        <input
          id="password"
          type="text" // password
          placeholder="Введите пароль"
          className={clsx(styles.form__input, {
            [styles["form__input--error"]]: errors.password,
          })}
          {...register("password", {
            required: "Поле пароль не заполнено",
            minLength: { value: 5, message: "Пароль короче 5 символов" },
            maxLength: { value: 10, message: "Пароль длинее 10 символов" },
            validate: {
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
          })}
        />
        {errors.password && (
          <div className={styles.error}>{errors.password.message}</div>
        )}
      </div>
      <div className={styles.form__row}>
        <label className={styles.form__label} htmlFor="select">
          Один из вариантов
        </label>
        <select
          className={clsx(styles.form__select, styles.select)}
          name=""
          id="select"
          {...register("variant", {
            required: true,
            validate: (value) => {
              return value === "Three" && "Выбор опции Three запрещен";
            },
          })}
        >
          {selectOptions.map((item) => (
            <option
              key={item.id}
              className={styles.select__option}
              value={item.value}
            >
              {item.text}
            </option>
          ))}
        </select>
        {errors.variant && (
          <div className={styles.error}>{errors.variant.message}</div>
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
