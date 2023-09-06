import "./App.css";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import { ControllerForm } from "./components/ControllerForm/ControllerForm";
import { useState } from "react";
import { AbsolyteBtn } from "./components/Buttons/AbsoluteButton";

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
