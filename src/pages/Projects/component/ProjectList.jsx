import React, { useState, useRef, useContext } from "react";
import { CursorContext } from "../../../assets/context/cursorContext";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "motion/react";

function ProjectList({
  title,
  projects,
  setExpanded,
  setProjects,
  setActiveIndex,
}) {
  const { setCursorVariant } = useContext(CursorContext);
  const [box, setBox] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  const reverseCursor = () => {
    setCursorVariant({ cursorVariant: "default", text: false, textWords: "" });
  };

  const invisibleCursor = () => {
    setCursorVariant({
      cursorVariant: "invisible",
      text: false,
      textWords: "",
    });
  };

  useGSAP(() => {
    if (box) {
      gsap.to(boxRef.current, {
        left: coordinates.x,
        top: coordinates.y,
        duration: 0.2,
        ease: "power1",
      });
    }
  }, []);
  const follower = (e) => {
    if (!containerRef.current) return;
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    setCoordinates({ x, y });
  };
  return (
    <div
      onMouseEnter={() => {
        invisibleCursor();
        setBox(true);
      }}
      onMouseLeave={() => {
        reverseCursor();
        setBox(false);
      }}
      onMouseMove={follower}
      className="flex flex-col px-[3vw] w-[90%] mx-auto my-[7vh] relative"
    >
      <h1 className="text-[2vw] uppercase font-semibold montserrat w-full ml-[2vw] mb-2 text-[#000]">
        {title}:
      </h1>
      <div ref={containerRef} className="flex flex-col gap-[0vh]">
        <AnimatePresence>
          {box && (
            <motion.div
              ref={boxRef}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                left: `${coordinates.x}px`,
                top: `${coordinates.y}px`,
              }}
              className="w-[130px] h-[130px] bg-[#fff] pointer-events-none flex items-center justify-center fixed rounded-full"
            >
              <a
                href="#"
                className="monsterrat font-medium text-sm text-[#2c2c2c]"
              >
                View Detail
              </a>
            </motion.div>
          )}
        </AnimatePresence>
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
