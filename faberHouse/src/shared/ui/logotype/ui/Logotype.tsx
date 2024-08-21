import React from "react";
import logo from "shared/assets/img/logo.webp";

interface IProps {
  className?: string;
  onClick?: () => void;
}

export const Logotype: React.FC<IProps> = (props) => {
  const { className, onClick } = props;

  return (
    <h1 onClick={onClick} className={className}>
      <img src={logo} alt="site logotype" />
    </h1>
  );
};
