import { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Input from "../../../component/Input";
import Popup from "../../../component/Popup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../../features/modeSlice";
import axios from "axios";
import Cookie from "js-cookie";

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

const HistoryTimeOff = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [popupDetail, setPopupDetail] = useState<boolean>(false);
  const navigate = useNavigate();
  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  const [data, setData] = useState<any>([]);

  const token = Cookie.get("token");

  const handleNext = () => {
    navigate("/history/attendence");
  };

  const handleDetail = () => {
    setPopupDetail(!popupDetail);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const CustomDatePickerInput = ({ value, onClick }: any) => (
    <div className="relative">
      <input
        type="text"
        value={value}
        onClick={onClick}
        readOnly={true}
        className="pl-10 pr-4 py-2 w-full border rounded-lg cursor-pointer"
        placeholder="Select a date"
      />
      <div className="absolute top-0 left-0 h-full flex items-center pl-3">
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="text-gray-400 cursor-pointer"
          onClick={onClick}
        />
      </div>
    </div>
  );

  const getData = () => {
    axios
      .get("https://node.backendlagi.online/leave/alluser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <div className="hidden md:flex">
          <Sidebar height="h-[80vh]" />
        </div>
        <motion.div
          variants={animation}
          initial="hidden"
          animate="visible"
          className="w-[80vw] flex flex-col"
        >
          <motion.div
            variants={childAnimation}
            className="flex flex-row justify-between mr-10"
          >
            <div className="flex flex-row ml-8 md:mx-10 mb-5  place-items-center">
              <div className="w-12 h-12 rounded-full bg-white mr-4 flex place-items-center">
                <img
                  src="../../../public/logo.png"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-[18px] font-semibold">Denson Patibang</div>
                <div className="text-[12px]">Leader : Teknis IT</div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={childAnimation}>
            <div className="flex flex-row mx-10 ">
              <a
                href="/history/attendence"
                className="text-gray-500 hover:text-gray-500"
              >
                <div className="hidden md:block bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                  Attendance
                </div>
              </a>
              <a
                href="/history/timeoff"
                className="text-gray-500 hover:text-gray-500 flex flex-rows"
              >
                <div className="bg-white px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                  Time Off
                </div>
                <div className=" md:hidden">
                  <Button
                    label="Next"
                    classname={`${
                      mode === true ? "bg-dark-button" : "bg-gray-300"
                    } text-white px-2 md:px-10`}
                    onClick={handleNext}
                  />
                </div>
              </a>
              <a
                href="/history/reimbursement"
                className="text-gray-500 hover:text-gray-500"
              >
                <div className="hidden md:block bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                  Reimbursement
                </div>
              </a>
            </div>
            <div className="bg-white mx-10 p-6 rounded-lg">
              <div className="flex flex-col text-end">
                <div>
                  <div className="mb-4">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      customInput={<CustomDatePickerInput />}
                    />
                  </div>
                </div>

                <div>
                  <div className="overflow-x-auto mt-4">
                    <table className="table">
                      <thead className="bg-primary text-white border-none">
                        <tr className="border-none">
                          <th className="rounded-l-md">User</th>
                          <th>Created At</th>
                          <th>Policy Code</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Notes</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody className="border-none">
                        {data.map((user, index) =>
                          user.leaves.map((leave, leaveIndex) => (
                            <tr key={leave._id} className="border-none">
                              <td>{user.user_id}</td>
                              <td>{leave.updated_at}</td>
                              <td>{leave.policy_code}</td>
                              <td>{leave.start_date}</td>
                              <td>{leave.end_date}</td>
                              <td>
                                <button
                                  onClick={() => handleDetail(leave)}
                                  className="hover:outline-none hover:border-white"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </button>
                              </td>
                              <td>
                                {leave.lead_approval === true && leave.hr_approval === true ? "Approved" : "Pending"}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-row justify-center gap-2 mt-5 md:justify-end">
                    <div>
                      <Button
                        label="Previous"
                        classname="bg-primary text-white px-10"
                      />
                    </div>
                    <div>
                      <Button
                        label="Next"
                        classname="bg-primary text-white px-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Popup
                  isOpen={popupDetail}
                  onClose={() => setPopupDetail(false)}
                >
                  <div className="flex flex-col px-7 py-5">
                    <div className="text-center text-[24px] font-semibold">
                      Notes
                    </div>
                    <div className="mt-4 leading-7">
                      <div className="">
                        <Input placeholder="Text Here .." />
                      </div>
                    </div>
                  </div>
                </Popup>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryTimeOff;
