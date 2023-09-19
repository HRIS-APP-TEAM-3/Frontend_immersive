import React from "react";
import InputSearch from "./InputSearch";
import { motion } from "framer-motion";

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const Navbar = () => {
  return (
    <motion.div variants={animation} initial='hidden' animate='visible' className="flex flex-row justify-between bg-white px-8 h-16 place-items-center">
      <div>
        <img src="../../public/logo.png" alt="" className="w-24" />
      </div>
      <div className="flex flex-row place-items-center">
        <motion.a
          animate={{ originX: 0, originY: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="#"
        >
          <div className="mr-4">
            <i className="fa-solid fa-envelope text-[#BDBDBD] text-xl hover:text-[#A2A2A2]"></i>
          </div>
        </motion.a>
        <motion.span
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <InputSearch placeholder="Search Employee" />
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Navbar;
