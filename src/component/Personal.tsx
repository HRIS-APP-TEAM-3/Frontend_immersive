import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Cookie from 'js-cookie'
import axios from "axios";

const childAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Personal = () => {
  const mode = useSelector((state: any) => state.mode.mode);
  const [data, setData] = useState<any>({})

  const id = Cookie.get('id')
  const token = Cookie.get('token')

  const getData = () => {
    axios.get(`https://backendlagi.online/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setData(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <motion.div
      variants={childAnimation}
      className="flex flex-row justify-between mr-10"
    >
      <div className="lg:mx-10 mb-5 flex flex-row place-items-center">
        <div
          className={`${
            mode === true ? "bg-dark" : "bg-white"
          } w-12 h-12 rounded-full mr-4 flex place-items-center`}
        >
          <img src="../../../public/logo.png" alt="" className="object-cover" />
        </div>
        <div className={`flex flex-col ${mode === true ? "text-white" : ""}`}>
          <div className="text-[18px] font-semibold">{data.first_name} {data.last_name}</div>
          <div className="text-[12px]">{data?.role?.name} : {data?.division?.name}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Personal;
