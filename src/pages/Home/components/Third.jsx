import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { opacityVariant2 } from "../../../assets/animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Heading = ({ turn }) => (
  <AnimatePresence mode="wait">
    {turn ? (
      <motion.h3
        key="vision"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeIn", duration: 0.3 }}
        className="absolute montserrat text-[5vw] w-1/2 leading-none"
      >
        Our Vision
      </motion.h3>
    ) : (
      <motion.h3
        key="mission"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeIn", duration: 0.3 }}
        className="absolute montserrat text-[5vw] w-1/2 leading-none"
      >
        Our Mission
      </motion.h3>
    )}
  </AnimatePresence>
);

const Description = ({ turn }) => (
  <AnimatePresence mode="wait">
    {turn ? (
      <motion.p
        key="visionDesc"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeIn", duration: 0.3 }}
        className="poppins font-light md:text-[16px] text-[13px]"
      >
        UNIVERSAL BARAKA aspires to become an acknowledged leader in the fields
        of general contracting, construction management, the provision of
        engineering services, and trading in the eastern province of Saudi
        Arabia and beyond through the diversity and excellence of our people,
        value provided to our customers and our commitment to continuous
        improvement and development. with the slogan of Strength Focus to
        Deliver
      </motion.p>
    ) : (
      <motion.p
        key="missionDesc"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeIn", duration: 0.3 }}
        className="poppins font-light md:text-[16px] text-[13px] absolute top-0"
      >
        UNIVERSAL BARAKA aspires to become an acknowledged leader in the fields
        of general contracting, construction management, the provision of
        engineering services, and trading in the{" "}
        <span className="text-[#FF6A39]">
          eastern province of Saudi Arabia and beyond through the diversity and
          excellence of our people,
        </span>{" "}
        value provided to our customers and our commitment to continuous
        improvement and development. with the slogan of Strength Focus to
        Deliver
      </motion.p>
    )}
  </AnimatePresence>
);

function Third() {
  const [turn, setTurn] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".third",
        start: "80px top",
        end: "300px top",
        scrub: 1,
        ease: "power4.inOut",
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          setTurn(self.progress >= 0.3);
        },
      },
    });

    tl.to(".progress", {
      scrollTrigger: {
        trigger: ".third",
        start: "top top",
        end: "300px top",
        ease: "power4.inOut",
        scrub: 1,
      },
      height: "75%",
    });

    tl.to(".vision", {
      scrollTrigger: {
        trigger: ".third",
        start: "top top",
        end: "250px top",
        ease: "power4.inOut",
        scrub: 1,
      },
      left: "70%",
      width: "30%",
      bottom: "-48%",
      height: "52%",
    });

    tl.to(".mission", {
      scrollTrigger: {
        trigger: ".third",
        start: "top top",
        ease: "power4.inOut",
        end: "250px top",
        scrub: 1,
      },
      width: "70%",
      height: "100%",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="third relative w-screen h-[115vh] pr-[8.8vw] pt-[15vh] rounded-tl-4xl rounded-br-4xl  bg-[#1c1c1c] flex flex-row justify-center items-center will-change-transform">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={opacityVariant2}
        className="w-[9vw] h-full flex items-center justify-center"
      >
        <div className="w-[13%] relative md:h-[15vh] outline outline-[#f2f2f2] rounded-2xl">
          <motion.div
            className="progress absolute w-1 bg-[#f2f2f2] rounded-2xl blur-[2px] left-1/2 -translate-x-[70%] top-3"
            style={{ height: "0%" }}
          ></motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={opacityVariant2}
        className="w-[40vw] h-full flex flex-col px-5 justify-center gap-6 text-[#f2f2f2] pb-10"
      >
        <p className="inter text-[1.3vw] italic font-semibold text-[#FF6A39]">
          Universal Baraka
        </p>
        <div className="relative h-[25vh] montserrat">
          <Heading turn={turn} />
        </div>
        <div className="relative h-[35vh] overflow-visible">
          <Description turn={turn} />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={opacityVariant2}
        className="w-[45vw] h-[90%] relative flex flex-col overflow-hidden justify-center"
      >
        <div className="w-full h-[40%]">
          <img
            className="vision h-full w-[70%] relative left-[30%]"
            src="/mission.png"
            alt="Vision representation"
          />
        </div>
        <div className="w-full h-[40%]">
          <img
            className="mission h-[70%] w-[30%] relative right-0"
            src="/vision.png"
            alt="Mission representation"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Third;
