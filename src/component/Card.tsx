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
    <div className="min-w-10 min-px-2  grid  justify-center items-center sm:px-8 "> {/* Menambahkan kelas responsif sm:w-auto dan mb-4 */}
      <div className="form-control min-w-fit ">
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
