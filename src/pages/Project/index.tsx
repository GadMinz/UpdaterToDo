import React from "react";
import s from "./Project.module.scss";
import Boards from "../../components/Boards";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  return (
    <div>
      <Boards />
    </div>
  );
};

export default Project;
