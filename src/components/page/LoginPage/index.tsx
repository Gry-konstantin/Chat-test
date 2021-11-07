import React from "react";
import { MainLogin } from "../../organisms/MainLogin";
import "./styles.scss";

export const LoginPage: React.FC = () => {
  return (
    <div className="template">
      <div className="wrapper">
        <main>
          <div className="main__item authorization">
            <div className="item__content">
              <MainLogin />
            </div>
            <div className="item__image" />
          </div>
        </main>
      </div>
    </div>
  );
};
