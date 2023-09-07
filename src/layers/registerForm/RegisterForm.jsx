import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import { Select } from "./components/Select";
import { selectOptions } from "./mocks/selectOptions";
import { Input } from "./components/Input";
import { registerOptionsForPassword } from "./utils/registerOptionsForPassword";
import { registerOptionsForEmail } from "./utils/registerOptionsForEmail";
import { Button } from "./components/Button";
import { FormRow } from "./components/FormRow";

export const RegisterForm = () => {
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

  const submitFormHandler = (data) => {
    console.log("data", data);
    console.log("errors", errors);
    console.log("formState", formState);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitFormHandler)}>
      <FormRow>
        <Input
          errors={errors}
          register={register}
          fieldName={"email"}
          labelText={"Электронная почта"}
          placeholder={"Введите email"}
          registerOptions={registerOptionsForEmail}
        />
      </FormRow>
      <FormRow>
        <Input
          errors={errors}
          register={register}
          fieldName={"password"}
          labelText={"Пароль"}
          placeholder={"Введите password"}
          registerOptions={registerOptionsForPassword}
        />
      </FormRow>
      <FormRow>
        <Select
          errors={errors}
          register={register}
          fieldName={"variant"}
          labelText={"Один из вариантов"}
          selectOptions={selectOptions}
        />
      </FormRow>
      <FormRow>
        <Button errors={errors} formState={formState} text={"Отправить"} />
      </FormRow>
    </form>
  );
};
