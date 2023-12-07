import { clsx } from "clsx";
import { useId } from "react";
import { Label } from "../label/Label.jsx";
import styles from "./Select.module.css";

export const Select = ({
  selectOptions,
  register,
  errors,
  fieldName,
  labelText,
}) => {
  const labelId = useId();
  console.log("errors", errors);
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
          validate: (value) => {
            console.log("errors", errors);
            if (value === "Three") {
              return "Выбор опции Three запрещен";
            } else {
              return "";
            }
          },
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
