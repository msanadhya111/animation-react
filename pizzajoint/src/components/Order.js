import React from "react";
import { motion } from "framer-motion";

const variant = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      when: "beforeChildren",
      mass: 0.4, // mass and damping used to finish the oscillation stops quicker, more mass means less
      damping: 8, // oscillation less means more, more damping means more force to resist it
      staggerChildren: 0.4, // Applies to all children, means with 'when' property we can apply for only to first
    }, // children and with staggerChildren to all others
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  setTimeout(() => {
    setShowModal(true);
  }, 5000);
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <h2>Thank you for your order :</h2>
      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariant}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
