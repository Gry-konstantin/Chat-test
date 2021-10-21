import React, { useState } from "react";
import { Input } from "./components/atoms/Input";
import { Button } from "./components/atoms/Button";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isDisabledButton, setisDisabledButton] = useState<boolean>(false);

  return (
    <div className="App">
      <Input
        classContainer="authorization"
        warning="Something goes wrong"
        label="User name"
        placeholder="Input user name"
        value={inputValue}
        onChange={setInputValue}
      />
      <Button
        childrenButton="Log In"
        classButton="authorization__button"
        isDisabled={isDisabledButton}
        onClick={setisDisabledButton}
      />
    </div>
  );
}

export default App;
