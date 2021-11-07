import React from "react";
import { Header } from "../../molecules/Header";
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
          <div className="main__item authorization">
            <div className="item__content">
              <div className="authorization">
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
