import styles from "./Modal.module.css";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const backDrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const Modal = ({ showModal }) => {
  return (
    showModal && (
      <motion.div
        variants={backDrop}
        initial="hidden"
        animate="visible"
        className={styles.backdrop}
      >
        <div className={styles.modal}>
          <p style={{ color: "black" }}>Want's to order new pizza</p>
          <Link to="./">
            <button>Order</button>
          </Link>
        </div>
      </motion.div>
    )
  );
};

/*
backdrop css has positioned fixed means it will be positioned based on the browser window, that's why it, positioned 
absolute also works as it's first parent is window only
*/
