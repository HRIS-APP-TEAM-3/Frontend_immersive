import { useState, useEffect } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Personal from "../../../component/Personal";
import { toggleMode } from "../../../features/modeSlice";
import TopCard from "../../../component/TopCard";
import Cookie from 'js-cookie'
import axios from "axios";

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

const PersonalData = () => {
  const [addReimbursement, setAddReimbursement] = useState<boolean>(false);

  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  const [data, setData] = useState<any>({})

  const id = Cookie.get('id')
  const token = Cookie.get('token')

  const handleAdd = () => {
    setAddReimbursement(!addReimbursement);
  };

  const body = document.body;

  if (mode === true) {
    body.style.backgroundColor = "#313338";
  } else {
    body.style.backgroundColor = "#F2F2F2";
  }

  const getData = () => {
    axios.get(`https://backendlagi.online/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setData(res?.data?.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section>
      <div>
        <Navbar onClick={() => dispatch(toggleMode())} />
      </div>
      <div className="mt-10 px-10 flex flex-row">
      <div className="hidden sm:flex">
          <Sidebar  height="h-[80vh]" />
        </div>
        <motion.div
          variants={animation}
          initial="hidden"
          animate="visible"
          className="w-[80vw] flex flex-col"
        >
          <Personal />
          <motion.div variants={childAnimation}>
            <TopCard />
            <div
              className={`${
                mode === true
                  ? "bg-dark hover:bg-dark text-white"
                  : "bg-white hover:bg-white"
              } mx-10 p-6 rounded-b-lg rounded-tr-lg`}
            >
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Personal Data
              </h2>
              <div className="grid grid-cols-2 gap-4 ml-8 mb-4">
                <div className={`${mode === true ? 'text-white' : 'text-gray-600'} leading-8`}>
                  <p>Name:</p>
                  <p>Divisi:</p>
                  <p>Level:</p>
                  <p>Email:</p>
                  <p>Mobile Phone:</p>
                  <p>Birthday:</p>
                  <p>Gender:</p>
                  <p>Religion:</p>
                  <p>Address:</p>
                </div>
                <div className="font-semibold leading-8">
                  <p>{data?.first_name ? data?.first_name : '-'} {data?.last_name ? data?.last_name : '-'}</p>
                  <p>{data?.division?.name ? data?.division?.name : '-'}</p>
                  <p>{data?.role?.name ? data?.role?.name : '-'}</p>
                  <p>{data?.email ? data?.email : '-'}</p>
                  <p>{data?.phone_number ? data?.phone_number : '-'}</p>
                  <p>{data?.user_important_data?.birth_date ? data?.user_important_data?.birth_date : '-'}</p>
                  <p>{data?.gender ? data?.gender : '-'}</p>
                  <p>{data?.user_important_data?.Religion ? data?.user_important_data?.Religion : '-'}</p>
                  <p>
                    {data?.address ? data?.address : '-'}
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Education Details
                </h2>
                <div className={`ml-8 ${mode === true ? 'text-white' : 'text-gray-600'} leading-8`}>
                  <p>
                    2019 - 2021 S1 Internsional School
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  label="Edit data"
                  classname={`mr-2 ${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white`}
                  onClick={() => handleAdd()}
                />
                <Button
                  label="Change Password"
                  classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white`}
                  onClick={() => handleAdd()}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalData;
