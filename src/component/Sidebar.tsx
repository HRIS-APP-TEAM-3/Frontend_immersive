import React, { useEffect, useState, FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Cookie from "js-cookie";
import Button from "./Button";
import Swal from "sweetalert2";

interface SidebarProps {
  height: string;
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

const Sidebar: FC<SidebarProps> = ({ height }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState<string>("");

  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();
  const role = Cookie.get("role");

  const handleLogout = () => {
    Cookie.remove("token");

    Swal.fire({
      title: "Logout",
      text: "You have been logged out",
      icon: "success",
      timer: 1500,
    })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    <motion.div
      variants={animation}
      initial="hidden"
      animate="visible"
      className={`${
        mode === true ? "bg-[#2b2d31]" : "bg-white"
      } flex flex-col justify-between w-[20vw]  rounded-lg ${height}`}
    >
      <motion.ul variants={childAnimation} className="p-6 leading-[50px] ">
        <a href="/dashboard">
          <motion.li
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 ${
              activePage === "dashboard"
                ? `${
                    mode === true
                      ? "bg-white text-black"
                      : "bg-primary text-white"
                  }`
                : `${
                    mode === true
                      ? "text-white hover:bg-white hover:text-black"
                      : "text-black hover:bg-primary hover:text-white"
                  }`
            }`}
          >
            <i className="fa-solid fa-house w-7"></i> Dashboard
          </motion.li>
        </a>
        <a href="">
          <motion.li
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 ${
              activePage === "employee"
                ? `${
                    mode === true
                      ? "bg-white text-black"
                      : "bg-primary text-white"
                  }`
                : `${
                    mode === true
                      ? "text-white hover:bg-white hover:text-black"
                      : "text-black hover:bg-primary hover:text-white"
                  }`
            }`}
          >
            <i className="fa-solid fa-user w-7"></i> Employee
          </motion.li>
        </a>
        {role === "Employee" ? (
          ""
        ) : (
          <a href="/user">
            <motion.li
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 ${
                activePage === "user"
                  ? `${
                      mode === true
                        ? "bg-white text-black"
                        : "bg-primary text-white"
                    }`
                  : `${
                      mode === true
                        ? "text-white hover:bg-white hover:text-black"
                        : "text-black hover:bg-primary hover:text-white"
                    }`
              }`}
            >
              <i className="fa-solid fa-user w-7"></i> User
            </motion.li>
          </a>
        )}
        {role === "Employee" ? (
          ""
        ) : (
          <a href="/history/attendence">
            <motion.li
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 ${
                activePage === "history-attendace"
                  ? `${
                      mode === true
                        ? "bg-white text-black"
                        : "bg-primary text-white"
                    }`
                  : `${
                      mode === true
                        ? "text-white hover:bg-white hover:text-black"
                        : "text-black hover:bg-primary hover:text-white"
                    }`
              }`}
            >
              <i className="fa-solid fa-timeline w-7"></i> History
            </motion.li>
          </a>
        )}
        {role === "Manager" ? (
          <a href="/result-key">
            <motion.li
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 ${
                activePage === "result-key"
                  ? `${
                      mode === true
                        ? "bg-white text-black"
                        : "bg-primary text-white"
                    }`
                  : `${
                      mode === true
                        ? "text-white hover:bg-white hover:text-black"
                        : "text-black hover:bg-primary hover:text-white"
                    }`
              }`}
            >
              <i className="fa-solid fa-square-poll-vertical w-7"></i> Result
              Key
            </motion.li>
          </a>
        ) : (
          ""
        )}
        {role === "Employee" ? (
          <a href="/progress">
            <motion.li
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 ${
                activePage === "progress"
                  ? `${
                      mode === true
                        ? "bg-white text-black"
                        : "bg-primary text-white"
                    }`
                  : `${
                      mode === true
                        ? "text-white hover:bg-white hover:text-black"
                        : "text-black hover:bg-primary hover:text-white"
                    }`
              }`}
            >
              <i className="fa-solid fa-square-poll-vertical w-7"></i> Progress
            </motion.li>
          </a>
        ) : (
          ""
        )}
        <a href="/about">
          <motion.li
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 ${
              activePage === "about"
                ? `${
                    mode === true
                      ? "bg-white text-black"
                      : "bg-primary text-white"
                  }`
                : `${
                    mode === true
                      ? "text-white hover:bg-white hover:text-black"
                      : "text-black hover:bg-primary hover:text-white"
                  }`
            }`}
          >
            <i className="fa-solid fa-circle-info w-7"></i> About
          </motion.li>
        </a>
      </motion.ul>
      {activePage === "logout" ? (
        ""
      ) : (
        <motion.ul variants={childAnimation} className="p-6 leading-[50px]">
          <a onClick={() => handleLogout()}>
            <motion.li
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 ${
                activePage === "logout"
                  ? `${
                      mode === true
                        ? "bg-white text-black"
                        : "bg-primary text-white"
                    }`
                  : `${
                      mode === true
                        ? "text-white hover:bg-white hover:text-black"
                        : "text-black hover:bg-primary hover:text-white"
                    }`
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
