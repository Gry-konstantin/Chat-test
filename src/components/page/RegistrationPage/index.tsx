import React from "react";
import { RegistrationForm } from "../../organisms/RegistrationForm";
import "./styles.scss";

export const RegistrationPage: React.FC = () => {
  return (
    <div className="template">
      <div className="wrapper">
        <main>
          <div className="main__item authorization">
            <div className="item__content">
              <RegistrationForm />
            </div>
            <div className="item__image" />
          </div>
        </main>
      </div>
    </div>
  );
};
