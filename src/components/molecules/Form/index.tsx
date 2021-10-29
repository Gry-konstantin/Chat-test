import React from "react";
import "./styles.scss";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { ReactComponent as ErrorIcon } from "./../../../assets/WarningInput.svg";
import { SCREENS } from "../../../routes/endpoints";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

type UserSubmitForm = {
  username: string;
  password: string;
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Required")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  password: yup
    .string()
    .required("Required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must not exceed 20 characters"),
});

export const Form: React.FC = () => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const username = watch("username");
  const password = watch("password");

  const onSubmit: SubmitHandler<UserSubmitForm> = (data) => {
    console.log(JSON.stringify(data, null, 2));
    location.href = `${SCREENS.SCREEN_MAIN}`;
  };

  return (
    <div className="form">
      <form
        name="subscribeForm"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name="username"
          baseClass="authorization"
          errorMesage={errors.username?.message}
          label="User name"
          placeholder="Input user name"
          value={username}
          onChange={(value: string) => {
            setValue("username", value);
          }}
        >
          <ErrorIcon />
        </Input>
        <Input
          name="password"
          baseClass="authorization"
          errorMesage={errors.password?.message}
          label="Password"
          placeholder="Input password"
          value={password}
          onChange={(value: string) => {
            setValue("password", value);
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
