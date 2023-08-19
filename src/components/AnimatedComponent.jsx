import { motion, useReducedMotion } from "framer-motion";

const AnimatedComponent = ({ tag, variants, ...otherProps }) => {
  const MotionTag = motion[tag];
  const prefersReducedMotion = useReducedMotion();

  const shouldAnimate = prefersReducedMotion ? "visible" : variants;

  return (
    <MotionTag
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "crossfade", duration: 1.5 }}
      variants={shouldAnimate}
      {...otherProps}></MotionTag>
  );
};

export default AnimatedComponent;
