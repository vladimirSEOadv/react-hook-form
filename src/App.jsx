import { RegisterForm } from "./layers/registerForm/RegisterForm";
import { ControllerForm } from "./layers/controllerForm/ControllerForm";
import { useState } from "react";
import { AbsolyteBtn } from "./components/buttons/AbsoluteButton";
import "./App.css";

function App() {
  const [toggleForm, setToggleForm] = useState(true);
  return (
    <>
      {toggleForm ? (
        <>
          <h3>ControllerForm</h3>
          <ControllerForm />
        </>
      ) : (
        <>
          <h3>RegisterForm</h3>
          <RegisterForm />
        </>
      )}
      <AbsolyteBtn
        variant="contained"
        size="small"
        onClick={() => setToggleForm((prev) => !prev)}
      >
        Change Form
      </AbsolyteBtn>
    </>
  );
}

export default App;
