import React from "react";
import "./style.css";
import { motion } from "motion/react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: "tween",
  duration: 0.5,
};

function Home({ loading }) {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <First loading={loading} />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
      </motion.div>
    </>
  );
}

export default Home;
