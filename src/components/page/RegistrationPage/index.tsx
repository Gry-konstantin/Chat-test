import React from "react";
import { MainRegistration } from "../../organisms/MainRegistration";
import "./styles.scss";

export const RegistrationPage: React.FC = () => {
  return (
    <div className="template">
      <div className="wrapper">
        <main>
          <div className="main__item authorization">
            <div className="item__content">
              <MainRegistration />
            </div>
            <div className="item__image" />
          </div>
        </main>
      </div>
    </div>
  );
};
