import React from "react";
import { motion } from "motion/react"
import { leftVariant, opacityVariant } from "../../../assets/animation";

function Sixth() {
  const client = [
    "https://universalbaraka.tech/assets/img/demos/construction-2/brands/sabic-logo.png",
    "https://universalbaraka.tech/assets/img/demos/construction-2/brands/brand-12.png",
    "https://universalbaraka.tech/assets/img/demos/construction-2/brands/saudi.png",
    "https://universalbaraka.tech/assets/img/demos/construction-2/brands/brand-13.gif",
    "https://universalbaraka.tech/assets/img/demos/construction-2/brands/tasnee.png",
    "https://universalbaraka.tech/assets/img/demos/construction-2/brands/brand-4.jpg",
    "https://universalbaraka.tech/assets/img/demos/construction-2/brands/sabic-logo.png",
    "https://universalbaraka.tech/assets/img/demos/construction-2/brands/brand-12.png",
    "https://universalbaraka.tech/assets/img/demos/construction-2/brands/saudi.png",
    "https://universalbaraka.tech/assets/img/demos/construction-2/brands/brand-13.gif",
    "https://universalbaraka.tech/assets/img/demos/construction-2/brands/tasnee.png",
    "https://universalbaraka.tech/assets/img/demos/construction-2/brands/brand-4.jpg",
  ];

  const modelSlider = client.map((elem, idx) => (
    <div
      key={idx}
      style={{ "--position": idx, "--width": "120px", "--bg": `url(${elem})`, mixBlendMode: "multiply" }}
      className={`item bg-center bg-contain bg-no-repeat mix-blend-multiply`}
    ></div>
  ));

  return (
    <div className="w-screen py-[50px] h-[65vh] bg-[#f2f2f2] px-[4.5vw] text-[#222] flex flex-col justify-between">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={leftVariant}
        className="w-full flex flex-col gap-[0.4vw] leading-none"
      >
        <h3 className="text-[6vw] tracking-tighter font-semibold montserrat">
          Our Clients
        </h3>
        <p className="text-[1.2vw] leading-snug w-1/2 poppins font-light">
          UNIVERSAL BARAKA aspires to become an acknowledged leader in the
          fields of general contracting, construction management.
        </p>
      </motion.div>
      <motion.div
        variants={opacityVariant}
        initial="hidden"
        whileInView="visible"
        style={{ "--width": "150px" }}
        className="w-full slider h-[40vh] flex items-center "
      >
        <div className="list w-full h-1/3 flex flex-row gap-5 items-center">
          {modelSlider}
        </div>
      </motion.div>
    </div>
  );
}

export default Sixth;
