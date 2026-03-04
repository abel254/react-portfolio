import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center md:justify-start">
        <ProjectCard
          title="Blogging Website"
          main="This is a blogging website created with React js and used some component library"
        />
         <ProjectCard
          title="Amazon Clone"
          main="This is a blogging website created with React js and used some component library"
        />
         <ProjectCard
          title="WiseMysteries"
          main="This is a blogging website created with React js and used some component library"
        />
      </div>
    </div>
  );
};

export default Projects;
