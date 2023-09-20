import React, { useState } from "react";
import Navbar from "../../../../component/Navbar";
import Sidebar from "../../../../component/Sidebar";
import Button from "../../../../component/Button";
import Popup from "../../../../component/Popup";
import Input from "../../../../component/Input";
import { motion } from "framer-motion";

import data from "../../../../../public/dummy/reimbursement.json";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { toggleMode } from "../../../../features/modeSlice";
import Personal from "../../../../component/Personal";
import TopCard from "../../../../component/TopCard";

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

const ListReimbursement = () => {
  const [popupDetail, setPopupDetail] = useState<boolean>(false);
  const [addReimbursement, setAddReimbursement] = useState<boolean>(false);
  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  const body = document.body

  if(mode === true){
    body.style.backgroundColor = '#313338';
  } else {
    body.style.backgroundColor = '#F2F2F2';
  }

  const handleAdd = () => {
    setAddReimbursement(!addReimbursement);
  };

  const handleDetail = () => {
    setPopupDetail(!popupDetail);
  };

  return (
    <section>
      <div>
        <Navbar onClick={() => dispatch(toggleMode())} />
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
            <TopCard />
            <div className={`${mode === true ? 'bg-dark hover:bg-dark text-white' : 'bg-white hover:bg-white'} mx-10 p-6 rounded-b-lg rounded-tr-lg`}>
              <div className="flex flex-col">
                <div className="text-end">
                  <Button
                    label="Request Reimbursement"
                    classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white`}
                    onClick={() => handleAdd()}
                  />
                </div>
                <div className="flex flex-row justify-center gap-10">
                  <a href="/reimbursement" className={mode === true ? 'text-white hover:text-white' : ''}>Reimbursement Request</a>
                  <div>|</div>
                  <a href="/reimbursement-taken" className={mode === true ? 'text-white hover:text-white' : ''}>Reimbursement Taken</a>
                </div>
                <div>
                  <div className="overflow-x-auto mt-4">
                    <table className="table ">
                      <thead className={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white border-none`}>
                        <tr className="border-none ">
                          <th className="rounded-l-md">Transaction ID</th>
                          <th>Reimbursement</th>
                          <th>Created At</th>
                          <th>Detail</th>
                          <th>Status</th>
                          <th className="rounded-r-md">Action</th>
                        </tr>
                      </thead>
                      <tbody className="border-none">
                        {data &&
                          data.map((item, index) => {
                            return (
                              <tr className="border-none" key={index}>
                                <td>{item.transaction_id}</td>
                                <td>{item.benefit_name}</td>
                                <td>{item.created_at}</td>
                                <td>
                                  <button
                                    onClick={() => handleDetail()}
                                    className="hover:outline-none hover:border-white"
                                  >
                                    <i className="fa-solid fa-eye"></i>
                                  </button>
                                </td>
                                <td>Pending</td>
                                <td >
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
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
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
          </motion.div>
          <div>
            <Popup
              isOpen={addReimbursement}
              onClose={() => setAddReimbursement(false)}
            >
              <div className="flex flex-col px-7 py-5">
                <div className="text-center text-[24px] font-semibold">
                  Request Reimbursement
                </div>
                <div className="flex flex-row gap-5 mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs ">
                      <label className="label">
                        <span className="label-text">Reimbursement Name</span>
                      </label>
                      <select className="select select-bordered bg-transparent">
                        <option disabled selected>
                          Pick one
                        </option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Effective Date</span>
                      </label>
                      <input
                        type="date"
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
                      className={`file-input ${mode === true ? 'bg-black' : 'file-input-primary'} file-input-md bg-transparent`}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="label">
                    <span className="label-text">Total Paid</span>
                  </label>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead className={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white border-none`}>
                        <tr className="border-none ">
                          <th className="rounded-l-md">Benefit Name</th>
                          <th>Request Ammount</th>
                          <th className="rounded-r-md">Description</th>
                        </tr>
                      </thead>
                      <tbody className="border-none px-0">
                        <tr className="border-none">
                          <td>
                            <select className={`  select select-bordered bg-transparent focus:border-none`}>
                              <option disabled selected className={mode === true ? 'text-black' : ''}>
                                Select Benefit --
                              </option>
                              <option className={mode === true ? 'text-black' : ''}>Rawat Inap</option>
                              <option className={mode === true ? 'text-black' : ''}>Rawat Jalan</option>
                            </select>
                          </td>
                          <td>
                            <Input placeholder="Input Amount" type="number" />
                          </td>
                          <td>
                            <Input
                              placeholder="Input Description"
                              type="text"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    label="Next"
                    classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white w-full`}
                  />
                </div>
              </div>
            </Popup>
          </div>
          <div>
            <Popup isOpen={popupDetail} onClose={() => setPopupDetail(false)}>
              <div className="flex flex-col px-7 py-5">
                <div className="text-center text-[24px] font-semibold">
                  Reimbursement Detail
                </div>
                <div className="mt-4 leading-7">
                  <div className="grid grid-cols-2 gap-24">
                    <div>Transaction ID :</div>
                    <div>Reimbursement Name :</div>
                  </div>
                  <div className="grid grid-cols-2 gap-24">
                    <div>1131414131231313</div>
                    <div>Medical Check Up</div>
                  </div>
                </div>
                <div className="mt-6 leading-7">
                  <div className="grid grid-cols-2 gap-24">
                    <div>Employee Name :</div>
                    <div>
                      File Attached :{" "}
                      <span>
                        <a href="" className={mode === true ? 'text-white': ''}>
                          <i className="fa-solid fa-folder"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-24">
                    <div>Denson Patibang</div>
                    <div>
                      Status : <span>Pending</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div>Notes :</div>
                  <div>Melakukan pembayaran Check Up</div>
                </div>
                <div className="mt-6">
                  <div>Total Paid :</div>
                  <div className="text-[24px] font-semibold">Rp. 1.000.000</div>
                </div>
              </div>
            </Popup>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ListReimbursement;
