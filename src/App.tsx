import React, { useState } from "react";
import { Input } from "./components/atoms/Input";
import { Button } from "./components/atoms/Button";

function App() {
  const [inputValue, setInputValue] = useState<string>("");

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
      <Button classButton="authorization__button">Log in</Button>
    </div>
  );
}

export default App;
