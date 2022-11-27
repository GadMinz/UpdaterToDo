import React from "react";
import s from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={s.header}>
      <div className={s.header_title}>{`ToDo's`}</div>
    </div>
  );
};

export default Header;
