import React from "react";
import s from "./EditTask.module.scss";
import { TFile } from "../../types/project";
interface FileProps {
  file: TFile;
}

const File: React.FC<FileProps> = ({ file }) => {
  return (
    <a href={file.url} className={s.file} target="_blank">
      <div className={s.file_name}>{file.name}</div>
      <div>{file.size}bytes</div>
    </a>
  );
};

export default File;
