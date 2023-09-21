import React, { useState } from "react";
import Sidebar from "../../../component/Sidebar";
import Navbar from "../../../component/Navbar";
import Button from "../../../component/Button";
import InputSearch from "../../../component/InputSearch";
import Input from "../../../component/Input";
import Popup from "../../../component/Popup";
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

const Progress = () => {
  const [addProgress, setAddProgress] = useState<boolean>(false);
  const [editProgress, setEditProgress] = useState<boolean>(false);

  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  const body = document.body

  if(mode === true){
    body.style.backgroundColor = '#313338';
  } else {
    body.style.backgroundColor = '#F2F2F2';
  }

  const addProgressEmployee = () => {
    setAddProgress(!addProgress);
  };

  const editProgressEmployee = () => {
    setEditProgress(!editProgress)
  }

  return (
    <section>
      <div>
        <Navbar onClick={() => dispatch(toggleMode())}/>
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <Sidebar height="h-[80vh]" />
        <motion.div variants={animation} initial='hidden' animate='visible' className="w-[80vw] flex flex-col">
          <motion.div variants={childAnimation} className={`${mode === true ? 'text-white' : ''} text-3xl mx-10 mb-2`}>Progress</motion.div>
          <motion.div variants={childAnimation} className={`${mode === true ? 'bg-dark hover:bg-dark text-white' : 'bg-white hover:bg-white'} mx-10 p-6 rounded-b-lg rounded-tr-lg`}>
            <div className="flex flex-col">
              <div className="flex justify-end">
                <Button
                  label="Add Progress"
                  classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white`}
                  onClick={() => addProgressEmployee()}
                />
              </div>
              <div className="flex justify-end mt-3">
                <InputSearch placeholder="Search Result" />
              </div>
              <div>
                <div className="overflow-x-auto mt-4">
                  <table className="table ">
                    <thead className={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white border-none`}>
                      <tr className="border-none ">
                        <th className="rounded-l-md">No</th>
                        <th>Employee</th>
                        <th>Result Name</th>
                        <th>Feature</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="border-none">
                      <tr className="border-none">
                        <td>1</td>
                        <td>Diska Ganteng BANGET</td>
                        <td>HRIS</td>
                        <td>Login</td>
                        <td>Progress 0%</td>
                        <td>
                          <div className="flex flex-row gap-2">
                            <div>
                              <Button classname={`${mode === true ? 'text-white' : 'text-black'} hover:border-transparent p-0 focus:outline-transparent`} onClick={() => editProgressEmployee()} icon={<i className="fa-regular fa-pen-to-square"></i>}/>
                            </div>
                            <div>
                              <Button classname={`${mode === true ? 'text-white' : 'text-black'} hover:border-transparent p-0 focus:outline-transparent`} onClick={() => editProgressEmployee()} icon={<i className="fa-solid fa-trash"></i>}/>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                  <div className="flex flex-row justify-end gap-2 mt-5">
                    <div>
                      <Button
                        label="Previous"
                        classname={`${mode === true ? 'bg-dark-button' : 'bg-[#CACACA]'} text-white`}
                      />
                    </div>
                    <div>
                      <Button
                        label="Next"
                        classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white`}
                      />
                    </div>
                  </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div>
          <Popup isOpen={addProgress} onClose={() => setAddProgress(false)}>
            <div className="flex flex-col  py-5 min-w-[500px]">
              <div className="text-center text-[24px] font-semibold">
                Add Result
              </div>
              <div className="flex flex-col mt-3">
                <div>
                  <div className="form-control w-full ">
                    <label className="label">Result Name</label>
                    <select className="select select-bordered bg-transparent focus:border-none ">
                      <option disabled selected>
                        -- Select Result Key --
                      </option>
                      <option className="text-black">Build Hris App</option>
                      <option className="text-black">Coin</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 w-full flex flex-col">
                  <div className="form-control w-full ">
                    <label className="label">Feature</label>
                    <select className="select select-bordered bg-transparent focus:border-none ">
                      <option disabled selected>
                        -- Select Feature --
                      </option>
                      <option className="text-black">Login</option>
                      <option className="text-black">Regis</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 w-full">
              <Button label="Submit" classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white w-full`} />
            </div>
          </Popup>
        </div>
        <div>
          <Popup isOpen={editProgress} onClose={() => setEditProgress(false)}>
            <div className="flex flex-col  py-5 min-w-[500px]">
              <div className="text-center text-[24px] font-semibold">
                Edit Result
              </div>
              <div className="flex flex-col mt-3">
                <div className="flex flex-row leading-8">
                  <div className="w-1/2">
                    <div>Result Name</div>
                    <div>Build Hris App</div>
                  </div>
                  <div className="w-1/2">
                    <div>Feature</div>
                    <div>Login</div>
                  </div>
                </div>
                <div className="mt-4 w-full flex flex-col">
                  <Input label="Progress" placeholder="Progress"/>
                </div>
              </div>
            </div>
            <div className="mt-3 w-full">
              <Button label="Submit" classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white w-full`} />
            </div>
          </Popup>
        </div>
      </div>
    </section>
  );
};

export default Progress;
