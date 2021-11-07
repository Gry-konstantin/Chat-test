import React from "react";
import { Header } from "../../molecules/Header";
import { RefistrationForm } from "../../molecules/RegistrationForm";

export const MainRegistration: React.FC = () => {
  return (
    <div className="authorization">
      <Header
        baseClass="authorization"
        title={["Sign Up to ", "Chatty", "!"]}
        subTitle="Please, autorize yourself"
      />
      <RefistrationForm />
    </div>
  );
};
