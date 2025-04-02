import React from "react";

function ProjectList({ title, projects, setExpanded, setProjects, setActiveIndex }) {
  return (
    <div className="flex flex-col px-[3vw] w-[90%] mx-auto my-[7vh]">
      <h1 className="text-[2vw] uppercase font-semibold montserrat w-full ml-[2vw] mb-2 text-[#000]">
        {title}:
      </h1>
      <div className="flex flex-col gap-[0vh]">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            onClick={() => {
                setExpanded(true);
                setProjects(projects);
                setActiveIndex(idx);
              }}
            className={`w-full hover:text-[#000] text-[#2c2c2c] flex flex-row justify-between gap-[2vw] py-4 border-t ${
              idx === projects.length - 1 ? "border-b" : ""
            } pr-3 tracking-tight`}
          >
            <div className="flex w-2/3 items-center justify-start gap-1">
              <p className="text-[1.4vw] montaga">{project.id}.</p>
              <div className="flex flex-col justify-between">
                <h4 className="text-[2vw] tracking-tighter font-medium montserrat">
                  {project.title}
                </h4>
                <div className="flex flex-row w-2/3 gap-2 leading-none flex-wrap text-[1vw] inter">
                  {project.services.map((service, index) => (
                    <p key={index}>{service}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-end">
              <p className="inter tracking-tight">View More</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
