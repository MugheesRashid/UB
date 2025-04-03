import React, {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
  useRef,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { CursorContext } from "../../../assets/context/cursorContext";
import Magnetic from "../../../common/magnetic/Magnetic";
import { opacityVariant, letterVariants } from "../../../assets/animation";

const slides = [
  {
    id: 1,
    title: "Energy Focus To Deliver",
    description:
      "Here's a modern and simple hero section website. Let me know if you need any tweaks! Here's a modern and simple hero section for a construction company website. Here's a modern and simple hero section for a construction company website! Here's a modern and simple hero section for a construction company website. Let me know if you need any tweaks!",
  },
  {
    id: 2,
    title: "Project Management",
    description:
      "Project management plays an important role in carrying out any task, it has been our company's policy to facilitate communication from the bottom up to accomplish any task. Our managers are empowered to avoid any hesitation to maintain the quality of work and deliver the best. It is part of our policy that every project should be organized accordingly and resources should be arranged according to the need of the project without any government violation.",
  },
  {
    id: 3,
    title: "Reliable Construction Services",
    description:
      "Universal Baraka has rich experience in Electrical, Instrumentation, Fiber Optic, IT, Civil Works and Mechanical Works and has the ability to provide best results to the clients by using experienced manpower separately for each field. Recently completed projects have been carried out with full responsibility. The founders of this company are fully involved in every work to ensure quality of work and standards are fully maintained!",
  },
];

const h1 = "UNIVERSAL BARAKA".split("");
const p = "GENERAL CONTRACTING COMPANY.".split("");

function First({ loading }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setCursorVariant } = useContext(CursorContext);
  const [box, setBox] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const boxRef = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = -75;
  let direction = -1;

  const follower = (e) => {
    const x = e.clientX + window.scrollX - 100; // Centering properly
    const y = e.clientY + window.scrollY - 100;
    setCoordinates({ x, y });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useGSAP(() => {
    if (box) {
            gsap.set(boxRef.current, {
        // xPercent: -50,
        // yPercent: -50,
        translateX: coordinates.x + 40,
        translateY: coordinates.y + 10,
      });

      gsap.to(boxRef.current, {
        left: coordinates.x + 40,
        top: coordinates.y + 10,
        duration: 0.2,
        ease: "power1",
      });
    }
  }, [coordinates]);

  const invisibleCursor = () => {
    setCursorVariant({
      cursorVariant: "invisible",
      text: false,
      textWords: "",
    });
  };

  const setCursor = () => {
    setCursorVariant({
      cursorVariant: "click",
      text: false,
      textWords: "",
    });
  };

  const reverseCursor = () => {
    setCursorVariant({ cursorVariant: "default", text: false, textWords: "" });
  };

  useLayoutEffect(() => {
    if (loading) {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 1,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => {
            direction = e.direction * -1;
            xPercent += 0.05 * direction;
          },
        },
      });
    }
    let animationFrame;
    const animate = () => {
      if (xPercent < -150) {
        xPercent = 150;
      } else if (xPercent > 150) {
        xPercent = -150;
      }
      if (loading) {
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent + 1 });
      }
      xPercent += 0.004 * direction;
      animationFrame = requestAnimationFrame(animate);
    };

    if (loading) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
  }, [loading]);

  const animate = () => {
    if (xPercent < -150) {
      xPercent = 150;
    } else if (xPercent > 150) {
      xPercent = -150;
    }
    if (loading) {
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent + 1 });
    }
    requestAnimationFrame(animate);
    xPercent += 0.004 * direction;
  };

  return (
    <>
      <AnimatePresence>
      {loading ? ( 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            while={{opacity: 0}}
            transition={{ duration: 0.2, delay: 0, ease: "easeOut" }}
            className="w-screen pt-5 h-[110vh] bg-[#f2f2f2] pl-[4.5vw] pr-[8vw] relative"
          >
            <header
              onMouseMove={(e) => follower(e)}
              onMouseEnter={() => {
                invisibleCursor();
                setBox(true);
              }}
              onMouseLeave={() => {
                reverseCursor();
                setBox(false);
              }}
              className="w-full pt-6 z-20 relative border-solid"
            >
              <AnimatePresence>
                {box && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    ref={boxRef}
                    className="circle w-[150px] h-[150px] pointer-events-none bg-[#FF6A39] fixed rounded-full -z-10"
                  />
                )}
              </AnimatePresence>

              <motion.h1
                className="text-[#2c2c2c] font-medium overflow-hidden text-[8vw] tracking-tight montserrat leading-none flex"
                initial="hidden"
                animate="visible"
              >
                {h1.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    custom={index}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                className="leading-none tracking-tight text-[2.51vw] text-[#2c2c2c] font-medium montserrat"
              >
                {p.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    custom={index}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.p>
            </header>

            <motion.div
              variants={opacityVariant}
              ref={slider}
              initial="hidden"
              animate="visible"
              className="imgwrapper overflow-hidden mt-7 mb-10 w-auto overflow- flex-row flex gap-[.5vw] whitespace-nowrap"
            >
              <div
                ref={firstText}
                className="wrapper w-full flex flex-row flex-center gap-[1vw]"
              >
                <div
                  className="h-[200px] bg-[url('/hero1.png')] w-[360px] overflow-hidden"
                  alt="Hero 1"
                />
                <div
                  className="h-[200px] bg-[url('/hero2.png')] w-[360px] overflow-hidden"
                  alt="Hero 2"
                />
                <div
                  className="h-[200px] bg-[url('/hero3.png')] w-[360px] overflow-hidden"
                  alt="Hero 2"
                />
                <div
                  className="h-[200px] bg-[url('/hero2.png')] w-[360px] overflow-hidden"
                  alt="Hero 2"
                />
              </div>
              <div
                ref={secondText}
                className="wrapper w-full flex flex-row flex-center gap-[1vw]"
              >
                <div
                  className="h-[200px] bg-[url('/hero1.png')] w-[360px] overflow-hidden"
                  alt="Hero 1"
                />
                <div
                  className="h-[200px] bg-[url('/hero2.png')] w-[360px] overflow-hidden"
                  alt="Hero 2"
                />
                <div
                  className="h-[200px] bg-[url('/hero3.png')] w-[360px] overflow-hidden"
                  alt="Hero 2"
                />
                <div
                  className="h-[200px] bg-[url('/hero2.png')] w-[360px] overflow-hidden"
                  alt="Hero 2"
                />
              </div>
            </motion.div>

            <motion.div
              variants={opacityVariant}
              initial="hidden"
              animate="visible"
              className="info text-[#2c2c2c] w-full flex flex-row items-center justify-between"
            >
              <div className="text w-[75%]">
                <h2 className="inter font-semibold text-[2.2vw] tracking-tight mb-3 overflow-hidden relative">
                  <AnimatePresence>
                    {slides[activeIndex].title
                      .split(" ")
                      .map((word, index, arr) => (
                        <motion.span
                          key={`${word}-${index}`}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{
                            y: "0%",
                            opacity: 1,
                            transition: {
                              duration: 0.8,
                              delay: 0.2,
                              ease: [0, 0.71, 0.2, 1.01],
                            },
                          }}
                          exit={{
                            y: "-100%",
                            opacity: 0,
                            transition: { duration: 0.2 },
                          }}
                          style={{
                            color:
                              index === arr.length - 1 ? "#FF6A39" : "#2c2c2c",
                            marginRight: "0.2em",
                          }}
                          className="relative inline-block"
                        >
                          {word}
                        </motion.span>
                      ))}
                  </AnimatePresence>
                </h2>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={slides[activeIndex].description}
                    className="nunito text-[1.1vw] px-[5px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                  >
                    {slides[activeIndex].description}
                  </motion.p>
                </AnimatePresence>
              </div>

              <Magnetic>
                <div
                  onMouseEnter={() => invisibleCursor()}
                  onMouseLeave={() => reverseCursor()}
                  className="btn w-[171px] h-[171px] bg-[#FF6A39] flex justify-center items-center rounded-full"
                >
                  <p className="text-[1.2vw] text-[#f2f2f2] font-semibold">
                    Who Are We
                  </p>
                </div>
              </Magnetic>
            </motion.div>

            <div className="w-[50px] absolute left-1/2 -translate-x-1/2 h-[50px] border border-[#2c2c2c] rounded-full bg-transparent flex items-center justify-center">
              <img src="/arrowdwn.png" alt="Scroll Down Arrow" />
            </div>

            <div
              onMouseEnter={() => setCursor()}
              onMouseLeave={() => reverseCursor()}
              className="pagination flex flex-col flex-center absolute right-[5%] top-1/2 -translate-y-1/2 gap-1.5 md:gap-2"
            >
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                  }}
                  className={`w-[14px] h-[14px] ${
                    activeIndex === idx ? "bg-[#FF6A39]" : "bg-[#fff]"
                  } rounded-full`}
                ></div>
              ))}
            </div>
          </motion.div>) : (
            <div className="w-screen h-screen bg-red-500"></div>
          )}

      </AnimatePresence>
    </>
  );
}

export default First;
