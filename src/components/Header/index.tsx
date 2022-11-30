import React from "react";
import s from "./Header.module.scss";
import { useAppSelector } from "../../hook";
import {Link, useLocation} from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  let { title } = useAppSelector((state) => state.project.project);
  if (useLocation().pathname === "/") {
    title = `ToDo's`;
  }
  document.title = title;
  return (
    <div className={s.header}>
      <Link to="/" className={s.header_title}>
        {title}
      </Link>
    </div>
  );
};

export default Header;
