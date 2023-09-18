import React, { useEffect, useState, FC } from "react";
import { useLocation } from "react-router-dom";

interface SidebarProps {
  height: string
}

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
      setActivePage("history-attendence");
    } else if (pathname === "/result-key") {
      setActivePage("result-key");
    } else if (pathname === "/progress") {
      setActivePage("progress");
    } else if (pathname === "/about") {
      setActivePage("about");
    }
  });

  return (
    <div className={`flex flex-col justify-between w-[20vw] bg-white rounded-lg ${height}`}>
      <ul className="p-6 leading-[50px] ">
        <a href="/dashboard">
          <li
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "dashboard"
                ? "bg-primary text-white"
                : "text-black"
            }`}
          >
            <i className="fa-solid fa-house w-7"></i> Dashboard
          </li>
        </a>
        <a href="employee">
          <li
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "employee" ? "bg-primary text-white" : "text-black"
            }`}
          >
            <i className="fa-solid fa-user w-7"></i> Employee
          </li>
        </a>
        <a href="/user">
          <li
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "user" ? "bg-primary text-white" : "text-black"
            }`}
          >
            <i className="fa-solid fa-user w-7"></i> User
          </li>
        </a>
        <a href="/history/attendence">
          <li
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "history-attendence" ? "bg-primary text-white" : "text-black"
            }`}
          >
            <i className="fa-solid fa-timeline w-7"></i> History
          </li>
        </a>
        <a href="/result-key">
          <li
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "result-key"
                ? "bg-primary text-white"
                : "text-black"
            }`}
          >
            <i className="fa-solid fa-square-poll-vertical w-7"></i> Result Key
          </li>
        </a>
        <a href="/progress">
          <li
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "progress"
                ? "bg-primary text-white"
                : "text-black"
            }`}
          >
            <i className="fa-solid fa-square-poll-vertical w-7"></i> Progress
          </li>
        </a>
        <a href="/about">
          <li
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "about" ? "bg-primary text-white" : "text-black"
            }`}
          >
            <i className="fa-solid fa-circle-info w-7"></i> About
          </li>
        </a>
      </ul>
      {activePage === "" ? (
        ""
      ) : (
        <ul className="p-6 leading-[50px]">
          <a href="">
            <li
              className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
                activePage === "" ? "bg-primary text-white" : "text-black"
              }`}
            >
              <i className="fa-solid fa-right-from-bracket mr-2 w-7"></i> Logout
            </li>
          </a>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
