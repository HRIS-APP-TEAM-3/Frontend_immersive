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
  const [isTimeoffPopupOpen, setTimeoffPopupOpen] = useState<boolean>(false);
  const [isReimbursementPopupOpen, setReimbursementPopupOpen] = useState<boolean>(false);

  const handleEyeClick = (type: string) => {
    if (type === "Request Time Off") {
      setTimeoffPopupOpen(true);
      setReimbursementPopupOpen(false);
    } else if (type === "Request Reimbusment") {
      setTimeoffPopupOpen(false);
      setReimbursementPopupOpen(true);
    }
  };

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
  
  ];

  useEffect(() => {
    setData(dummyData);
  }, []); 

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
              {data &&
                data.map((item, index) => (
                  <Card
                    key={index}
                    Name={item.Name}
                    TypeApproval={item.Approvaltype}
                    TypeRequest={item.RequestType}
                    Status={item.status}
                    onEyeClick={() => handleEyeClick(item.Approvaltype)}
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
      <Popup isOpen={isTimeoffPopupOpen} onClose={() => setTimeoffPopupOpen(false)}>
      <div className="flex flex-col px-7 py-5 ml-12">
              <div className="text-center text-[24px] font-semibold">
                Timeoff Detail
              </div>

              <div className="flex flex-row gap-1 mt-3">
                <div className="w-10 h-10 rounded-full bg-gray-200">
                  <img src="" alt="" className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[18px] font-semibold">Denson Patibang</div>
                  <div className="text-[12px]">Request Time Off</div>
                </div>
              </div>

              <div className="flex flex-row gap-5 mt-3">
                <div className="w-full">
                  <div className="form-control w-full max-w-xs">
                    <ul className="list-disc">
                      <li>
                        Diska would like to request time off CT at this date: Sun,
                        September 10 2023 until Mon, September 11 2023
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="form-control w-full max-w-xs">
                  <ul className="list-disc">
                    <li>Time Off Policy : Cuti Tahunan</li>
                  </ul>
                </div>
              </div>

              <div className="w-full">
                <div className="form-control w-full max-w-xs">
                  <ul className="list-disc">
                    <li>Time Off Requested : 2 days</li>
                  </ul>
                </div>
              </div>

              <div className="w-full">
                <div className="form-control w-full max-w-xs">
                  <ul className="list-disc">
                    <li>Remaining balance : 8 days</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-5 justify-center mt-10">
                <Button label="Approval Request" classname="bg-primary text-white px-10" />
                <Button label="Reject Request" classname="bg-primary text-white px-10" />
              </div>
            </div>
      </Popup>
      <Popup isOpen={isReimbursementPopupOpen} onClose={() => setReimbursementPopupOpen(false)}>
      <div className="flex  flex-col px-7 py-5 ml-12">
            <div className="text-center text-[24px] font-semibold">
            Reimbursement Detail
            </div>           
            
            <div className="flex flex-row gap-1 mt-3 ">
                <div className="w-10 h-10 rounded-full bg-gray-200  ">
                  <img src="" alt="" className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[18px] font-semibold">Denson Patibang</div>
                  <div className="text-[12px]">Request Reimbursement  </div>
                </div>
              </div>
             
            <div className="flex flex-row gap-5 mt-3">
              <div className="w-full">
                <div className="form-control w-full max-w-xs ">
                <ul className="list-disc">
                  <li>Transaction ID : 2023090002</li>                
                </ul>
                </div>               
              </div>
            </div> 

              <div className="w-full">
                <div className="form-control w-full max-w-xs">
                <ul className="list-disc">
                  <li>Reimbusment Name : Medical Claim</li>                
                </ul>
              </div>
              </div>
              <div className="w-full">
                <div className="form-control w-full max-w-xs">
                <ul className="list-disc">
                  <li>Reimbusment Date : 10 September 2023</li>                
                </ul>
              </div>
              </div>
              <div className="w-full">
                <div className="form-control w-full max-w-xs">
                <ul className="list-disc">
                  <li>Amount : 9.000.0000</li>                
                </ul>
              </div>
              </div>
              <div className="w-full">
                <div className="form-control w-full max-w-xs">
                <ul className="list-disc">
                  <li>Notes : </li>                
                </ul>
              </div>
              </div>
              <div className="flex gap-5 justify-center mt-10">
              <Button
                label="Approval Request"
                classname="bg-primary text-white px-10"
              />
              <Button
                label="Reject Request"
                classname="bg-primary text-white px-10"
              />
            </div>
          </div>
      </Popup>
    </section>
  );
};

export default Approval;
