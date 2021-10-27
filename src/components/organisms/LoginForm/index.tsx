import React, { useState } from "react";
import { Header } from "../../molecules/Header";
import { Form } from "../../molecules/Form";

export const LoginForm: React.FC = () => {
  return (
    <div className="authorization">
      <Header
        baseClass="authorization"
        title={["Wellcome to ", "Chatty", "!"]}
        subTitle="Please, autorize yourself"
      />
      <Form />
    </div>
  );
};
