import React, { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import InputSearch from "../../../component/InputSearch";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../../features/modeSlice";
import Personal from "../../../component/Personal";

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

const Attendance = () => {
  const [today, setToday] = useState<string>("");
  const navigate = useNavigate();
  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  const body = document.body

  if(mode === true){
    body.style.backgroundColor = '#313338';
  } else {
    body.style.backgroundColor = '#F2F2F2';
  }

  const handleToday = () => {
    setToday(new Date().toISOString().slice(0, 10));
  };

  const handleNextClick = () => {
 
    navigate('/history/timeoff');
  };

  useEffect(() => {
    handleToday();
  });

  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="mt-10 px-10 flex flex-row">
      <div className="hidden md:flex">
          <Sidebar  height="h-[80vh]" />
        </div>
        <motion.div
          variants={animation}
          initial="hidden"
          animate="visible"
          className="w-[80vw] flex flex-col"
        >
          <motion.div variants={childAnimation}>
            <div className=" flex flex-row mx-10 ">
              <a
                href="/history/attendence"
                className="text-gray-500 hover:text-gray-500"
              >
                <div className="bg-white px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                  Attendance
                </div>
              </a>
              <div className="md:hidden">
                <Button
                  label="Next"
                  classname={`${mode === true ? 'bg-dark-button' : 'bg-gray-300'} text-white px-2 md:px-10`}
                  onClick={handleNextClick}
                />
              </div>
              <a
                href="/history/timeoff"
                className="text-gray-500 hover:text-gray-500"
              >
                <div className="hidden md:block bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                  TimeOff
                </div>
              </a>
              <a
                href="/history/reimbursement"
                className=" text-gray-500 hover:text-gray-500"
              >
                <div className="hidden md:block bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Reimbursement
                </div>

              </a>
            </div>
            <div className="bg-white mx-10 p-6 rounded-b-lg rounded-tr-lg ">
              <div className="flex flex-col">
                <div className="grid grid-cols-1 gap-4 justify-center mx-auto md:flex flex-row justify-between">
                  <div>
                    <div className="form-control w-full max-w-xs">
                      <input
                        type="date"
                        value={today}
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <InputSearch placeholder="Search" />
                  </div>
                </div>
                <div>
                  <div className="overflow-x-auto mt-4">
                    <table className="table ">
                      <thead className="bg-primary text-white border-none ">
                        <tr className="border-none ">
                          <th className="rounded-l-md">No</th>
                          <th>Name</th>
                          <th>Date</th>
                          <th>Chech In</th>
                          <th>Chech Out</th>
                          <th>Overtime</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody className="border-none">
                        <tr className="border-none">
                          <td>1</td>
                          <td>Denson Patibang</td>
                          <td>15 September</td>
                          <td>08:00</td>
                          <td>16:00</td>
                          <td>00.40</td>
                          <td>Pending</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                    <div className="flex flex-row justify-center gap-2 mt-5 md:justify-end">
                      <div>
                        <Button
                          label="Previous"
                          classname="bg-[#CACACA] text-white px-2 md:px-10"
                        />
                      </div>
                      <div>
                        <Button
                          label="Next"
                          classname="bg-primary text-white px-2 md:px-10"
                        />
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Attendance;
