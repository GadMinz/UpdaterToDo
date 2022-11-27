import React from "react";
import s from "./Main.module.scss";
import ProjectList from "../../components/ProjectList";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={s.main}>
      <ProjectList />
    </div>
  );
};

export default Main;
