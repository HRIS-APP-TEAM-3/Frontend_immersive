import { useState } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import Popup from "../../../component/Popup";
import { motion } from "framer-motion";
import TopCard from "../../../component/TopCard";
import Personal from "../../../component/Personal";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../../features/modeSlice";

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

const TimeOff = () => {
  const [Attandence, setAddAttandence] = useState<boolean>(false);
  const [popupDetail, setPopupDetail] = useState<boolean>(false);
  const [timeOutType, setTimeOutType] = useState("");

  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  const handleAdd = () => {
    setAddAttandence(!Attandence);
  };

  const handleDetail = () => {
    setPopupDetail(!popupDetail);
  };

  const handleTimeOutChange = (e: any) => {
    const selectedType = e.target.value;
    setTimeOutType(selectedType);
  };

  const body = document.body

  if(mode === true){
    body.style.backgroundColor = '#313338';
  } else {
    body.style.backgroundColor = '#F2F2F2';
  }

  return (
    <section>
      <div>
        <Navbar onClick={() => dispatch(toggleMode())}/>
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <Sidebar height="h-[80vh]" />
        <motion.div
          variants={animation}
          initial="hidden"
          animate="visible"
          className="w-[80vw] flex flex-col"
        >
          <Personal/>
          <motion.div variants={childAnimation}>
            <TopCard/>
            <div className={`${mode === true ? 'bg-dark hover:bg-dark text-white' : 'bg-white hover:bg-white'} mx-10 p-6 rounded-b-lg rounded-tr-lg`} >
              <div className="flex flex-col">
                <div className="text-end">
                  <Button
                    label="Request Timeoff"
                    classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white`}
                    onClick={() => handleAdd()}
                  />
                </div>
                <div>
                  <div className="overflow-x-auto mt-4">
                    <table className="table">
                      <thead className={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white border-none`}>
                        <tr className="border-none">
                          <th className="rounded-l-md">No</th>
                          <th>Created At</th>
                          <th>Policy Code</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Notes</th>
                          <th>Status</th>
                          <th className="rounded-r-md">Action</th>
                        </tr>
                      </thead>
                      <tbody className="border-none">
                        <tr className="border-none">
                          <td>1</td>
                          <td>15 September</td>
                          <td>CT</td>
                          <td>08:00</td>
                          <td>16:00</td>
                          <td>
                            <button
                              onClick={() => handleDetail()}
                              className="hover:outline-none hover:border-white"
                            >
                              <i className="fa-solid fa-eye"></i>
                            </button>
                          </td>
                          <td>Pending</td>
                          <td>
                            <div className="flex flex-row gap-2">
                              <div>
                                <a href="" className={mode === true ? 'text-white hover:text-white' : 'text-black'}>
                                  <i className="fa-regular fa-pen-to-square"></i>
                                </a>
                              </div>
                              <div>
                                <a href="" className={mode === true ? 'text-white hover:text-white' : 'text-black'}>
                                  <i className="fa-solid fa-trash"></i>
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex flex-row justify-end gap-2 mt-5">
                      <div>
                        <Button
                          label="Previous"
                          classname={`${mode === true ? 'bg-dark-button' : 'bg-[#CACACA]'} text-white px-10`}
                        />
                      </div>
                      <div>
                        <Button
                          label="Next"
                          classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white px-10`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div>
            <Popup isOpen={Attandence} onClose={() => setAddAttandence(false)}>
              <div className="flex flex-col px-7 py-5">
                <div className="text-center text-[24px] font-semibold">
                  Attandence
                </div>
                <div className="flex flex-row gap-5 mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs ">
                      <label className="label">
                        <span className="label-text">Choose Time Out</span>
                      </label>
                      <select
                        className="select select-bordered bg-transparent"
                        onChange={handleTimeOutChange}
                        value={timeOutType}
                      >
                        <option disabled value="">
                          Pick one
                        </option>
                        <option value="Cuti Tahunan">Cuti Tahunan</option>
                        <option value="Emergency">Emergency</option>
                      </select>
                    </div>
                  </div>
                </div>
                {timeOutType === "Cuti Tahunan" && (
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Sisa Cuti</span>
                      </label>
                      <input
                        type="text"
                        placeholder="12 Hari"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                    </div>
                  </div>
                )}
                <div className="flex flex-row gap-5 mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Start Date</span>
                      </label>
                      <input
                        type="date"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">End Date</span>
                      </label>
                      <input
                        type="date"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    label="Next"
                    classname="bg-primary text-white w-full"
                  />
                </div>
              </div>
            </Popup>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimeOff;
