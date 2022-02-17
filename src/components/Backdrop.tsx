import React, { ReactElement } from "react";
import { motion } from "framer-motion";

const Backdrop: React.FC<{ children: ReactElement; handleClose?: () => void }> = ({
  children,
  handleClose,
}) => {
  return (
    <motion.div
      onClick={handleClose}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
