import { Variants } from "framer-motion";

const slideInVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    rotateY: -15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    rotateY: 15,
    scale: 0.9,
    transition: {
      duration: 0.6,
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 0 0 rgba(80, 177, 131, 0.4)",
      "0 0 0 20px rgba(80, 177, 131, 0)",
      "0 0 0 0 rgba(80, 177, 131, 0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export { slideInVariants, floatingVariants, pulseVariants };
