import { motion } from "framer-motion";
import React, { ReactChildren, ReactElement, ReactNode } from "react";

import "./Modal.scss";
import Backdrop from "../Backdrop";

interface ModalProps {
  handleClose?: () => void;
  children: ReactNode;
}

const scaleIn = {
  hidden: {
    trasnform: "scale(0.5)",
    opacity: 0,
  },
  visible: {
    trasnform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    trasnform: "scale(1.5)",
    opacity: 0,
  },
};

const Modal: React.FC<ModalProps> = ({ handleClose, children }) => {
  return (
    <Backdrop handleClose={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
