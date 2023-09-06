import { useForm, Controller, useFormState } from "react-hook-form";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { passwordValidation } from "./utils/passwordValidation";
import { emailValidation } from "./utils/emailValidation";

export const ControllerForm = () => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    defaultValues: { email: "" },
    reValidateMode: "onChange",
  });
  const { errors } = useFormState({ control });
  const onSubmit = (data) => console.log("data", data);

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={emailValidation}
        render={({ field }) => {
          return (
            <>
              <TextField
                value={field.value}
                helperText={errors.email?.message}
                error={!!errors.email?.message}
                onChange={(e) => field.onChange(e)}
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </>
          );
        }}
      />
      <Controller
        name="password"
        control={control}
        rules={passwordValidation}
        render={({ field }) => {
          return (
            <>
              <TextField
                value={field.value}
                helperText={errors.password?.message}
                error={!!errors.password?.message}
                onChange={(e) => field.onChange(e)}
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </>
          );
        }}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disableElevation={true}
        sx={{
          marginTop: 2,
        }}
      >
        Отправить
      </Button>
    </form>
  );
};
