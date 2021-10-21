import React, { useState } from "react";
import { Input } from "./components/atoms/Input";
import { Button } from "./components/atoms/Button";
import { ReactComponent as ErrorIcon } from "./assets/WarningInput.svg";

function App() {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="authorization">
      <Input
        className="authorization"
        errorMesage="Something goes wrong"
        label="User name"
        placeholder="Input user name"
        value={inputValue}
        onChange={setInputValue}
      >
        <ErrorIcon />
      </Input>
      <Button className="authorization__button">Log in</Button>
    </div>
  );
}

export default App;
