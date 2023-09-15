import React, { FC } from 'react'

interface InputProps {
    placeholder: string,
    label?: string,
    type?: string
}

const Input: FC<InputProps> = ({ placeholder, label, type }) => {
  return (
    <div className="border-solid border-[1px] border-outline px-5 py-3 rounded-md">
      <label className={`font-[16px] mb-1  text-[#2F2F2F]`}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="focus:outline-none text-[13px] "
      />
    </div>
  )
}

export default Input