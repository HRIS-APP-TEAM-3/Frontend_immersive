import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../../features/modeSlice";
import Cookie from "js-cookie";
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

const AddEducation = () => {
  const navigate = useNavigate();
  const token = Cookie.get("token");

  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  //Data
  const [name, setName] = useState<string>("");
  const [startYear, setStartYear] = useState<number>(0);
  const [graduateYear, setGraduateYear] = useState<number>(0);
  const personalData = JSON.parse(localStorage.getItem("formDataPersonal"));
  const importantData = JSON.parse(localStorage.getItem("formDataImportant"));
  const profile_photo = sessionStorage.getItem('temporaryImage')

  const body = document.body;

  if (mode === true) {
    body.style.backgroundColor = "#313338";
  } else {
    body.style.backgroundColor = "#F2F2F2";
  }

  const handlePreviousClick = () => {
    navigate("/user/addimportantdata");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData: any = new FormData();

    const userLead: number = parseInt(personalData.user_lead_id)
    const roleID: number = parseInt(personalData.level)
    const divisionID: number = parseInt(personalData.division)
  
    formData.append('first_name', personalData.firstName);
    formData.append('last_name', personalData.lastName);
    formData.append('email', personalData.email);
    formData.append('phone_number', personalData.phone);
    formData.append('address', personalData.address);
    formData.append('profile_photo', profile_photo);
    formData.append('user_lead_id', userLead);
    formData.append('role_id', roleID);
    formData.append('division_id', divisionID);
    
    // // Objek user_important_data
    // const userImportantData = {
    //   birth_place: personalData.birthdayPlace,
    //   birth_date: personalData.birthday,
    //   emergency_name: importantData.emergencyName,
    //   emergency_status: importantData.emergencyStatus,
    //   emergency_phone: importantData.emergencyContact,
    //   npwp: importantData.npwp,
    //   bpjs: importantData.bpjs,
    //   religion: personalData.religion,
    //   gender: personalData.gender,
    // };

    // formData.append('user_important_data', JSON.stringify(userImportantData));
  
    // // Array user_education_data
    // const userEducationData = [
    //   {
    //     name: name,
    //     start_year: startYear,
    //     graduate_year: graduateYear,
    //   },
    // ];
  
    // formData.append('user_education_data', JSON.stringify(userEducationData));
  
    try {
      const responseData = await axios.post('https://backendlagi.online/users', 
      formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": 'multipart/form-data'
        },
      })

      localStorage.removeItem('formDataPersonal');
      localStorage.removeItem('formDataImportant');
      sessionStorage.removeItem('temporaryImage');
      navigate('/user');

    } catch (error) {
      console.log(error);
    }
  };
  

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
              <div className="hidden md:flex flex-col justify-center">
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
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                            value={startYear}
                            onChange={(e) => setStartYear(e.target.value)}
                          />
                          <input
                            type="text"
                            placeholder="Years"
                            className="input input-bordered w-full max-w-xs bg-transparent"
                            value={graduateYear}
                            onChange={(e) => setGraduateYear(e.target.value)}
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
