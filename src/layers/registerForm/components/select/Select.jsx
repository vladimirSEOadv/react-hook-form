import { clsx } from "clsx";
import { useId } from "react";
import { Label } from "../label/Label.jsx";
import styles from "./Select.module.css";

export const Select = ({
  selectOptions,
  register,
  registerOptions,
  errors,
  fieldName,
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
      <select
        className={clsx(styles.form__select, {
          [styles["form__select--error"]]: errors[fieldName],
        })}
        name=""
        id={`${labelId}-select`}
        {...register(fieldName, {
          required: true,
          ...registerOptions,
        })}
      >
        <option value="" disabled>
          Выберите один из вариантов...
        </option>
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
    </>
  );
};
