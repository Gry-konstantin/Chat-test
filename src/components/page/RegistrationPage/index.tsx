import React from "react";
import { FormTemplate } from "../../templates/FormTemplate";
import { RefistrationForm } from "../../organisms/RegistrationForm";
import "./styles.scss";

export const RegistrationPage: React.FC = () => {
  return (
    <FormTemplate
      baseClass="authorization"
      title={["Sign Up to ", "Chatty", "!"]}
      subTitle="Registration"
    >
      <RefistrationForm />
    </FormTemplate>
  );
};
