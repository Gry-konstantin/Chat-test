import React from "react";
import "./styles.scss";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { ReactComponent as ErrorIcon } from "./../../../assets/WarningInput.svg";
import { SCREENS } from "../../../routes/endpoints";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { validationSchema } from "../../../utils/validations";
import { Selector } from "../../atoms/Select";

type UserSubmitForm = {
  username: string;
  password: string;
  captcha: string;
};

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
      captcha: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const username = watch("username");
  const password = watch("password");
  const captcha = watch("captcha");
  // const history = useHistory();
  const onSubmit: SubmitHandler<UserSubmitForm> = (data) => {
    console.log(JSON.stringify(data, null, 2));
    // history.push(SCREENS.SCREEN_MAIN);
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

        <Input
          name="captcha"
          baseClass="captchaAuthorization"
          errorMesage={errors.captcha?.message}
          label="Security code"
          placeholder="Security code"
          value={captcha}
          onChange={(value: string) => {
            setValue("captcha", value);
          }}
          imgsrc={`http://109.194.37.212:93/api/auth/captcha?t=${Date()}`}
        >
          <ErrorIcon />
        </Input>
        <Selector />
        <Button baseClass="authorization__button" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};
