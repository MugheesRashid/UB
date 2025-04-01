import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ScrollTrigger } from "gsap/all";
import { leftVariant, opacityVariant2, buttonVariant } from "../../../assets/animation"

const services = [
  {
    id: 1,
    title: "Mechanical Services",
    description:
      "UNIVERSAL BARAKA is able to provide the complete solution like Installation, Calibration, Maintenance, Troubleshooting and commissioning of any industrial Instrumentation system.",
  },
  {
    id: 2,
    title: "Instrumental Services",
    description:
      "UNIVERSAL BARAKA is able to provide the complete solution like Installation, Calibration, Maintenance, Troubleshooting and commissioning of any industrial Instrumentation system.",
  },
  {
    id: 3,
    title: "Civil Work Services",
    description:
      "UNIVERSAL BARAKA is able to provide the complete solution like Installation, Calibration, Maintenance, Troubleshooting and commissioning of any industrial Instrumentation system.",
  },
  {
    id: 4,
    title: "IT Services",
    description:
      "UNIVERSAL BARAKA is able to provide the complete solution like Installation, Calibration, Maintenance, Troubleshooting and commissioning of any industrial Instrumentation system.",
  },
];

function Fourth() {
  useEffect(() => {
    const canvaPin = ScrollTrigger.create({
      trigger: ".serviceWrapper",
      start: "-200px top",
      end: "bottom bottom",
      pin: ".canva",
      anticipatePin: 1
    });

    return () => canvaPin.kill();
  });
  return (
    <div className="w-screen h-auto  mt-[300px] px-[7.8vw] py-[100px] bg-[#f2f2f2]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={leftVariant}
        className="w-full flex flex-col gap-[0.4vw] leading-none text-[#2c2c2c]"
      >
        <p className="text-[1.3vw] inter font-medium italic text-[#FF6A39]">
          Our Services
        </p>
        <h3 className="text-[6vw] tracking-tighter font-semibold montserrat">
          What We Do
        </h3>
        <p className="text-[1.2vw] leading-snug w-2/3 poppins font-light text-[#2c2c2c]">
          UNIVERSAL BARAKA aspires to become an acknowledged leader in the
          fields of general contracting, construction management, the provision
          of engineering services, and trading in the eastern province of Saudi
          Arabia
        </p>
      </motion.div>
      <div className="serviceWrapper w-full h-auto relative text-[#2c2c2c]">
        <img
          className="canva left-1/3 top-[3%] absolute"
          src="/canva.png"
          alt=""
        />
        {services.map((elem, idx) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={opacityVariant2}
              key={idx}
              className="w-full h-[60vh] flex flex-row items-center justify-between"
            >
              <h5 className="text-[4.3vw] w-1/3 leading-none">{elem.title}</h5>
              <p className="w-1/3 poppin font-normal text-[1.2vw] leading-tight">
                {elem.description}
                <span className="block text-[#FF6A39] font-semibold">
                  Read Me+
                </span>
              </p>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        variants={buttonVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#d9d9d9] text-[#000] relative left-1/2 -translate-x-1/2 w-[195px] h-[45px] border border-[#f2f2f2] rounded-3xl flex flex-center justify-center gap-5 items-center monsterrat">
        <p className="text-[16px] font-medium">More Services</p>
        <img src="arrowlft.png" alt="Arrow left" />
      </motion.div>
    </div>
  );
}

export default Fourth;
