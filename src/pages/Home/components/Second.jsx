import React from "react";
import { motion } from "motion/react";
import { leftVariant, rightVariant, buttonVariant } from "../../../assets/animation";

function Second() {
  return (
    <div className="h-[120vh] relative bg-[#f2f2f2] w-screen px-[7.8vw] pt-[100px] pb-[150px] flex flex-row justify-center">
      <motion.div
        className="left relative w-1/2 flex flex-col justify-between text-[#2c2c2c]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={leftVariant}
      >
        <div className="w-full flex flex-col gap-[0.4vw] leading-none">
          <p className="text-[1.3vw] inter font-medium italic text-[#FF6A39]">
            About Us
          </p>
          <h3 className="text-[6vw] tracking-tighter font-semibold montserrat">
            What We Do
          </h3>
        </div>
        <div className="space-y-4">
          <p className="poppins font-light">
            UNIVERSAL BARAKA aspires to become an acknowledged leader in the
            fields of general contracting, construction management, the provision
            of engineering services, and trading in the eastern province of Saudi
            Arabia and beyond through the diversity and excellence of our people,
            value provided to our customers and our commitment to continuous
            improvement and development. with the slogan of Strength Focus to
            Deliver
          </p>
          <p className="poppins font-light">
            UNIVERSAL BARAKA aspires to become an acknowledged leader in the
            fields of general contracting, construction management, the provision
            of engineering services, and trading in the eastern province of Saudi
            Arabia and beyond through the diversity and excellence of our people,
            value provided to our customers and our commitment to continuous
            improvement and development. with the slogan of Strength Focus to
            Deliver
          </p>
        </div>
        <motion.div
          className="bg-[#d9d9d9] -left-2 -bottom-[70px] absolute text-[#000] w-[195px] h-[45px] border border-[#f2f2f2] rounded-3xl flex flex-center justify-center gap-5 items-center monsterrat"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={buttonVariant}
        >
          <p className="text-[16px] font-medium">More About Us</p>
          <img src="arrowlft.png" alt="Arrow left" />
        </motion.div>
      </motion.div>

      <motion.div
        className="right w-1/2 flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={rightVariant}
      >
        <img src="/about.png" alt="About Us" />
      </motion.div>
    </div>
  );
}

export default Second;
