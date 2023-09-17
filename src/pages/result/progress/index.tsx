import React, { useState } from "react";
import Sidebar from "../../../component/Sidebar";
import Navbar from "../../../component/Navbar";
import Button from "../../../component/Button";
import InputSearch from "../../../component/InputSearch";
import Input from "../../../component/Input";
import Popup from "../../../component/Popup";

const Progress = () => {
  const [addProgress, setAddProgress] = useState<boolean>(false);
  const [editProgress, setEditProgress] = useState<boolean>(false);

  const addProgressEmployee = () => {
    setAddProgress(!addProgress);
  };

  const editProgressEmployee = () => {
    setEditProgress(!editProgress)
  }

  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <Sidebar height="h-[80vh]" />
        <div className="w-[80vw] flex flex-col">
          <div className="text-3xl mx-10 mb-2">Progress</div>
          <div className="bg-white mx-10 p-6 rounded-md ">
            <div className="flex flex-col">
              <div className="flex justify-end">
                <Button
                  label="Add Progress"
                  classname="bg-primary text-white px-10"
                  onClick={() => addProgressEmployee()}
                />
              </div>
              <div className="flex justify-end mt-3">
                <InputSearch placeholder="Search Result" />
              </div>
              <div>
                <div className="overflow-x-auto mt-4">
                  <table className="table ">
                    <thead className="bg-primary text-white border-none ">
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
                              <Button classname="text-black hover:border-transparent p-0 focus:outline-transparent" onClick={() => editProgressEmployee()} icon={<i className="fa-regular fa-pen-to-square"></i>}/>
                            </div>
                            <div>
                              <Button classname="text-black hover:border-transparent p-0 focus:outline-transparent" onClick={() => editProgressEmployee()} icon={<i className="fa-solid fa-trash"></i>}/>
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
        </div>
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
                      <option>Build Hris App</option>
                      <option>Coin</option>
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
                      <option>Login</option>
                      <option>Regis</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 w-full">
              <Button label="Submit" classname="bg-primary text-white w-full" />
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
              <Button label="Submit" classname="bg-primary text-white w-full" />
            </div>
          </Popup>
        </div>
      </div>
    </section>
  );
};

export default Progress;
