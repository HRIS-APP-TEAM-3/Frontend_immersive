import React, { FC } from "react";
import {motion} from 'framer-motion'

interface InputSearchProps {
  placeholder: string;
}

const InputSearch: FC<InputSearchProps> = ({ placeholder }) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }} className="border-solid border-[1px] border-outline px-5 py-2 rounded-2xl w-60">
      <i className="fa-solid fa-magnifying-glass text-[#BDBDBD] mr-2 text-[14px]"></i>
      <input
        type="text"
        placeholder={placeholder}
        className="focus:outline-none text-[13px] bg-transparent"
      />
    </motion.div>
  );
};

export default InputSearch;
