import { AnimatePresence } from "framer-motion";
import React, { FC } from "react";
import {motion} from 'framer-motion'
import { useSelector } from "react-redux";

interface PopupProps {
  isOpen: boolean;
  onClose?: React.MouseEventHandler;
  children?: React.ReactNode;
}

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const content = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    y: 0,
    opacity: 1,
    originY: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const Popup: FC<PopupProps> = ({ isOpen, onClose, children }) => {

  const mode = useSelector((state: any) => state.mode.mode);

  const preference = {
    popupOverlay: isOpen
      ? "fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      : "hidden",
    popupContent: isOpen
      ? `${mode === true ? 'bg-dark text-white' : 'bg-white'}  p-4 rounded-md shadow-md grid justify-items-center z-51 overflow-auto max-h-screen`
      : "hidden",
  };


  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div variants={backdrop} exit='hidden' animate='visible' initial='hidden' className={preference.popupOverlay}>
          <motion.div variants={content} className={preference.popupContent}>
            <div
              onClick={onClose}
              className="flex justify-end text-end w-full relative"
            >
              <div className="absolute top-0">
                <i className="fa-solid fa-xmark text-red-300 hover:text-red-600"></i>
              </div>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
