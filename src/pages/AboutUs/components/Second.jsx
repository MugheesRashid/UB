import React from "react";
import { motion } from "motion/react";
import { leftVariant, rightVariant, opacityVariant2 } from "../../../assets/animation";

function Second() {
  return (
    <div className="w-screen h-[140vh] rounded-tl-4xl rounded-br-4xl bg-[#222] px-[4.5vw] mb-[5vh] py-[15vh] text-[#f2f2f2]">
      <div className="top h-1/2 w-full flex flex-col justify-center gap-[2vh]">
        <motion.h2 variants={opacityVariant2} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} className="montserrat text-[4.6vw] font-semibold">Our Mission</motion.h2>
        <div className="w-full h-full flex flex-row justify-center items-center">
          <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} className="w-1/2 h-full bg-[url('/mission2.png')] bg-center bg-no-repeat bg-cover" />
          <motion.p variants={rightVariant} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} className="w-1/2 text-[1vw] poppins font-light px-[5vw]">
            UNIVERSAL BARAKA aspires to become an acknowledged leader in the
            fields of general contracting, construction management, the
            provision of engineering services, and trading in the eastern
            province of Saudi Arabia and beyond through the diversity and
            excellence of our people, value provided to our customers and our
            commitment to continuous improvement and development. with the
            slogan of Strength Focus to Deliver
          </motion.p>
        </div>
      </div>
      <div className="bottom h-1/2 w-full gap-[2vh] flex flex-col justify-center items-end">
        <motion.h2 variants={opacityVariant2} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} className="montserrat text-[4.6vw] font-semibold">Our Vision</motion.h2>
        <div className="w-full h-full flex flex-row-reverse justify-center items-center">
          <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} className="w-1/2 h-full bg-[url('/vision2.png')] bg-center bg-no-repeat bg-cover" />
          <motion.p variants={leftVariant} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} className="w-1/2 text-[1vw] tracking-wide poppins font-light px-[5vw]">
            UNIVERSAL BARAKA aspires to become an acknowledged leader in the
            fields of general contracting, construction management, the
            provision of engineering services, and trading in the eastern
            province of Saudi Arabia and beyond through the diversity and
            excellence of our people, value provided to our customers and our
            commitment to continuous improvement and development. with the
            slogan of Strength Focus to Deliver
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Second;
