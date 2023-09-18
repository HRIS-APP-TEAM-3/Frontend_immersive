import React, { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import InputSearch from "../../../component/InputSearch";

const Attendance = () => {
  const [today, setToday] = useState<string>('')
  
  const handleToday = () => {
    setToday(new Date().toISOString().slice(0, 10))
  }
  

  useEffect(() => {
    handleToday();
  })

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
            <a href="/history/attendence" className="text-gray-500 hover:text-gray-500">
              <div className="bg-white px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Attendance
              </div>
            </a>
            <a href="/history/timeoff" className="text-gray-500 hover:text-gray-500">
              <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Time Off
              </div>
            </a>
            <a
              href="/history/reimbursement"
              className="text-gray-500 hover:text-gray-500"
            >
              <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Reimbursement
              </div>
            </a>
          </div>
          <div className="bg-white mx-10 p-6 rounded-b-lg rounded-tr-lg ">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <div>
                  <div className="form-control w-full max-w-xs">
                    <input
                      type="date"
                      value={today}
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs bg-transparent"
                    />
                  </div>
                </div>
                <div>
                    <InputSearch placeholder="Search"/>
                </div>
              </div>
              <div>
                <div className="overflow-x-auto mt-4">
                  <table className="table ">
                    <thead className="bg-primary text-white border-none ">
                      <tr className="border-none ">
                        <th className="rounded-l-md">No</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Chech In</th>
                        <th>Chech Out</th>
                        <th>Overtime</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody className="border-none">
                      <tr className="border-none">
                        <td>1</td>
                        <td>Denson Patibang</td>
                        <td>15 September</td>
                        <td>08:00</td>
                        <td>16:00</td>
                        <td>00.40</td>
                        <td>Pending</td>
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
        </div>
      </div>
    </section>
  );
};

export default Attendance;
