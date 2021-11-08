import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { ReactComponent as ErrorIcon } from "./../../../assets/WarningInput.svg";
import { SCREENS } from "../../../routes/endpoints";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { validationsRegistration } from "../../../utils/validationsRegistration";
import { Selector } from "../../atoms/Select";
import api from "../../../api";
import { UserSignin } from "../../../api/UserSignin";
import { GetGenders } from "../../../api/GetGenders";

type UserSubmitForm = {
  login: string;
  password: string;
  captcha: string;
  password_confirm: string;
  name: string;
  gender_id: string;
};
interface IGender {
  id?: number;
  gender?: string;
  value: string;
  label?: string;
}
export const RefistrationForm: React.FC = () => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      name: "",
      gender_id: "",
      password: "",
      captcha: "",
      password_confirm: "",
    },
    resolver: yupResolver(validationsRegistration),
  });
  const [newDate, setNewDate] = useState<string>(Date());

  const [option, setOption] = useState<IGender[]>([]);
  useEffect(() => {
    GetGenders()
      .then((response) => {
        const options: IGender[] = response.data.genders.map(
          (item: IGender) => {
            return { value: `${item.id}`, label: item.gender };
          }
        );
        setOption(options);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setNewDate(Date());
  }, [newDate]);

  const login = watch("login");
  const password = watch("password");
  const password_confirm = watch("password_confirm");
  const captcha = watch("captcha");
  const name = watch("name");
  const history = useHistory();
  const onSubmit: SubmitHandler<UserSubmitForm> = async (data) => {
    const formData = new FormData();
    (Object.keys(data) as Array<keyof typeof data>).map((item) => {
      formData.append(item, data[item]);
    });
    try {
      UserSignin(formData);
      history.push(SCREENS.SCREEN_AUTHORIZE);
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
          label="Create user name"
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
          label="Create password"
          placeholder="Create password"
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
          name="password_confirm"
          baseClass="authorization"
          errorMesage={errors.password_confirm?.message}
          label="Password confirmation"
          placeholder="Password confirmation"
          value={password_confirm}
          tabIndex={3}
          onChange={(value: string) => {
            setValue("password_confirm", value);
          }}
          type="password"
        >
          <ErrorIcon />
        </Input>
        <Input
          name="name"
          baseClass="authorization"
          errorMesage={errors.name?.message}
          label="Nickname"
          placeholder="Nickname"
          value={name}
          tabIndex={4}
          onChange={(value: string) => {
            setValue("name", value);
          }}
        >
          <ErrorIcon />
        </Input>
        <Selector
          label="Your gender"
          name="gender_id"
          option={option}
          errorMesage={errors.gender_id?.message}
          onChange={(value) => {
            setValue("gender_id", value && value.value ? value.value : "");
          }}
        />
        <Input
          name="captcha"
          baseClass="captcha"
          errorMesage={errors.captcha?.message}
          label="Security code"
          placeholder="Security code"
          value={captcha}
          tabIndex={5}
          onChange={(value: string) => {
            setValue("captcha", value);
          }}
          onClick={() => setNewDate(Date())}
          imgsrc={`http://109.194.37.212:93/api/auth/captcha?t=${newDate}`}
        >
          <ErrorIcon />
        </Input>
        <Button baseClass="authorization__button" type="submit">
          Registration
        </Button>
        <Button
          baseClass="authorization__button"
          type="button"
          onClick={() => history.push(SCREENS.SCREEN_AUTHORIZE)}
        >
          Log in
        </Button>
      </form>
    </div>
  );
};
