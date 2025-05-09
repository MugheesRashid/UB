import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AnimatePresence, motion } from "motion/react";
// import "./style.css"

function ProjectPopup({
  setExpanded,
  expanded,
  projects,
  activeIndex,
  setActiveIndex,
}) {
  const [projected, setProjected] = useState([]);

  useEffect(() => {
    setProjected(projects);
  }, [projects]);

  if (!expanded || projected.length === 0) return null;

  const activeProject = projected[activeIndex] || projects[0];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projected.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projected.length) % projected.length
    );
  };
  return (
    <>
      <AnimatePresence mode="sync">
        {expanded && (
          <motion.div
            key={activeIndex+"Popup"}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "anticipate" }}
            className="w-screen h- overflow-hidden fixed pt-2 -top-0 left-0 px-[4.5vw] bg-[#fff] text-[#2c2c2c]"
          >
            <div className="head flex flex-row items-center justify-between">
              {/* <img className="w-[165px]" src="logoub.png" alt="" /> */}
              <div></div>
              <div
                onClick={() => setExpanded(false)}
                className="w-[50px] h-[50px] text-[#2c2c2c] bg-[#f2f2f2] rounded-full flex justify-center items-center"
              >
                <RxCross1 size={"1.4em"} />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-[2vw] mt-5">
              <div className="center w-1/2  h-full">
                <h5 className="text-[3.5vw] montserrat font-semibold leading-none tracking-tight">
                {activeProject?.title || "No Project Selected"}
                </h5>
                <div className="mt-5 poppins text-[1.05vw] flex flex-col justify-center items-center gap-[3vh]">
                  <p>
                    UNIVERSAL BARAKA aspires to become an acknowledged leader in
                    the fields of general contracting, construction management,
                    the provision of engineering services, and trading in the
                    eastern province of Saudi Arabia and beyond through the
                    diversity.
                  </p>
                  <p>
                    UNIVERSAL BARAKA aspires to become an acknowledged leader in
                    the fields of general contracting, construction management,
                    the provision of engineering services, and trading in the
                    eastern province of Saudi Arabia and beyond through the
                    diversity.
                  </p>
                  <p>
                    UNIVERSAL BARAKA aspires to become an acknowledged leader in
                    the fields of general contracting, construction management,
                    the provision of engineering services, and trading in the
                    eastern province of Saudi Arabia and beyond through the
                    diversity.
                  </p>
                </div>
                <div className="btns flex flex-row items-center justify-center gap-[5vw] mt-5">
                  <div
                    onClick={handlePrev}
                    className="flex flex-row items-center justify-center gap-2 w-1/3 bg-[#f2f2f2] text-[#2c2c2c] h-[7vh] rounded-md"
                  >
                    <HiOutlineArrowNarrowLeft size={"2em"} />
                    <p className="nunito">Previous</p>
                  </div>
                  <div
                    onClick={handleNext}
                    className="flex flex-row items-center justify-center gap-2 w-1/3 bg-[#f2f2f2] text-[#2c2c2c] h-[7vh] rounded-md"
                  >
                    <p className="nunito">Next</p>
                    <HiOutlineArrowNarrowRight size={"2em"} />
                  </div>
                </div>
              </div>
              <div className="img w-1/2 h-[75vh] flex flex-row flex-wrap justify-between gap-1 px-[2vw]">
                <div className="w-full h-[60%] bg-[url('about.png')] bg-center bg-cover bg-no-repeat"></div>
                <div className="w-[49.5%] h-[40%] bg-[url('mission.png')] bg-center bg-cover bg-no-repeat"></div>
                <div className="w-[49.5%] h-[40%] bg-[url('vision.png')] bg-center bg-cover bg-no-repeat"></div>
              </div>
            </div>
            {/* <div
              style={{ "--width": "420px", "--bg": "#2c2c2c" }}
              className="project_slider h-[10vh] relative -bottom-3 left-0 z-[999]"
            >
              <div className="list h-full">
                <div
                  style={{ "--position": 0 }}
                  className="item flex flex-row montserrat text-[#2c2c2c]"
                >
                  <p className="text-[2.7vw] tracking-tighter font-semibold">
                    Universal Baraka
                  </p>
                  <img className="w-[5vw] h-[4vw]" src="Logo.png" />
                </div>
                <div
                  style={{ "--position": 1 }}
                  className="item flex flex-row montserrat"
                >
                  <p className="text-[2.7vw] tracking-tighter font-semibold">
                    Universal Baraka
                  </p>
                  <img className="w-[5vw] h-[4vw]" src="Logo.png" />
                </div>
                <div
                  style={{ "--position": 2 }}
                  className="item flex flex-row montserrat"
                >
                  <p className="text-[2.7vw] tracking-tighter font-semibold">
                    Universal Baraka
                  </p>
                  <img className="w-[5vw] h-[4vw]" src="Logo.png" />
                </div>
                <div
                  style={{ "--position": 3 }}
                  className="item flex flex-row montserrat"
                >
                  <p className="text-[2.7vw] tracking-tighter font-semibold">
                    Universal Baraka
                  </p>
                  <img className="w-[5vw] h-[4vw]" src="Logo.png" />
                </div>
              </div>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectPopup;
