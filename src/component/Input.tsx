import React, { FC } from "react";

interface InputProps {
  placeholder: string;
  label?: string;
  type?: string;
  value?: string;
  onChange?: () => void
}

const Input: FC<InputProps> = ({ placeholder, label, type, value, onChange }) => {
  return (
    <div>
      <label className={`font-[16px] mb-1  text-[#2F2F2F]`}>{label}</label>
      <div className="border-solid border-[1px] border-outline px-5 py-3 rounded-md">
        <input
          type={type}
          placeholder={placeholder}
          className="focus:outline-none w-full bg-transparent"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
