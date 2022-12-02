import React from "react";
import s from "./ProjectList.module.scss";
import ProjectListItem from "./ProjectListItem";
import ProjectCreate from "./ProjectCreate";
import { TProject } from "../../types/project";
import { getLocalProjects, updateLocalProjects } from "../../localStorage";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

interface ProjectListProps {}

const ProjectList: React.FC<ProjectListProps> = () => {
  const [projects, setProjects] = React.useState<TProject[]>(
    getLocalProjects() || []
  );
  React.useEffect(() => {
    updateLocalProjects(projects);
  }, [projects]);

  const addProject = (item: TProject) => {
    setProjects((prevState) => [...prevState, item]);
  };
  const deleteProject = (id: string) => {
    if (window.confirm("Delete project?")) {
      setProjects((prevState) => prevState.filter((item) => item.id !== id));
    }
  };
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.index === destination.index) return;
    let list = [...projects];
    [list[source.index], list[destination.index]] = [
      list[destination.index],
      list[source.index],
    ];
    setProjects(list);
  };
  return (
    <div className={s.wrapper}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="ProjectList">
          {(provided) => (
            <div
              className={s.list}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {projects.map((project, i) => (
                <ProjectListItem
                  key={project.id}
                  deleteProject={deleteProject}
                  index={i}
                  {...project}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <ProjectCreate addProject={addProject} />
    </div>
  );
};

export default ProjectList;
