import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>("");

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === "/dashboard") {
      setActivePage("dashboard");
    } else if (pathname === "/employee") {
      setActivePage("employee");
    } else if (pathname === "/history") {
      setActivePage("history");
    } else if (pathname === "/key-result") {
      setActivePage("key-result");
    } else if (pathname === "/about") {
      setActivePage("about");
    }
  });

  return (
    <div className="flex flex-col justify-between w-[20vw] bg-white rounded-lg  h-[68vh] ">
      <ul className="p-6 leading-[50px] ">
        <a href="">
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
        <a href="">
          <li
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "employee" ? "bg-primary text-white" : "text-black"
            }`}
          >
            <i className="fa-solid fa-user w-7"></i> Employee
          </li>
        </a>
        <a href="">
          <li
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "history" ? "bg-primary text-white" : "text-black"
            }`}
          >
            <i className="fa-solid fa-timeline w-7"></i> History
          </li>
        </a>
        <a href="">
          <li
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "key-result"
                ? "bg-primary text-white"
                : "text-black"
            }`}
          >
            <i className="fa-solid fa-square-poll-vertical w-7"></i> Result Key
          </li>
        </a>
        <a href="">
          <li
            className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
              activePage === "about" ? "bg-primary text-white" : "text-black"
            }`}
          >
            <i className="fa-solid fa-circle-info w-7"></i> About
          </li>
        </a>
      </ul>
      {activePage === "dashboard" ? (
        ""
      ) : (
        <ul className="p-6 leading-[50px]">
          <a href="">
            <li
              className={`px-4 mb-2 rounded-md transition ease-in-out duration-400 hover:bg-primary hover:text-white ${
                activePage === "about" ? "bg-primary text-white" : "text-black"
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
