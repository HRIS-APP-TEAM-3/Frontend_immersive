import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const TopCard = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState<string>("");

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === "/personaldata") {
      setActivePage("personaldata");
    } else if (pathname === "/attandence") {
      setActivePage("attandence");
    } else if (pathname === "/timeoff") {
      setActivePage("timeoff");
    } else if (pathname === "/reimbursement") {
      setActivePage("reimbursement");
    } else if (pathname === "/reimbursement-taken") {
      setActivePage("reimbursement");
    } 
  });

  const mode = useSelector((state: any) => state.mode.mode);
  return (
    <div className="flex flex-row mx-10 ">
      <a href="/personaldata" className="text-gray-500 hover:text-gray-500">
        <div
          className={`${
            mode === true
              ? `${activePage === 'personaldata' ? 'bg-dark' : 'bg-[#46474c]'} hover:bg-dark text-white`
              : `${activePage === 'personaldata' ? 'bg-white' : 'bg-[#E3E3E3]'} hover:bg-white`
          } px-12 py-3 rounded-t-lg  transition-colors ease-in-out`}
        >
          Personal Data
        </div>
      </a>
      <a href="/attandence" className="text-gray-500 hover:text-gray-500">
        <div
          className={`${
            mode === true
              ? `${activePage === 'attandence' ? 'bg-dark' : 'bg-[#46474c]'} hover:bg-dark text-white`
              : `${activePage === 'attandence' ? 'bg-white' : 'bg-[#E3E3E3]'} hover:bg-white`
          } px-12 py-3 rounded-t-lg  transition-colors ease-in-out`}
        >
          Attendance
        </div>
      </a>
      <a href="/timeoff" className="text-gray-500 hover:text-gray-500">
        <div
          className={`${
            mode === true
              ? `${activePage === 'timeoff' ? 'bg-dark' : 'bg-[#46474c]'} hover:bg-dark text-white`
              : `${activePage === 'timeoff' ? 'bg-white' : 'bg-[#E3E3E3]'} hover:bg-white`
          } px-12 py-3 rounded-t-lg  transition-colors ease-in-out`}
        >
          Time Off
        </div>
      </a>
      <a href="/reimbursement" className="text-gray-500 hover:text-gray-500">
        <div
          className={`${
            mode === true
              ? `${activePage === 'reimbursement' ? 'bg-dark' : 'bg-[#46474c]'} hover:bg-dark text-white`
              : `${activePage === 'reimbursement' ? 'bg-white' : 'bg-[#E3E3E3]'} hover:bg-white`
          } px-12 py-3 rounded-t-lg  transition-colors ease-in-out`}
        >
          Reimbursement
        </div>
      </a>
    </div>
  );
};

export default TopCard;
