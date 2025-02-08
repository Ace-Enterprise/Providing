import React from "react";
import './style.scss';

export const Button = ({ children }: {
    children: React.ReactNode;
}) => {
  return (
    <button className="button__container">
      {children}
    </button>
  );
};