import React from "react";
import { LoginForm } from "../../organisms/LoginForm";
import "./styles.scss";

export const LoginTemplates = () => {
  return (
    <div className="template">
      <div className="wrapper">
        <main>
          <div className="main__item authorization">
            <div className="item__content">
              <LoginForm />
            </div>
            <div className="item__image" />
          </div>
        </main>
      </div>
    </div>
  );
};
