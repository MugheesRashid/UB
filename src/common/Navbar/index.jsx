import React from "react";
import { AnimatePresence,motion } from "motion/react";

function Navbar({ loading }) {
  console.log(loading)
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           transition={{duration: 1.2, ease: "linear", delay: 1}}
            data-scroll
            className="w-screen h-[100px] bg-[#f2f2f2]  text-[#2c2c2c] relative top-0 left-0 flex flex-row items-center justify-between px-[4.5vw]"
          >
            <img className="h-[75%]" src="/logoub.png" alt="" />
            <div className="flex flex-row justify-center montserrat font-medium text-[16px] items-center gap-[2.5vw]">
              <p>Home</p>
              <p>About Us</p>
              <p>Services</p>
              <p>Project</p>
              <p>Portfolio</p>
            </div>
            <div className="btn w-[145px] h-[45px] inter font-medium rounded-lg bg-[#FF6A39] flex items-center justify-center text-[#f2f2f2]">
              <p className="text-[16px]">Call to Action</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
