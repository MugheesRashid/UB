import React from "react";
import { motion } from "motion/react";

function Third() {
  return (
    <div className="w-screen border-b border-[#2c2c2c] h-[90vh] px-[4.5vw] py-[5vh] bg-[#f2f2f2] text-[#222] flex flex-col justify-center items-center gap-[2vh]">
      <h3 className="font-semibold text-[6vw] w-[90%] leading-none tracking-tighter montserrat">
        WE ARE EMPOWERED WITH
      </h3>
      <div className="w-full h-[75%] flex flex-row justify-around items-center">
        <div className="left flex montaga justify-center flex-col items-start">
          <p className="text-[11vw] leading-none">35+</p>
          <p className="text-[2vw]">EMPLOYS</p>
        </div>
        <div className="left flex montaga justify-center flex-col items-start">
          <p className="text-[11vw] leading-none">20+</p>
          <p className="text-[2vw]">PROJECTS</p>
        </div>
      </div>
      <motion.div className="bg-[#d9d9d9] text-[#000] w-[195px] h-[60px] border border-[#f2f2f2] rounded-3xl flex flex-center justify-center gap-5 items-center monsterrat">
        <p className="text-[16px] font-medium">More About Us</p>
        <img src="arrowlft.png" alt="Arrow left" />
      </motion.div>
    </div>
  );
}

export default Third;
