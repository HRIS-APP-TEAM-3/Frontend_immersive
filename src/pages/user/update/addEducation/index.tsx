import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Cookie from 'js-cookie'
import Navbar from "../../../../component/Navbar";
import { toggleMode } from "../../../../features/modeSlice";
import Sidebar from "../../../../component/Sidebar";
import Button from "../../../../component/Button";

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

const AddEducation = () => {
  const navigate = useNavigate();
  const token = Cookie.get('token')

  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  //Data 
  const [name, setName] = useState<string>('')
  const [startYear, setStartYear] = useState<number>(0)
  const [graduateYear, setGraduateYear] = useState<number>(0)
  const personalData = JSON.parse(localStorage.getItem('formDataPersonal'))
  const importantData = JSON.parse(localStorage.getItem('formDataImportant'))
  const merge = {...personalData, ...importantData}

  const body = document.body;

  if (mode === true) {
    body.style.backgroundColor = "#313338";
  } else {
    body.style.backgroundColor = "#F2F2F2";
  }

  const handlePreviousClick = () => {
    navigate("/user/addimportantdata");
  };

  const content = {
    'first_name': personalData.firstName,
    'profile_photo': personalData.file,
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append('educationName', name);
    // formData.append('startYear', startYear);
    // formData.append('graduateYear', graduateYear);
    
    // try {
    //   const responseData = await axios.post('/users', formData), {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     },
    //   }
    // } catch(error) {
    //   console.log(error)
    // }
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
          <motion.div
            variants={childAnimation}
            className={`${
              mode === true
                ? "bg-dark hover:bg-dark text-white"
                : "bg-white hover:bg-white"
            } mx-10 p-6 rounded-b-lg rounded-tr-lg`}
          >
            <div className="flex justify-center">
              <div className="flex flex-col justify-center">
                <div className="flex justify-between items-center mt-5 max-w-xs">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1 h-0.5 bg-blue-500"></div>
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1 h-0.5 bg-blue-500"></div>
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex gap-5">
                    <div className="form-section">
                      <h2 className="text-base">Personal Data</h2>
                    </div>
                    <div className="form-section">
                      <h2 className="text-base">Important Data</h2>
                    </div>
                    <div className="form-section">
                      <h2 className="text-base">Education Data</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-4">Education Data</h1>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-row gap-5 mt-3">
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Education</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Education"
                          className="input input-bordered w-full max-w-xs bg-transparent"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Years</span>
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Years"
                            className="input input-bordered w-full max-w-xs bg-transparent"
                          />
                          <input
                            type="text"
                            placeholder="Years"
                            className="input input-bordered w-full max-w-xs bg-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-end gap-2 mt-5">
                    <div>
                      <Button
                        label="Previous"
                        classname={`${
                          mode === true ? "bg-dark-button" : "bg-primary"
                        } text-white px-10`}
                        onClick={handlePreviousClick}
                      />
                    </div>
                    <div>
                      <Button
                        label="Submit"
                        classname={`${
                          mode === true ? "bg-dark-button" : "bg-primary"
                        } text-white px-10`}
                        type="submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AddEducation;
