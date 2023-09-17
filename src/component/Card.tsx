import { FC } from "react";

interface CardProps {
  Name: string;
  TypeApproval?: string;
  TypeRequest?: string;
  Status?: string;
  
}

const Card: FC<CardProps> = ({ Name, TypeApproval, TypeRequest, Status}) => {
  return (
    <div className="w-full flex items-center justify-center ">
        <div className="form-control w-full max-w-xs">
        <div className="input input-bordered w-full h-full max-w-xs bg-transparent mt-5">
            <label className="flex items-center">
            <input type="checkbox" name="gender" value="male" className="mr-2" />
            <span className="checkbox-label">
                Diska{Name} <br />
                Request TimeOff {TypeApproval} <br />
                for Cuti Tahunan {TypeRequest} <br />
                Status: Pending {Status}
            </span>
            </label>
        </div>
        </div>
    </div>
  );
};

export default Card;