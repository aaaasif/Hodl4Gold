import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", onClick, ...rest }) => {
  const getClassName = () => {
    switch (variant) {
      case "secondary":
        return "secondary_btn";
      default:
        return "primary_btn";
    }
  };

  return (
    <button className={getClassName()} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
