import React from "react";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import Button from "../../component/Button";


const TimeOff = () => {
    return (
        <section>
            <div>
                <Navbar />
            </div>
            <div className="mt-10 px-10 flex flex-row">
                <Sidebar height="h-[80vh]" />
                <div className="w-[80vw] flex flex-col">
                    <div className="bg-white mx-10 p-6 rounded-lg ">
                        <div className="flex flex-col text-end">
                            <div>
                                <Button
                                    label="Request Time Off"
                                    classname="bg-primary text-white px-10"
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
                                                <td><img src="./EYE.png" alt="Foto" width="20" height="20" /></td>
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
                </div>
            </div>
        </section>
    );
};

export default TimeOff;
