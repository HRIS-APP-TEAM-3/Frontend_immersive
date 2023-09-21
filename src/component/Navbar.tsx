import React, { FC, useState } from "react";
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

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

interface NavbarProps {
  onClick?: React.MouseEventHandler;
}

const Navbar: FC<NavbarProps> = ({ onClick }) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <motion.div
      variants={animation}
      initial="hidden"
      animate="visible"
      className={`${
        isOn === true ? "bg-[#2b2d31]" : "bg-white"
      } flex flex-row justify-between px-8 h-16 place-items-center`}
    >
      <div>
        <img src="../../public/logo.png" alt="" className="w-24" />
      </div>
      <div className="flex flex-row place-items-center">
        <span onClick={onClick}>
          <div className="switch mr-4" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </span>
        <motion.a
          animate={{ originX: 0, originY: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="/user/approval"
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
