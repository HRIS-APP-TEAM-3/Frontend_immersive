import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import { motion } from "framer-motion";

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

const AddUser = () => {
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    navigate('/user/adduser');
  };

  const handleNextClick = () => {
    navigate('/user/addimportantdata');
  };
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <Sidebar height="h-[80vh]" />
        <motion.div variants={animation} initial='hidden' animate='visible' className="w-[80vw] flex flex-col">
          <motion.div variants={childAnimation} className="bg-white mx-10 p-6 rounded-lg">
            <div className="flex justify-center">
              <div className="flex flex-col justify-center">
                <div className="flex justify-between items-center mt-5 max-w-xs">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold">1</div>
                  <div className="flex-1 h-0.5 bg-gray-500"></div>
                  <div className="w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center text-white font-bold">2</div>
                  <div className="flex-1 h-0.5 bg-gray-500"></div>
                  <div className="w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center text-white font-bold">3</div>
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
                <h1 className="text-2xl font-bold mb-4">Personal data</h1>
                <div className="flex flex-row gap-5 mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text"> First Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Last Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text"> Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Phone</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text"> Division</span>
                      </label>
                      <select className="select select-bordered bg-transparent">
                        <option disabled selected>
                          Pick one
                        </option>
                        <option>IT Division</option>
                        <option>Management</option>
                        <option>Marketing</option>
                        <option>Warehouse</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Level</span>
                      </label>
                      <select className="select select-bordered bg-transparent">
                        <option disabled selected>
                          Pick one
                        </option>
                        <option>Leader</option>
                        <option>Employee</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text"> place of date</span>
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
                        <span className="label-text">Birthday</span>
                      </label>
                      <input
                        type="date"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Gender</span>
                      </label>
                      <div className="flex gap-5">
                        <label>
                          <input type="checkbox" name="gender" value="male" /> Male
                        </label>
                        <label>
                          <input type="checkbox" name="gender" value="female" /> Female
                        </label>
                        <label>
                          <input type="checkbox" name="gender" value="other" /> Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Religion</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full mt-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Upload File</span>
                    </label>
                    <input
                      type="file"
                      className="file-input file-input-primary file-input-md bg-transparent max-w-3xl"
                    />
                  </div>
                </div>
                <div className="w-full mt-3">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-3xl bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end gap-2 mt-5">
              <div>
                <Button
                  label="Previous"
                  classname="bg-primary text-white px-10"
                  onClick={handlePreviousClick}
                />      
              </div>
              <div>
                <Button
                  label="Next"
                  classname="bg-primary text-white px-10"
                  onClick={handleNextClick}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AddUser;
