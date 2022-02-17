import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import twitter from "../../assets/images/twitter.png";

const Task: React.FC = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <motion.div layout className="task_card">
      <motion.div layout className="task_card-content" onClick={() => setOpenForm((f) => !f)}>
        <div className="task_card-content_left">
          <img src={twitter} alt="social icon" />
          <div>
            <h5 className="mb-5">Twitter Follow</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet etiam ac dui
              aliquet duis viverra euismod.{" "}
            </p>
          </div>
        </div>
        <div className="task_card-content_right">
          <b>+15 boints</b>
        </div>
      </motion.div>
      <AnimatePresence>
        {openForm && (
          <motion.div layout className="p-30">
            Content
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Task;
