import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loader({ setLoading }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let interval;

    const handleLoad = () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {setIsLoaded(true) ;setLoading(true)}, 500); // Smooth exit delay
            return 100;
          }
          return prev + 1;
        });
      }, 20);
    };

    if (document.readyState === "complete") {
      handleLoad();
      document.body.style.overflow = "auto";
    } else {
      window.addEventListener("load", handleLoad);
      document.body.style.overflow = "hidden";
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            className="w-screen h-screen z-50 bg-[#111] overflow-hidden fixed top-0 left-0 flex items-center justify-center"
            exit={{ height: 0 }}
            transition={{ duration: 0.2, ease: "linear", delay: 0.8 }}
          >
            <motion.div
              key="content"
              className="h-[100%] overflow-hidden w-full px-[4.5vw] z-[3] absolute top-0 flex flex-col bg-[#2c2c2c] pb-[6vh] justify-between"
              exit={{ y: "-150vh" }} // Moves up
              transition={{ duration: 0.2, ease: "linear", delay: 0.2 }}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-[15%] mt-[2vh]"
                src="/logoub.png"
                alt="Logo"
              />

              <div className="flex items-center justify-between flex-row">
                <div>
                  <motion.h1
                    className="text-[#f2f2f2] w-1/2 font-medium text-[8vw] tracking-tight montserrat leading-none"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "linear" }}
                  >
                    UNIVERSAL BARAKA
                  </motion.h1>
                  <motion.p
                    className="leading-none tracking-tight text-[2.51vw] text-[#f2f2f2] font-medium montserrat"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: 0.2,
                    }}
                  >
                    GENERAL{" "}
                    <span className="text-[#FF6A39]">CONTRACTING</span> COMPANY.
                  </motion.p>
                </div>

                {/* Animated Percentage */}
                <motion.p
                  className="nunito text-[8vw] text-[#f2f2f2]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                >
                  {progress}%
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              key="green-slide"
              className="h-full w-full absolute left-0 top-0 bg-[#FF6A39] z-[2]"
              exit={{ height: 0 }} // Moves up
              transition={{ duration: 0.2, ease: "linear", delay: 0.4 }}
            ></motion.div>

            <motion.div
              key="red-slide"
              className="h-full w-full absolute left-0 top-0 bg-[#f2f2f2] z-[1]"
              exit={{ height: 0 }} // Moves up
              transition={{ duration: 0.2, ease: "linear", delay: 0.6 }}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Loader;
