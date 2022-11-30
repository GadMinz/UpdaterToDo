import React from "react";
import s from "./Project.module.scss";
import Boards from "../../components/Boards";
import { useLocation, useNavigate } from "react-router-dom";
import { TProject } from "../../types/project";

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  const navigate = useNavigate();
  const id = useLocation().pathname.slice(1);
  React.useEffect(() => {
    const project = JSON.parse(localStorage.getItem("projects") || "null").find(
      (proj: TProject) => proj.id === id
    );
    if (!project) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Boards />
    </div>
  );
};

export default Project;
