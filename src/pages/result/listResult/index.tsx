import React, { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import InputSearch from "../../../component/InputSearch";
import Button from "../../../component/Button";
import Popup from "../../../component/Popup";
import Input from "../../../component/Input";
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

const ListResult = () => {
  const [popupDetail, setPopupDetail] = useState<boolean>(false);
  const [addResult, setAddResult] = useState<boolean>(false);

  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});

  const [features, setFeatures] = useState<JSX.Element[]>([]);
  const [inputCount, setInputCount] = useState<number>(0);

  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  const body = document.body

  if(mode === true){
    body.style.backgroundColor = '#313338';
  } else {
    body.style.backgroundColor = '#F2F2F2';
  }

  // Fungsi untuk menambahkan elemen input ke dalam daftar fitur
  const addFeature = () => {
    const newInput = (
      <div key={inputCount} className="mb-3 flex flex-row">
        <div className="w-full">
          <Input
            placeholder="Feature"
            type="text"
            onChange={(e) => handleInputChange(e, inputCount)}
          />
        </div>
        <button
          className="hover:border-none hover:outline-none"
          onClick={() => removeFeature(inputCount)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    );

    setFeatures([...features, newInput]);
    setInputCount(inputCount + 1);
  };

  // Fungsi untuk mengupdate nilai input dalam objek inputValues saat ada perubahan input
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = e.target.value;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [index]: newValue,
    }));
  };

  // Fungsi untuk menghapus elemen input dan nilai yang sesuai
  const removeFeature = (index: number) => {
    const updatedFeatures = features.filter((item, i) => i !== index);
    setFeatures(updatedFeatures);

    const { [index]: removedValue, ...updatedInputValues } = inputValues;
    setInputValues(updatedInputValues);
  };

  const handleAdd = () => {
    setAddResult(!addResult);
  };

  const handleDetail = () => {
    setPopupDetail(!popupDetail);
  };

  useEffect(() => {});

  return (
    <section>
      <div>
        <Navbar onClick={() => dispatch(toggleMode())}/>
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
          <motion.div variants={childAnimation} className={`${mode === true ? 'text-white': ''} text-3xl mx-10 mb-2`}>Result Key</motion.div>
          <motion.div variants={childAnimation} className={`${mode === true ? 'bg-dark hover:bg-dark text-white' : 'bg-white hover:bg-white'} mx-10 p-6 rounded-b-lg rounded-tr-lg`}>
            <div className="flex flex-col">
              <div className="grid grid-cols-1 gap-4 grid justify-items-center md:flex flex-row justify-between">
                <div>
                  <select className="select select-bordered w-40 max-w-xs bg-transparent focus:border-none">
                    <option disabled selected>
                      Result
                    </option>
                    <option className="text-black">On Going</option>
                    <option className="text-black">On Close</option>
                  </select>
                </div>
                <div className="my-5">
                  <Button
                    label="Add Result"
                    onClick={() => handleAdd()}
                    classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white px-10`}
                  />
                </div>
              </div>
              <div className="grid justify-items-center md:flex justify-end mt-3">
                <InputSearch placeholder="Search Result" />
              </div>
              <div>
                <div className="overflow-x-auto mt-4">
                  <table className="table ">
                    <thead className={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white border-none`}>
                      <tr className="border-none ">
                        <th className="rounded-l-md">No</th>
                        <th>Result Name</th>
                        <th>Date</th>
                        <th>Detail</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="border-none">
                      <tr className="border-none">
                        <td>1</td>
                        <td>Build H-RIS App</td>
                        <td>1 Oct 2023 - 1 Nov 2023</td>
                        <td>
                          <button
                            onClick={() => handleDetail()}
                            className="hover:outline-none hover:border-white"
                          >
                            <i className="fa-solid fa-eye"></i>
                          </button>
                        </td>
                        <td>Progress 0%</td>
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
                </div>
                  <div className="flex flex-row justify-center gap-2 mt-5 md:justify-end">
                    <div>
                      <Button
                        label="Previous"
                        classname={`${mode === true ? 'bg-dark-button' : 'bg-[#CACACA]'} text-white px-2 md:px-10`}
                      />
                    </div>
                    <div>
                      <Button
                        label="Next"
                        classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white px-2 md:px-10`}
                      />
                    </div>
                  </div>
              </div>
            </div>
          </motion.div>
          <div>
            <Popup isOpen={addResult} onClose={() => setAddResult(false)}>
              <div className="flex flex-col  py-5 min-w-[500px]">
                <div className="text-center text-[24px] font-semibold">
                  Add Result
                </div>
                <div className="flex flex-col mt-3">
                  <div>
                    <Input
                      placeholder="Result Name"
                      label="Result Name"
                      type="text"
                    />
                  </div>
                  <div className="mt-4 w-full">
                    <Input
                      placeholder="End Date"
                      label="End Date"
                      type="date"
                    />
                  </div>
                  <div className="mt-4 w-full flex flex-col">
                    <div>Features :</div>
                    <div className="flex flex-col gap-2">
                      <div className="w-full">
                        {features.map((feature) => feature)}
                      </div>
                      <div className="text-end">
                        <Button
                          onClick={addFeature}
                          label="Add Feature"
                          classname="bg-primary text-white px-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 w-full">
                <Button
                  label="Submit"
                  classname="bg-primary text-white w-full"
                />
              </div>
            </Popup>
          </div>
          <div>
            <Popup isOpen={popupDetail} onClose={() => setPopupDetail(false)}>
              <div className="flex flex-col px-7 py-5">
                <div className="text-center text-[24px] font-semibold">
                  Detail Progress
                </div>
                <div className="mt-4 leading-7">
                  Result Name : Build H-RIS APP
                </div>
                <div className="mt-6 leading-7">Features :</div>
                <div className="mt-6">
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead className={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white border-none`}>
                        <tr className="border-none ">
                          <th className="rounded-l-md">Feature</th>
                          <th>Employee</th>
                          <th>Progress</th>
                          <th className="rounded-r-md">Approval</th>
                        </tr>
                      </thead>
                      <tbody className="border-none px-0">
                        <tr className="border-none">
                          <td>Login</td>
                          <td>Denson Patibang</td>
                          <td>100 %</td>
                          <td>
                            <Button
                              label="Acc"
                              classname="bg-transparent border-primary hover:border-primary"
                            />
                          </td>
                        </tr>
                        <tr className="border-none">
                          <td>Register</td>
                          <td>Denson Patibang</td>
                          <td>80 %</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ListResult;
