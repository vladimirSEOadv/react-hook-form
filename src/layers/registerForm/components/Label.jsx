import styles from "./Label.module.css";

export const Label = ({ id, labelText, el }) => {
  return (
    <label className={styles.form__label} htmlFor={`${id}-${el}`}>
      {labelText}
    </label>
  );
};
