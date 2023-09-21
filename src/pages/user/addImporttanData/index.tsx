import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import { motion } from "framer-motion";
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

const AddImportantData = () => {
  const navigate = useNavigate();
  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  //Data
  const [npwp, setNpwp] = useState<number>('');
  const [emergencyName, setEmergencyName] = useState<string>("");
  const [emergencyStatus, setEmergencyStatus] = useState<string>("");
  const [emergencyContact, setEmergencyContact] = useState<number>(0);
  const [bpjs, setBpjs] = useState<number>();

  const body = document.body;

  if (mode === true) {
    body.style.backgroundColor = "#313338";
  } else {
    body.style.backgroundColor = "#F2F2F2";
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formDataPersonal = new FormData();
    formDataPersonal.append('npwp', npwp);
    formDataPersonal.append('emergencyName', emergencyName);
    formDataPersonal.append('emergencyStatus', emergencyStatus);
    formDataPersonal.append('emergencyContact', emergencyContact);
    formDataPersonal.append('bpjs', bpjs);

    const formDataString = JSON.stringify(Object.fromEntries(formDataPersonal.entries()));
    
    localStorage.setItem('formDataImportant', formDataString);

    navigate("/user/addeducation");
  }

  return (
    <section>
      <div>
        <Navbar onClick={() => dispatch(toggleMode())} />
      </div>
      <motion.div
        variants={animation}
        initial="hidden"
        animate="visible"
        className="mt-10 px-10 flex flex-row"
      >
        <Sidebar height="h-[80vh]" />
        <motion.div
          variants={childAnimation}
          className="w-[80vw] flex flex-col"
        >
          <div
            className={`${
              mode === true
                ? "bg-dark hover:bg-dark text-white"
                : "bg-white hover:bg-white"
            } mx-10 p-6 rounded-b-lg rounded-tr-lg`}
          >
            <div className="flex justify-center">
              <div className="hidden md:flex flex-col justify-center">
                <div className="flex justify-between items-center mt-5 max-w-xs">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1 h-0.5 bg-blue-500"></div>
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-500"></div>
                  <div className="w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex gap-5">
                    <div className="form-section">
                      <h2 className="text-base">Personal Data</h2>
                    </div>
                    <div className="form-section">
                      <h2 className="text-base">Important Data</h2>
                    </div>
                    <div className="form-section">
                      <h2 className="text-base">Education Data</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-4">Important data</h1>
                <form onSubmit={handleSubmit}>
                  <div className="w-full mt-3">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">NPWP</span>
                      </label>
                      <input
                        type="text"
                        placeholder="NPWP"
                        className="input input-bordered w-full max-w-3xl bg-transparent"
                        value={npwp}
                        onChange={(e) => setNpwp(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 mt-3">
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text"> Contact Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Contact Name"
                          className="input input-bordered w-full max-w-xs bg-transparent"
                          value={emergencyName}
                          onChange={(e) => setEmergencyName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Family Relation</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Family Relation"
                          className="input input-bordered w-full max-w-xs bg-transparent"
                          value={emergencyStatus}
                          onChange={(e) => setEmergencyStatus(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Emergency Contact</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Emergency Contact"
                        className="input input-bordered w-full max-w-3xl bg-transparent"
                        value={emergencyContact}
                        onChange={(e) => setEmergencyContact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full mt-3">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">BPJS</span>
                      </label>
                      <input
                        type="text"
                        placeholder="BPJS"
                        className="input input-bordered w-full max-w-3xl bg-transparent"
                        value={bpjs}
                        onChange={(e) => setBpjs(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-end gap-2 mt-5">
                    <div>
                      <Button
                        label="Previous"
                        classname={`${
                          mode === true ? "bg-dark-button" : "bg-primary"
                        } text-white px-10`}
                        
                      />
                    </div>
                    <div>
                      <Button
                        label="Next"
                        classname={`${
                          mode === true ? "bg-dark-button" : "bg-primary"
                        } text-white px-10`}
                        type="submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AddImportantData;
