import { useState } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Personal from "../../../component/Personal";
import { toggleMode } from "../../../features/modeSlice";
import TopCard from "../../../component/TopCard";

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

  const handleAdd = () => {
    setAddReimbursement(!addReimbursement);
  };

  const body = document.body;

  if (mode === true) {
    body.style.backgroundColor = "#313338";
  } else {
    body.style.backgroundColor = "#F2F2F2";
  }

  return (
    <section>
      <div>
        <Navbar onClick={() => dispatch(toggleMode())} />
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <Sidebar height="h-[80vh]" />
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
                  <p>Denson</p>
                  <p>IT Departement</p>
                  <p>Leader</p>
                  <p>Denson@example.com</p>
                  <p>+1 (123) 456-7890</p>
                  <p>Oktober 15, 1999</p>
                  <p>Laki-laki</p>
                  <p>Kristen</p>
                  <p>
                    Jl.Wr Supratman,Enrekang, kota Makassar{" "}
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
                  <p>
                    2021 - 2022 S2 Univecity Of Indonesia
                  </p>
                  <p>
                    2021 - 2022 S2 Univecity Of Indonesia
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
