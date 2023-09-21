import React, { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import Card from "../../../component/Card";
import Popup from "../../../component/Popup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../../features/modeSlice";


const animation = {
  hidden: {
      opacity: 0,
  },
  visible: {
      opacity: 1,
      transition: {
          type: "spring",
          mass: 0.4,
          damping: 8,
          when: "beforeChildren",
          staggerChildren: 0.2,
      },
  },
};

const childAnimation = {
  hidden: {
      opacity: 0,
  },
  visible: {
      opacity: 1,
  },
};


interface DataItem {
  Name: string;
  Approvaltype: string;
  RequestType: string;
  status: string;
  
}
const Approval= () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [isTimeoffPopupOpen, setTimeoffPopupOpen] = useState<boolean>(false);
  const [isReimbursementPopupOpen, setReimbursementPopupOpen] = useState<boolean>(false);

  const navigate = useNavigate()

  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  const body = document.body

  if (mode === true) {
      body.style.backgroundColor = '#313338';
  } else {
      body.style.backgroundColor = '#F2F2F2';
  }

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
      <Navbar onClick={() => dispatch(toggleMode())}/>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row">
        <div className="hidden sm:flex">
          <Sidebar  height="h-[80vh]" />
        </div>
        <motion.div variants={animation} initial='hidden' animate='visible' className=" flex flex-col sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
          <motion.div variants={childAnimation} className={`${mode === true ? 'bg-dark hover:bg-dark text-white' : 'bg-white hover:bg-white'} mx-10 p-6 rounded-b-lg rounded-tr-lg`}>
          <div className="flex gap-5 justify-center">
          <div className={`sm:flex md:flex lg:flex ${mode === false ? 'hidden' : ''}`}>
                <Button
                  label="Approval Request"
                  classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white px-10`}
                />
              </div>
              <div className={`sm:flex md:flex lg:flex ${mode === false ? 'hidden' : ''}`}>
                <Button
                  label="Reject Request"
                  classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white px-10`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4  min-w-fit justify-center mx-auto sm:grid-cols-2 px-5 min-ml-8 items-center md:grid-cols-2 min-ml-11 lg:grid-cols-2 min-mx-11">
            {data &&
              data.map((item, index) => (
                <div key={index} className=" sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3"> 
                  <Card
                    Name={item.Name}
                    TypeApproval={item.Approvaltype}
                    TypeRequest={item.RequestType}
                    Status={item.status}
                    onEyeClick={() => handleEyeClick(item.Approvaltype)}
                  />
                </div>
              ))}
              </div>
            <div className="flex flex-row justify-center sm:justify-center gap-5 mt-5 md:justify-center  lg:justify-center ">
              <div>
                <Button
                  label="Previous"
                  classname={`${mode === true ? 'bg-dark-button' : 'bg-[#CACACA]'} text-white  px-2 sm:px-8 md:px-9 lg:px-10`}
                  
                />
              </div>
              <div>
                <Button
                  label="Next"
                  classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white px-2 sm:px-8 md:px-9 lg:px-10`}
                />
              </div>
            </div>
            </motion.div>
                </motion.div>
      </div>
      <Popup isOpen={isTimeoffPopupOpen} onClose={() => setTimeoffPopupOpen(false)}>
      <div className="sm:w-full md:w-[500px] lg:w-[700px] xl:w-[900px] bg-white rounded-lg shadow-lg p-4">
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
      <div className="sm:w-full md:w-[500px] lg:w-[700px] xl:w-[900px] bg-white rounded-lg shadow-lg p-4">
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
