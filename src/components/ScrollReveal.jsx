import { motion } from "framer-motion";

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  once = false,
  amount = 0.12,
  rootMargin = "0px 0px -50px 0px",
  stiffness = 70,
  damping = 15,
  mass = 0.8,
  spring = true,
  style = {},
}) => {
  const getVariants = () => {
    const hidden = {
      opacity: 0,
      filter: "blur(6px)",
    };

    const visible = {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    };

    const exit = {
      opacity: 0,
      filter: "blur(4px)",
    };

    switch (direction) {
      case "up":
        hidden.y = 40;
        exit.y = -20;
        break;
      case "down":
        hidden.y = -40;
        exit.y = 20;
        break;
      case "left":
        hidden.x = -45;
        exit.x = -20;
        break;
      case "right":
        hidden.x = 45;
        exit.x = 20;
        break;
      case "scale":
        hidden.scale = 0.92;
        hidden.y = 20;
        exit.scale = 0.96;
        exit.y = -10;
        break;
      case "none":
      default:
        break;
    }

    return { hidden, visible, exit };
  };

  const variants = getVariants();

  const transition = spring
    ? {
        type: "spring",
        stiffness,
        damping,
        mass,
        delay: delay / 1000,
      }
    : {
        duration,
        ease: [0.16, 1, 0.3, 1],
        delay: delay / 1000,
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once, amount, margin: rootMargin }}
      variants={variants}
      transition={transition}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};
