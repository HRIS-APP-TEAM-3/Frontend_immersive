import React from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";

const AddEducation = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <Sidebar height="h-[80vh]" />
        <div className="w-[80vw] flex flex-col">
          <div className="bg-white mx-10 p-6 rounded-lg">
            <div className="flex justify-center">
              <div className="flex flex-col justify-center">
                <div className="flex justify-between items-center mt-5 max-w-xs">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold">1</div>
                  <div className="flex-1 h-0.5 bg-blue-500"></div>
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold">2</div>
                  <div className="flex-1 h-0.5 bg-blue-500"></div>
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold">3</div>
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
                <h1 className="text-2xl font-bold mb-4">Education Data</h1>       
                <div className="flex flex-row gap-5 mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text"> Education</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Education"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Years</span>
                      </label>
                      <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Years"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Years"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                      />
                      </div>                     
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
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
    </section>
  );
};

export default AddEducation;
