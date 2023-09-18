import React, { useState } from "react";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import Button from "../../component/Button";
import Popup from "../../component/Popup";
import Input from "../../component/Input";


const TimeOff = () => {


    const [popupDetail, setPopupDetail] = useState<boolean>(false);
    const [addTimeOff, setAddTimeOff] = useState<boolean>(false);

    const handleAdd = () => {
        setAddTimeOff(!addTimeOff);
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
                    <div className="flex flex-row mx-10 ">
                        <a href="/personaldata" className="text-gray-500 hover:text-gray-500">
                            <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                                Personal Data
                            </div>
                        </a>
                        <a href="/attendance" className="text-gray-500 hover:text-gray-500">
                            <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                                Attendance
                            </div>
                        </a>
                        <a href="/timeoff" className="text-gray-500 hover:text-gray-500">
                            <div className="bg-white px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                                Time Off
                            </div>
                        </a>
                        <a href="/reimbursement" className="text-gray-500 hover:text-gray-500">
                            <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                                Reimbursement
                            </div>
                        </a>
                    </div>
                    <div className="bg-white mx-10 p-6 rounded-lg ">

                        <div className="flex flex-col text-end">
                            <div>
                                <Button
                                    label="Request Time Off"
                                    classname="bg-primary text-white px-10"
                                    onClick={() => handleAdd()}
                                />
                            </div>

                            <div>
                                <div className="overflow-x-auto mt-4">
                                    <table className="table ">
                                        <thead className="bg-primary text-white border-none ">
                                            <tr className="border-none ">
                                                <th className="rounded-l-md">No.</th>
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
                                                <th>1</th>
                                                <td>12 Sept</td>
                                                <td>CT</td>
                                                <td>12 Sept</td>
                                                <td>17 Sept</td>
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
                                                        <div >
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
                        </div>
                    </div>
                    <div>
                        <Popup
                            isOpen={addTimeOff}
                            onClose={() => setAddTimeOff(false)}
                        >
                            <div className="flex flex-col px-7 py-5">
                                <div className="text-center text-[24px] font-semibold">
                                    Request TimeOff
                                </div>
                                <div className="flex flex-row gap-5 mt-3">
                                    <div className="w-full">
                                        <div className="form-control w-full max-w-xs ">
                                            <label className="label">
                                                <span className="label-text">Choose Time Out</span>
                                            </label>
                                            <select className="w-full select select-bordered bg-transparent">
                                                <option disabled selected>
                                                    Pick one
                                                </option>
                                                <option>Cuti Tahunan</option>
                                                <option>Cuti Emergency</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full my-auto py-auto ">
                                    <label className="label">
                                        <span className="label-text">Sisa Cuti</span>
                                    </label>
                                    <span className="input input-bordered max-w-xs" >
                                        <span className="input-content">12 Hari</span>
                                    </span>
                                </div>
                                <div className="overflow-x-auto max-w-xs w-full">
                                    <div className="max-w-xl">
                                    <label className="label">
                                        <span className="label-text">Start Date</span>
                                    </label>
                                    <input
                                        className="input input-bordered"
                                        type="date"
                                        placeholder="Select a date"
                                    />
                                    <div className="max-w-xl">
                                    <label className="label">
                                        <span className="label-text">End Date</span>
                                    </label>
                                    <input
                                        className="input input-bordered"
                                        type="date"
                                        placeholder="Select a date"
                                    />
                                    </div>
                                </div>
                                <div>
                                <label className="label">
                                        <span className="label-text">Notes</span>
                                    </label>
                                    <Input placeholder="Alasan Cuti" />
                                </div>
                                <div className="mt-8">
                                    <Button label="Next" classname="bg-primary text-white w-full" />
                                </div>
                            </div>
                            </div>

                        </Popup>
                    </div>
                    <div>
                        <Popup isOpen={popupDetail} onClose={() => setPopupDetail(false)}>
                            <div className="flex flex-col px-7 py-5">
                                <div className="text-center text-[24px] font-semibold">
                                    TimeOff Detail
                                </div>
                                <div className="mt-4 leading-7">
                                    <div className="grid grid-cols-2 gap-24">
                                        <div>Policy Code</div>
                                        <div>Employee Name :</div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-24">
                                        <div>CT</div>
                                        <div>Diska Esfandiary</div>
                                    </div>
                                </div>
                                <div className="mt-6 leading-7">
                                    <div className="grid grid-cols-2 gap-24">
                                        <div>Start Date</div>
                                        <div>
                                            End Date
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-24">
                                        <div>12 Okt</div>
                                        <div>
                                            15 Okt
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div>Notes :</div>
                                    <div>Mau Healing </div>
                                </div>
                                <div className="mt-6">
                                    <div>Status</div>
                                    <div className="text-[24px] font-semibold">Pending</div>
                                </div>
                            </div>
                        </Popup>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimeOff;
