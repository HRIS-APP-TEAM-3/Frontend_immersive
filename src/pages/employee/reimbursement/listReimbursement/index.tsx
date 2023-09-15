import React, { useState } from "react";
import Navbar from "../../../../component/Navbar";
import Sidebar from "../../../../component/Sidebar";
import Button from "../../../../component/Button";
import Popup from "../../../../component/Popup";
import Input from "../../../../component/Input";

const ListReimbursement = () => {
  const [popupDetail, setPopupDetail] = useState<boolean>(false);
  const [addReimbursement, setAddReimbursement] = useState<boolean>(false);

  const handleAdd = () => {
    setAddReimbursement(!addReimbursement);
  };

  const handleDetail = () => {
    setPopupDetail(!popupDetail);
  };

  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <Sidebar height="h-[80vh]" />
        <div className="w-[80vw] flex flex-col">
          <div className="flex flex-row justify-between mr-10">
            <div className="mx-10 mb-5 flex flex-row place-items-center">
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
          </div>
          <div className="flex flex-row mx-10 ">
            <a href="" className="text-gray-500 hover:text-gray-500">
              <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Personal Data
              </div>
            </a>
            <a href="" className="text-gray-500 hover:text-gray-500">
              <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Attendance
              </div>
            </a>
            <a href="" className="text-gray-500 hover:text-gray-500">
              <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Time Off
              </div>
            </a>
            <a href="/reimbursement" className="text-gray-500 hover:text-gray-500">
              <div className="bg-white px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Reimbursement
              </div>
            </a>
          </div>
          <div className="bg-white mx-10 p-6 rounded-b-lg rounded-tr-lg ">
            <div className="flex flex-col">
              <div className="text-end">
                <Button
                  label="Request Reimbursement"
                  classname="bg-primary text-white"
                  onClick={() => handleAdd()}
                />
              </div>
              <div className="flex flex-row justify-center gap-10">
                <a href="/reimbursement">Reimbursement Request</a>
                <div>|</div>
                <a href="/reimbursement-taken">Reimbursement Taken</a>
              </div>
              <div>
                <div className="overflow-x-auto mt-4">
                  <table className="table ">
                    <thead className="bg-primary text-white border-none ">
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
                      <tr className="border-none">
                        <td>2123141421231</td>
                        <td>Medical Check</td>
                        <td>12 Sept</td>
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
                              <a href="" className="text-black">
                                <i className="fa-regular fa-pen-to-square"></i>
                              </a>
                            </div>
                            <div>
                              <a href="" className="text-black">
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
                        classname="bg-[#CACACA] text-white px-10"
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
            </div>
          </div>
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
                      className="file-input file-input-primary file-input-md bg-transparent"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="label">
                    <span className="label-text">Total Paid</span>
                  </label>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead className="bg-primary text-white border-none ">
                        <tr className="border-none ">
                          <th className="rounded-l-md">Benefit Name</th>
                          <th>Request Ammount</th>
                          <th className="rounded-r-md">Description</th>
                        </tr>
                      </thead>
                      <tbody className="border-none px-0">
                        <tr className="border-none">
                          <td>
                            <select className="select select-bordered bg-transparent focus:border-none">
                              <option disabled selected>
                                Select Benefit --
                              </option>
                              <option>Rawat Inap</option>
                              <option>Rawat Jalan</option>
                            </select>
                          </td>
                          <td>
                            <Input placeholder="Input Amount" type="number"/>
                          </td>
                          <td>
                            <Input placeholder="Input Description" type="text"/>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-8">
                    <Button label="Next" classname="bg-primary text-white w-full"/>
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
                        <a href="">
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
        </div>
      </div>
    </section>
  );
};

export default ListReimbursement;
