import React, { useState } from "react";
import "./styles.scss";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { ReactComponent as ErrorIcon } from "./../../../assets/WarningInput.svg";

export const Form = () => {
  const [inputNameValue, setInputNameValue] = useState<string>("");
  const [inputPasswordValue, setInputPasswordValue] = useState<string>("");
  return (
    <div className="form">
      <form name="subscribeForm" method="post" encType="multipart/form-data">
        <Input
          baseClass="authorization"
          // errorMesage="Something goes wrong"
          label="User name"
          placeholder="Input user name"
          value={inputNameValue}
          onChange={setInputNameValue}
        >
          <ErrorIcon />
        </Input>
        <Input
          baseClass="authorization"
          // errorMesage="Something goes wrong"
          label="Password"
          placeholder="Input password"
          value={inputPasswordValue}
          onChange={setInputPasswordValue}
        >
          <ErrorIcon />
        </Input>
        <Button baseClass="authorization__button">Log in</Button>
      </form>
    </div>
  );
};
