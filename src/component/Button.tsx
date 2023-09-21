import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  label?: string;
  classname?: string;
  icon?: ReactNode;
  onClick?: React.MouseEventHandler;
  type?: string;
}

const Button: FC<ButtonProps> = ({ label, classname, icon, onClick, type }) => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.02}}
        transition={{ type: "spring", stiffness: 300 , originX:0}}
        onClick={onClick}
        type={type}
        className={`${
          classname ? `${classname}` : "text-white"
        } hover:border-inherit focus:outline-inherit`}
      >
        {" "}
        <span>{icon}</span> {label}
      </motion.button>
    </div>
  );
};

export default Button;
