import { useId } from "react";
import { clsx } from "clsx";
import styles from "./Input.module.css";
import { Label } from "./Label";

export const Input = ({
  errors,
  register,
  fieldName,
  placeholder,
  registerOptions,
  labelText,
}) => {
  const labelId = useId();
  return (
    <>
      <Label
        id={labelId}
        labelText={labelText}
        el={`${labelId}-${labelText}`}
      />
      <input
        id={`${labelId}-${fieldName}`}
        type="text"
        placeholder={placeholder}
        className={clsx(styles.form__input, {
          [styles["form__input--error"]]: errors[fieldName],
        })}
        {...register(fieldName, {
          required: `Поле ${fieldName} не заполнено`,
          ...registerOptions,
        })}
      />
      {errors[fieldName] && (
        <div className={styles.error}>{errors[fieldName].message}</div>
      )}
    </>
  );
};
