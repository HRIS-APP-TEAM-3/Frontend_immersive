import React, { FC, useState } from "react";
import Popup from "./Popup";
import Button from "./Button";

interface CardProps {
  Name: string;
  TypeApproval?: string;
  TypeRequest?: string;
  Status?: string;
  onClick?: React.MouseEventHandler;
}

const Card: FC<CardProps> = ({ Name, TypeApproval, TypeRequest, Status, onClick }) => {
  const [isTimeoffPopupOpen, setTimeoffPopupOpen] = useState<boolean>(false);
  const [isReimbursementPopupOpen, setReimbursementPopupOpen] = useState<boolean>(false);

  const handleEyeClick = () => {
    if (TypeApproval === "Request Time Off" || TypeRequest === "Request Time Off") {
      setTimeoffPopupOpen(true);
      setReimbursementPopupOpen(false);
    } else if (TypeApproval === "Request Reimbusment" || TypeRequest === "Request Reimbusment") {
      setTimeoffPopupOpen(false);
      setReimbursementPopupOpen(true);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="form-control w-full max-w-xs">
        <div className="input input-bordered w-full h-full max-w-xs bg-transparent mt-5 flex">
          <label className="flex items-center">
            <input type="checkbox" name="gender" value="male" className="mr-2" />
            <span className="checkbox-label">
              <p>{Name}</p>
              <p>{TypeApproval}</p>
              <p>{TypeRequest}</p>
              <p>{Status}</p>
            </span>
          </label>
          <button
            onClick={handleEyeClick}
            className="hover:outline-none hover:border-white"
          >
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
        {isTimeoffPopupOpen && (
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
        )}
        {isReimbursementPopupOpen && (
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
        )}
      </div>
    </div>
  );
};

export default Card;
