import { delay } from "motion";

const letterVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden & move up
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 1.2 + i * 0.05, ease: "easeOut" }, // Stagger effect
  }),
};

const opacityVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay: 1.3, ease: "easeOut" }, // Fade-in effect
  },
};

const opacityVariant2 = {
  hidden: { opacity: 0.1 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
};

const leftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
  },
};

export { letterVariants, opacityVariant, rightVariant, buttonVariant,leftVariant,opacityVariant2 };