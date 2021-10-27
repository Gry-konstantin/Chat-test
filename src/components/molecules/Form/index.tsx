import React, { useState } from "react";
import "./styles.scss";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { ReactComponent as ErrorIcon } from "./../../../assets/WarningInput.svg";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type UserSubmitForm = {
  username: string;
  password: string;
  ref?: undefined;
  type: string;
};
type ErrorUser = {
  username: {
    message: string;
  };
  password: {
    message: string;
  };
};

export const Form: React.FC = () => {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters")
      .required("Required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must not exceed 20 characters")
      .required("Required"),
  });

  const { handleSubmit, setValue } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [inputNameValue, setInputNameValue] = useState<string>("");
  const [inputPasswordValue, setInputPasswordValue] = useState<string>("");
  const [inputError, setInputError] = useState<ErrorUser>();

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
  };
  const onError = (errors: any) => {
    setInputError(errors);
    console.log(errors);
  };

  return (
    <div className="form">
      <form
        name="subscribeForm"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Input
          name="username"
          baseClass="authorization"
          errorMesage={
            inputError &&
            inputError.username &&
            `${inputError.username.message}`
          }
          label="User name"
          placeholder="Input user name"
          value={inputNameValue}
          onChange={(value: string) => {
            setValue("username", value);
            setInputNameValue(value);
          }}
        >
          <ErrorIcon />
        </Input>
        <Input
          name="password"
          baseClass="authorization"
          errorMesage={
            inputError &&
            inputError.password &&
            `${inputError.password.message}`
          }
          label="Password"
          placeholder="Input password"
          value={inputPasswordValue}
          onChange={(value: string) => {
            setValue("password", value);
            setInputPasswordValue(value);
          }}
          type="password"
        >
          <ErrorIcon />
        </Input>
        <Button baseClass="authorization__button" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};
