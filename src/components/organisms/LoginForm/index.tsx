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
import { UserSubmitForm } from "../../../utils/types";
import { UserLogin } from "../../../api/UserLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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
  const [newDate, setNewDate] = useState<string>(Date());
  useEffect(() => {
    setNewDate(Date());
  }, [newDate]);

  const login = watch("login");
  const password = watch("password");
  const captcha = watch("captcha");
  const history = useHistory();

  const onSubmit: SubmitHandler<UserSubmitForm> = async (data) => {
    const formData = new FormData();
    (Object.keys(data) as Array<keyof typeof data>).map((item) => {
      formData.append(item, data[item]);
    });
    try {
      await UserLogin(formData);
      history.push(SCREENS.SCREEN_MAIN);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        response && response.data
          ? toast.error(`${response && response.data}`)
          : toast.error(`${response}`);
      }
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
          imgsrc={`http://109.194.37.212:93/api/auth/captcha?t=${newDate}`}
        >
          <ErrorIcon />
        </Input>
        <Button baseClass="authorization__button" type="submit">
          Log in
        </Button>
        <Button
          baseClass="authorization__button"
          type="button"
          onClick={() => history.push(SCREENS.SCREEN_SIGNUP)}
        >
          Registration
        </Button>
      </form>
      <ToastContainer autoClose={3000} />
    </div>
  );
};
