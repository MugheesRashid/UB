import React from "react";

export default function Second({setExpanded, projects, setProjects, setActiveIndex}) {

  return (
    <div className="w-full h-[auto] flex flex-col items-center justify-center gap-[2vh] text-[#2c2c2c]">
      <h2 className="text-[6vw] leading-none tracking-tighter montserrat font-semibold">
        Projects
      </h2>
      <div className="flex flex-col px-[3vw] w-[90%]">
        <h1 className="text-[2vw] uppercase font-semibold montserrat w-full ml-[2vw] mb-2 text-[#000]">
          Ongoing:
        </h1>
        <div className="flex flex-col gap-[0vh]">
          {projects.map((project, idx) => (
          <div onClick={()=> {setExpanded(true); setProjects(projects) ;setActiveIndex(idx)}} key={project.id} className={`w-full hover:text-[#000] text-[#2c2c2c] flex flex-row justify-between gap-[2vw] py-4 border-t ${idx === projects.length - 1 ? 'border-b': ""} pr-3 tracking-tight`}>
            <div className="flex w-2/3 items-center justify-start gap-1">
              <p className="text-[1.4vw] montaga">{project.id}.</p>
              <div className="flex flex-col justify-between">
                <h4 className="text-[2vw] tracking-tighter font-medium montserrat">{project.title}</h4>
                <div className="flex flex-row w-2/3 gap-2 leading-none flex-wrap text-[1vw] inter">
                {project.services.map((service, index) => (
                  <p key={index+99}>{service}</p>
                ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-end">
              <p className=" inter tracking-tight">View Project</p> 
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
