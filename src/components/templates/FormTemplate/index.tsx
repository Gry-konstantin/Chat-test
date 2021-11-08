import React from "react";
import { Header } from "../../molecules/Header";
import "./styles.scss";
interface ITemplate {
  baseClass?: string;
  title: string[];
  subTitle: string;
}
export const FormTemplate: React.FC<ITemplate> = ({
  children,
  title,
  subTitle,
  baseClass,
}) => {
  return (
    <div className="template">
      <div className="wrapper">
        <main>
          <div className="main__item">
            <div className="item__wrapper">
              <div className={`item__content  ${baseClass}`}>
                <Header
                  baseClass={baseClass}
                  title={title}
                  subTitle={subTitle}
                />
                {children}
              </div>
            </div>
            <div className="item__image" />
          </div>
        </main>
      </div>
    </div>
  );
};
