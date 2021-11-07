import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { ReactComponent as ErrorIcon } from "./../../../assets/WarningInput.svg";
import { SCREENS } from "../../../routes/endpoints";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { validationsLogin } from "../../../utils/validationsLogin";
import api from "../../../api";

type UserSubmitForm = {
  login: string;
  password: string;
  captcha: string;
};

export const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
      captcha: "",
    },
    resolver: yupResolver(validationsLogin),
  });
  const [imgSrc, setImgSrc] = useState<string>(" ");
  const [newDate, setNewDate] = useState<string>(Date());
  useEffect(() => {
    setImgSrc(`http://109.194.37.212:93/api/auth/captcha?t=${newDate}`);
  }, [newDate]);

  const login = watch("login");
  const password = watch("password");
  const captcha = watch("captcha");
  const history = useHistory();
  const onSubmit: SubmitHandler<UserSubmitForm> = async (data) => {
    const formData = new FormData();
    formData.append("login", data.login);
    formData.append("password", data.password);
    formData.append("captcha", data.captcha);
    try {
      const response = await api.post("/api/auth/login", formData);
      localStorage.setItem("connect_key", response.data);
      history.push(SCREENS.SCREEN_MAIN);
    } catch (error) {
      console.log(error);
    }
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
          name="login"
          baseClass="authorization"
          errorMesage={errors.login?.message}
          label="User name"
          placeholder="Input user name"
          value={login}
          tabIndex={1}
          onChange={(value: string) => {
            setValue("login", value);
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
          tabIndex={2}
          onChange={(value: string) => {
            setValue("password", value);
          }}
          type="password"
        >
          <ErrorIcon />
        </Input>

        <Input
          name="captcha"
          baseClass="captcha"
          errorMesage={errors.captcha?.message}
          label="Security code"
          placeholder="Security code"
          value={captcha}
          tabIndex={3}
          onChange={(value: string) => {
            setValue("captcha", value);
          }}
          onClick={() => setNewDate(Date())}
          imgsrc={imgSrc}
        >
          <ErrorIcon />
        </Input>
        {/* <Selector /> */}
        <Button baseClass="authorization__button" type="submit">
          Log in
        </Button>
        <Button baseClass="authorization__button" type="button">
          Registration
        </Button>
      </form>
    </div>
  );
};
