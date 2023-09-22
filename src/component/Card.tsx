import React, { FC } from "react";

interface CardProps {
  Name: string;
  TypeApproval?: string;
  TypeRequest?: string;
  Status?: string;
  onEyeClick?: React.MouseEventHandler;
}

const Card: FC<CardProps> = ({ Name, TypeApproval, TypeRequest, Status, onEyeClick }) => {
  return (
    <div className="w-full min-px-2  grid  sm:px-8 "> 
      <div className="form-control w-full">
        <div className="input input-bordered w-full h-full bg-transparent mt-5 flex justify-between">
          <label className="flex items-center gap-x-4">
            <input type="checkbox" name="gender" value="male" className="mr-2" />
            <span className="checkbox-label">
              <p>{Name}</p>
              <p>{TypeApproval}</p>
              <p>{TypeRequest}</p>
              <p>{Status}</p>
            </span>
          </label>
          <button
            onClick={onEyeClick} 
            className="hover:outline-none hover:border-white bg-transparent"
          >
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
