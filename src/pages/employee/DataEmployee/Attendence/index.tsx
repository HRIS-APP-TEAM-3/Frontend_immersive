import { useState } from "react";
import Navbar from "../../../../component/Navbar";
import Sidebar from "../../../../component/Sidebar";
import Button from "../../../../component/Button";
import Popup from "../../../../component/Popup";

const Attandence = () => {
  const [Attandence, setAddAttandence] = useState<boolean>(false);

  const handleAdd = () => {
    setAddAttandence(!Attandence);
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
            <a href="/employee/personaldata" className="text-gray-500 hover:text-gray-500">
              <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Personal Data
              </div>
            </a>
            <a href="/employee/attandence" className="text-gray-500 hover:text-gray-500">
              <div className="bg-white px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Attendance
              </div>
            </a>
            <a href="/employee/timeoff" className="text-gray-500 hover:text-gray-500">
              <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Time Off
              </div>
            </a>
            <a href="/reimbursement" className="text-gray-500 hover:text-gray-500">
              <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Reimbursement
              </div>
            </a>
          </div>
          <div className="bg-white mx-10 p-6 rounded-b-lg rounded-tr-lg ">
            <div className="flex flex-col">
              <div className="text-end">
                <Button
                  label="Attendence"
                  classname="bg-primary text-white"
                  onClick={() => handleAdd()}
                />
              </div>
              <div>
                <div className="overflow-x-auto mt-4">
                  <table className="table ">
                    <thead className="bg-primary text-white border-none ">
                      <tr className="border-none ">
                        <th className="rounded-l-md">No</th>
                        <th>Date</th>
                        <th>Check In</th>
                        <th>Check In</th>
                        <th>Overtime</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody className="border-none">
                      <tr className="border-none">
                        <td>1</td>
                        <td>15 September</td>
                        <td>08:00</td>
                        <td>16:00</td>
                        <td>00:03</td>
                        <td>Present</td>
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
              isOpen={Attandence}
              onClose={() => setAddAttandence(false)}
            >
              <div className="flex flex-col px-7 py-5">
                <div className="text-center text-[24px] font-semibold">
                  Attandence
                </div>
                <div className="flex flex-row gap-5 mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs ">
                      <label className="label">
                        <span className="label-text">Status</span>
                      </label>
                      <select className="select select-bordered bg-transparent">
                        <option disabled selected>
                          Pick one
                        </option>
                        <option>Check In</option>
                        <option>Check Out</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                    <Button label="Next" classname="bg-primary text-white w-full"/>
                </div>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attandence;
