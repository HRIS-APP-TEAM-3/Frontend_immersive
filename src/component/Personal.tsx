import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const childAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Personal = () => {
  const mode = useSelector((state: any) => state.mode.mode);

  return (
    <motion.div
      variants={childAnimation}
      className="flex flex-row justify-between mr-10"
    >
      <div className="mx-10 mb-5 flex flex-row place-items-center">
        <div
          className={`${
            mode === true ? "bg-dark" : "bg-white"
          } w-12 h-12 rounded-full mr-4 flex place-items-center`}
        >
          <img src="../../../public/logo.png" alt="" className="object-cover" />
        </div>
        <div className={`flex flex-col ${mode === true ? "text-white" : ""}`}>
          <div className="text-[18px] font-semibold">Denson Patibang</div>
          <div className="text-[12px]">Leader : Teknis IT</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Personal;
