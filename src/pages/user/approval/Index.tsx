import React from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import Card from "../../../component/Card";

const Approval = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <Sidebar height="h-[80vh]" />
        <div className="w-[80vw] flex flex-col">
          <div className="bg-white mx-10 p-6 rounded-lg">
            <div className="flex gap-5 justify-center">
            <Button
                  label="Approval Request"
                  classname="bg-primary text-white px-10"
                />
                <Button
                  label="Reject Request"
                  classname="bg-primary text-white px-10"
                />
            </div>
            <div className="flex items-center justify-center mx-auto">
            <Card Name={""}/>
            <Card Name={""}/>
            
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

export default Approval;
