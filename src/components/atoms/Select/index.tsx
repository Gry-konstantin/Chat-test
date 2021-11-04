import React, { Component } from "react";
import Select from "react-select";
import "./styles.scss";

export const Selector: React.FC = () => {
  const options = [
    { value: "your gender", label: "your gender" },
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ];

  return <Select options={options} />;
};
