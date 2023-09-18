import React, { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import Card from "../../../component/Card";
import Popup from "../../../component/Popup";

interface DataItem {
  Name: string;
  Approvaltype: string;
  RequestType: string;
  status: string;
}

const Approval: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  // Data dummy
  const dummyData: DataItem[] = [
    {
      Name: "Diska Genteng ",
      Approvaltype: "Request Time Off",
      RequestType: "For Cuti Tahunan",
      status: "Pending",
    },
    {
      Name: "Diska Genteng ",
      Approvaltype: "Request Reimbusment",
      RequestType: "For Perjalanan Keluar Planet",
      status: "Pending",
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ];

  // Mengatur data dummy ke state data
  useEffect(() => {
    setData(dummyData);
  }, []); // Empty dependency array to run this effect only once

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
              {data &&
                data.map((item, index) => (
                  <Card
                    key={index}
                    Name={item.Name}
                    TypeApproval={item.Approvaltype} 
                    TypeRequest={item.RequestType}  
                    Status={item.status}
                    
                  />                 
                ))}                
            </div>
                  
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
    </section>
  );
};

export default Approval;






