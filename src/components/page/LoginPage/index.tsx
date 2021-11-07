import React from "react";
import { LoginForm } from "../../organisms/LoginForm";
import { FormTemplate } from "../../templates/FormTemplate";
import "./styles.scss";

export const LoginPage: React.FC = () => {
  return (
    <FormTemplate
      baseClass="authorization"
      title={["Wellcome to ", "Chatty", "!"]}
      subTitle="Please, autorize yourself"
    >
      <LoginForm />
    </FormTemplate>
  );
};
