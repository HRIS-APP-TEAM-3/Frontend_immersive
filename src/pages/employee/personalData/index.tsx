import  { useState } from 'react'
import Navbar from '../../../component/Navbar';
import Sidebar from '../../../component/Sidebar';
import Button from '../../../component/Button';
import { motion } from 'framer-motion'

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
  
    const handleAdd = () => {
      setAddReimbursement(!addReimbursement);
    };
  

return (
    <section>
        <div>
            <Navbar/>
        </div>
        <div className='mt-10 px-10 flex flex-row'>
        <Sidebar height="h-[80vh]"/>
        <motion.div variants={animation} initial='hidden' animate='visible' className="w-[80vw] flex flex-col">
          <motion.div variants={childAnimation} className="flex flex-row justify-between mr-10">
            <div className="mx-10 mb-5 flex flex-row place-items-center">
              <div className="w-12 h-12 rounded-full bg-white mr-4 flex place-items-center">
                <img
                  src="../../../public/logo.png"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-[18px] font-semibold">Denson Patibang</div>
                <div className="text-[12px]">Leader : Teknis IT</div>
              </div>
            </div>
          </motion.div>
          <motion.div variants={childAnimation}>
          <div className="flex flex-row mx-10 ">
            <a href="/personaldata" className="text-gray-500 hover:text-gray-500">
              <div className="bg-white px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Personal Data
              </div>
            </a>
            <a href="/attandence" className="text-gray-500 hover:text-gray-500">
              <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Attendance
              </div>
            </a>
            <a href="/timeoff" className="text-gray-500 hover:text-gray-500">
              <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Time Off
              </div>
            </a>
            <a href="/reimbursement" className="text-gray-500 hover:text-gray-500">
              <div className="bg-[#E3E3E3] px-12 py-3 rounded-t-lg hover:bg-white transition-colors ease-in-out">
                Reimbursement
              </div>
            </a>
          </div>
          <div className="bg-white mx-10 p-6 shadow-md rounded-b-lg rounded-tr-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Personal Data</h2>
            <div className="grid grid-cols-2 gap-4 ml-8">
                <div>
                <p className="text-gray-600 mb-2">Name:</p>
                <p className="text-gray-600 mb-2">Divisi:</p>
                <p className="text-gray-600 mb-2">Level:</p>
                <p className="text-gray-600 mb-2">Email:</p>
                <p className="text-gray-600 mb-2">Mobile Phone:</p>
                <p className="text-gray-600 mb-2">Birthday:</p>
                <p className="text-gray-600 mb-2">Gender:</p>
                <p className="text-gray-600 mb-2">Religion:</p>
                <p className="text-gray-600 mb-2">Address:</p>
                </div>
                <div>
                <p className="font-semibold mb-2">Denson</p>
                <p className="font-semibold mb-2">IT Departement</p>
                <p className="font-semibold mb-2">Leader</p>
                <p className="font-semibold mb-2">Denson@example.com</p>
                <p className="font-semibold mb-2">+1 (123) 456-7890</p>
                <p className="font-semibold mb-2">Oktober 15, 1999</p>
                <p className="font-semibold mb-2">Laki-laki</p>
                <p className="font-semibold mb-2">Kristen</p>
                <p className="font-semibold mb-2">Jl.Wr Supratman,Enrekang, kota Makassar </p>
                </div>
            </div>
            <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Education Details</h2>
                <div className='ml-8'>
                <p className="text-gray-600 mb-2">2019 - 2021 S1 Internsional School</p>
                <p className="text-gray-600 mb-2">2021 - 2022 S2 Univecity Of Indonesia</p>
                <p className="text-gray-600 mb-2">2021 - 2022 S2 Univecity Of Indonesia</p>
                </div>
            </div>

            <div className="flex justify-end">
                <Button
                  label="Edit data"
                  classname="mr-2 bg-primary text-white"
                  onClick={() => handleAdd()}
                />
                 <Button
                  label="Change Password"
                  classname="bg-primary text-white"
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