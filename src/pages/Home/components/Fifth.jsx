import React, { useContext, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react"; // Using framer-motion
import { CursorContext } from "../../../assets/context/cursorContext";
import { leftVariant } from "../../../assets/animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const work = [
  {
    id: 1,
    title: "Pipeline Fitting Industry of KSA",
    date: "11.20.2020",
    img: "/work.png",
    href: "#",
  },
  {
    id: 2,
    title: "Al Rashid Trading & Contracting Co. (Jubail)",
    date: "11.20.2020",
    img: "/about.png",
  },
  {
    id: 3,
    title: "Honeywell building Technologies (Riyadh)",
    date: "11.20.2020",
    img: "/work.png",
  },
  {
    id: 1,
    title: "Pipeline Fitting Industry of KSA",
    date: "11.20.2020",
    img: "/work.png",
    href: "#",
  },
  {
    id: 2,
    title: "Al Rashid Trading & Contracting Co. (Jubail)",
    date: "11.20.2020",
    img: "/about.png",
  },
  {
    id: 3,
    title: "Honeywell building Technologies (Riyadh)",
    date: "11.20.2020",
    img: "/work.png",
  },
];

function Fifth() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setCursorVariant } = useContext(CursorContext);
  const [box, setBox] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  // Cursor handlers
  const reverseCursor = useCallback(() => {
    setCursorVariant({ cursorVariant: "default", text: false, textWords: "" });
  }, [setCursorVariant]);

  const invisibleCursor = useCallback(() => {
    setCursorVariant({ cursorVariant: "invisible", text: false, textWords: "" });
  }, [setCursorVariant]);

  // Update GSAP animation when the box is active and coordinates change
  useGSAP(() => {
    if (box && boxRef.current) {
      gsap.set(boxRef.current, {
        xPercent: -50,
        yPercent: -50,
        translateX: coordinates.x,
        translateY: coordinates.y,
      });
      gsap.to(boxRef.current, {
        left: coordinates.x,
        top: coordinates.y,
        duration: 0.2,
        ease: "power1",
      });
    }
  }, [box, coordinates]);

  // Mouse move handler for updating cursor follower position
  const follower = useCallback((e) => {
    if (!containerRef.current) return;
    const x = e.clientX - 50;
    const y = e.clientY - 50;
    setCoordinates({ x, y });
  }, []);

  // Handlers for work item hover events
  const handleItemMouseEnter = useCallback(
    (idx) => {
      setActiveIndex(idx);
      invisibleCursor();
    },
    [invisibleCursor]
  );

  const handleItemMouseLeave = useCallback(() => {
    setActiveIndex(0);
    reverseCursor();
  }, [reverseCursor]);

  return (
    <div className="w-screen h-[150vh] rounded-tl-4xl rounded-br-4xl px-[4.5vw] py-[100px] text-[#fcfcfc] bg-[#1c1c1c]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={leftVariant}
        className="w-full flex flex-col gap-[0.4vw] leading-none"
      >
        <p className="text-[1.3vw] inter font-medium italic text-[#FF6A39]">
          Our Projects
        </p>
        <h3 className="text-[6vw] tracking-tighter font-semibold montserrat">
          Our Work
        </h3>
        <p className="text-[1.2vw] leading-snug w-1/2 poppins font-light">
          UNIVERSAL BARAKA aspires to become an acknowledged leader in the fields
          of general contracting, construction management.
        </p>
      </motion.div>

      <div className="w-full flex items-center justify-between flex-row mt-[8vh] mb-[10vh]">
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          ref={containerRef}
          onMouseEnter={() => {
            invisibleCursor();
            setBox(true);
          }}
          onMouseLeave={() => {
            reverseCursor();
            setBox(false);
          }}
          onMouseMove={follower}
          className="left w-[50%] relative"
        >
          <AnimatePresence>
            {box && (
              <motion.div
                ref={boxRef}
                key="cursorBox"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  left: `${coordinates.x}px`,
                  top: `${coordinates.y}px`,
                }}
                className="w-[100px] h-[100px] bg-[#f2f2f2] pointer-events-none flex items-center justify-center fixed rounded-full"
              >
                <a
                  href="#"
                  className="monsterrat font-medium text-sm text-[#2c2c2c]"
                >
                  View
                </a>
              </motion.div>
            )}
          </AnimatePresence>
          {work.map((elem, idx) => (
            <div
              onMouseEnter={() => handleItemMouseEnter(idx)}
              onMouseLeave={handleItemMouseLeave}
              key={idx}
              style={{
                borderBottom:
                  idx === work.length - 1 ? "1px solid #f2f2f2" : "none",
              }}
              className="w-full h-[85px] hover:px-5 hover:opacity-60 transition-all duration-300 ease-in-out border-t flex flex-row items-center justify-between border-[#f2f2f2] text-[#f2f2f2]"
            >
              <p className="text-[1.6vw]">{elem.title}</p>
              <p>{elem.date}</p>
            </div>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.img
            key={work[activeIndex].img}
            className="w-[40%]"
            src={work[activeIndex].img}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <motion.div className="bg-[transparent] text-[#f2f2f2] relative left-1/2 -translate-x-1/2 w-[225px] h-[45px] border border-[#f2f2f2] rounded-3xl flex flex-center justify-center gap-5 items-center monsterrat cursor-pointer">
        <p className="text-[16px] font-normal">View More Projects</p>
        <img src="dkarrow.png" alt="Arrow left" />
      </motion.div>
    </div>
  );
}

export default Fifth;
