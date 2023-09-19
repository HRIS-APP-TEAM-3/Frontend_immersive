import React, { useEffect, useState, FC } from "react";
import { useLocation } from "react-router-dom";
import { motion } from 'framer-motion'

interface SidebarProps {
  height: string
}

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
      staggerChildren: 0.2,
    },
  },
};

const childAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Sidebar: FC<SidebarProps> = ({height}) => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>("");

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === "/dashboard") {
      setActivePage("dashboard");
    } else if (pathname === "/user") {
      setActivePage("user");
    } else if (pathname === "/employee") {
      setActivePage("employee");
    } else if (pathname === "/history/attendence") {
      setActivePage("history-attendace");
    } else if (pathname === "/result-key") {
      setActivePage("result-key");
    } else if (pathname === "/progress") {
      setActivePage("progress");
    } else if (pathname === "/about") {
      setActivePage("about");
    }
  });

  return (
    <motion.div variants={animation} initial='hidden' animate='visible' className={`flex flex-col justify-between w-[20vw] bg-white rounded-lg ${height}`}>
      <motion.ul variants={childAnimation} className="p-6 leading-[50px] ">
        <a  href="/dashboard">
          <motion.li whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "dashboard"
                ? "bg-primary text-white"
                : "text-black"
            }`}
          >
            <i className="fa-solid fa-house w-7"></i> Dashboard
          </motion.li>
        </a>
        <a href="">
          <motion.li whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "employee" ? "bg-primary text-white" : "text-black"
            }`}
          >
            <i className="fa-solid fa-user w-7"></i> Employee
          </motion.li>
        </a>
        <a  href="/user">
          <motion.li whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "user" ? "bg-primary text-white" : "text-black"
            }`}
          >
            <i className="fa-solid fa-user w-7"></i> User
          </motion.li>
        </a>
        <a href="/history/attendence">
          <motion.li whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "history-attendace" ? "bg-primary text-white" : "text-black"
            }`}
          >
            <i className="fa-solid fa-timeline w-7"></i> History
          </motion.li>
        </a>
        <a href="/result-key">
          <motion.li whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "result-key"
                ? "bg-primary text-white"
                : "text-black"
            }`}
          >
            <i className="fa-solid fa-square-poll-vertical w-7"></i> Result Key
          </motion.li>
        </a>
        <a href="/progress">
          <motion.li whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "progress"
                ? "bg-primary text-white"
                : "text-black"
            }`}
          >
            <i className="fa-solid fa-square-poll-vertical w-7"></i> Progress
          </motion.li>
        </a>
        <a href="/about">
          <motion.li whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "about" ? "bg-primary text-white" : "text-black"
            }`}
          >
            <i className="fa-solid fa-circle-info w-7"></i> About
          </motion.li>
        </a>
      </motion.ul>
      {activePage === "dashboard" ? (
        ""
      ) : (
        <motion.ul variants={childAnimation} className="p-6 leading-[50px]">
          <a href="">
            <motion.li whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
                activePage === "logout" ? "bg-primary text-white" : "text-black"
              }`}
            >
              <i className="fa-solid fa-right-from-bracket mr-2 w-7"></i> Logout
            </motion.li>
          </a>
        </motion.ul>
      )}
    </motion.div>
  );
};

export default Sidebar;