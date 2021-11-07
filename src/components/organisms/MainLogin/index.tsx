import React from "react";
import { Header } from "../../molecules/Header";
import { LoginForm } from "../../molecules/LoginForm";
import "./styles.scss";

export const MainLogin: React.FC = () => {
  return (
    <div className="authorization">
      <Header
        baseClass="authorization"
        title={["Wellcome to ", "Chatty", "!"]}
        subTitle="Please, autorize yourself"
      />
      <LoginForm />
    </div>
  );
};
