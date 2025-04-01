import React from "react";
import { motion } from "motion/react";
import {
  opacityVariant
} from "../../../assets/animation";

function First() {
  return (
    <div className="w-screen h-screen bg-[#f2f2f2] px-[8vw] text-[#2c2c2c]">
      <div className="flex flex-col justify-center items-between">
        <motion.h1
          variants={opacityVariant}
          initial="hidden"
          animate="visible"
          className="font-semibold text-[8vw] leading-none tracking-tighter montserrat"
        >
          WHO ARE WE
        </motion.h1>
        <p className="text-[#ff6a39] leading-none font-bold px-4 montserrat">
          About Us
        </p>
      </div>
      <div className="w-full flex flex-row items-center justify-center gap-[2vw]">
        <div className="w-1/2 left flex gap-[2vw] flex-col">
          <p className="flex poppins text-[1.5w] w-[85%] leading- font">
            UNIVERSAL BARAKA aspires to become an acknowledged leader in the
            fields of general contracting, construction management, the
            provision of engineering services, and trading in the eastern
            province of Saudi Arabia and beyond through the diversity and
            excellence of our people, value provided to our customers and our
            commitment to continuous improvement and development. with the
            slogan of Strength Focus to Deliver
          </p>
          <motion.div className="bg-[#d9d9d9] -left-2 -bottom-[70px] text-[#000] w-[195px] h-[45px] border border-[#f2f2f2] rounded-3xl flex flex-center justify-center gap-5 items-center monsterrat">
            <p className="text-[16px] font-medium">More About Us</p>
            <img src="arrowlft.png" alt="Arrow left" />
          </motion.div>
        </div>
        <div className="right w-1/2">
          <img className="w-full" src="/about.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default First;
