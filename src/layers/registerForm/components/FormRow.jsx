import styles from "./FormRow.module.css";

export const FormRow = ({ children }) => {
  return <div className={styles.form__row}>{children}</div>;
};
