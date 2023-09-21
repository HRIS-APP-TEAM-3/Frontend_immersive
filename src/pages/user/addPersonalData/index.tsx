import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../../features/modeSlice";
import axios from "axios";
import Cookie from "js-cookie";

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

const AddUser = () => {
  const navigate = useNavigate();
  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();
  const [manajer, setManajer] = useState<any>([]);
  const [allDivision, setAllDivision] = useState<any>([]);
  const [allRole, setAllRole] = useState<any>([]);
  const token = Cookie.get("token");
  const userId = Cookie.get("id");

  //Data
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>(0);
  const [division, setDivision] = useState<number>();
  const [level, setLevel] = useState<string>('');
  const [userLeadId, setUserLeadId] = useState<number>();
  const [birthdayPlace, setBirthdayPlace] = useState<string>("");
  const [birthday, setBirthday] = useState<Date>();
  const [gender, setGender] = useState<string>("Male");
  const [religion, setReligion] = useState<string>("");
  const [file, setFile] = useState<any>(null);
  const [address, setAddress] = useState<string>("");
  console.log(division);

  const body = document.body;

  if (mode === true) {
    body.style.backgroundColor = "#313338";
  } else {
    body.style.backgroundColor = "#F2F2F2";
  }

  const handlePreviousClick = () => {
    navigate("/user/adduser");
  };

  const getManager = () => {
    axios
      .get("https://backendlagi.online/managers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setManajer(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDivision = () => {
    axios
      .get("https://backendlagi.online/divisions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllDivision(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRole = () => {
    axios
      .get("https://backendlagi.online/roles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllRole(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataPersonal = new FormData();
    formDataPersonal.append("firstName", firstName);
    formDataPersonal.append("lastName", lastName);
    formDataPersonal.append("email", email);
    formDataPersonal.append("phone", phone);
    formDataPersonal.append("division", division);
    formDataPersonal.append("level", level);
    formDataPersonal.append("birthdayPlace", birthdayPlace);
    formDataPersonal.append("birthday", birthday);
    formDataPersonal.append("gender", gender);
    formDataPersonal.append("religion", religion);
    formDataPersonal.append("file", file);
    formDataPersonal.append("address", address);
    formDataPersonal.append("user_lead_id", userLeadId);

    const formDataString = JSON.stringify(
      Object.fromEntries(formDataPersonal.entries())
    );

    localStorage.setItem("formDataPersonal", formDataString);

    navigate("/user/addimportantdata");
  };

  useEffect(() => {
    if (level === "1") {
      setDivision("1");
    } else if (level === "2") {
      setDivision("2");
    }

    getManager();
    getDivision();
    getRole();
  }, [level]);

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
                  <div className="flex-1 h-0.5 bg-gray-500"></div>
                  <div className="w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-500"></div>
                  <div className="w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center text-white font-bold">
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
                <h1 className="text-2xl font-bold mb-4">Personal data</h1>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-row gap-5 mt-3">
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text"> First Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs bg-transparent"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Last Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs bg-transparent"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 mt-3">
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text"> Email</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs bg-transparent"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Phone</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs bg-transparent"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row w-full gap-5 mt-3">
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text"> Level</span>
                        </label>
                        <select
                          className="select select-bordered bg-transparent"
                          value={level}
                          onChange={(e) => setLevel(e.target.value)}
                          required
                        >
                          <option
                            value=""
                            disabled
                            selected
                            hidden
                            className="text-black"
                          >
                            Pick one
                          </option>
                          {allRole &&
                            allRole.map((item) => {
                              return (
                                <option
                                  className="text-black"
                                  value={item.id}
                                  key={item.id}
                                >
                                  {item.name}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>

                    {level === "4" ? (
                      <div className="w-full">
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text"> Manager</span>
                          </label>
                          <select
                            className="select select-bordered bg-transparent"
                            value={division}
                            onChange={(e) => setUserLeadId(e.target.value)}
                            required
                          >
                            <option value='' disabled selected className="text-black">
                              Pick one
                            </option>
                            {manajer &&
                              manajer.map((item) => {
                                return (
                                  <option
                                    className="text-black"
                                    value={item.ID}
                                  >
                                    {item.FirstName} {item.LastName}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                        {manajer &&
                          manajer.map((item) => {
                            return (
                              <input
                                type="text"
                                className="hidden"
                                value={item.Division}
                                onChange={(e) => setDivision(e.target.value)}
                              />
                            );
                          })}
                      </div>
                    ) : level === "3" ? (
                      <div className="w-full">
                        <div className="form-control w-full max-w-xs">
                          <label className="label">
                            <span className="label-text"> Division</span>
                          </label>
                          <select
                            className="select select-bordered bg-transparent"
                            value={division}
                            onChange={(e) => setDivision(e.target.value)}
                            required
                          >
                            <option value='' disabled selected className="text-black">
                              Pick one
                            </option>
                            {allDivision &&
                              allDivision.map((item) => {
                                return (
                                  <option
                                    className="text-black"
                                    value={item.id}
                                  >
                                    {item.name}
                                  </option>
                                );
                              })}
                          </select>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-row gap-5 mt-3">
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text"> Place of Date</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Place of Date"
                          className="input input-bordered w-full max-w-xs bg-transparent "
                          value={birthdayPlace}
                          onChange={(e) => setBirthdayPlace(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Birthday</span>
                        </label>
                        <input
                          type="date"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs bg-transparent text-black"
                          value={birthday}
                          onChange={(e) => setBirthday(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 mt-3">
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Gender</span>
                        </label>
                        <div className="flex gap-5">
                          <label>
                            <input
                              type="checkbox"
                              name="genderMale"
                              value="Male"
                              onChange={(e) => setGender(e.target.value)}
                              checked={gender === "Male"}
                            />
                            Male
                          </label>
                          <label>
                            <input
                              type="checkbox"
                              name="genderFemale"
                              value="Female"
                              onChange={(e) => setGender(e.target.value)}
                              checked={gender === "Female"}
                            />
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="form-control w-full max-w-xs">
                        <label className="label">
                          <span className="label-text">Religion</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs bg-transparent"
                          value={religion}
                          onChange={(e) => setReligion(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Upload File</span>
                      </label>
                      <input
                        type="file"
                        className="file-input file-input-primary file-input-md bg-transparent max-w-3xl"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full mt-3">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Address</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-3xl bg-transparent"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
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
                        label="Next"
                        classname={`${
                          mode === true ? "bg-dark-button" : "bg-primary"
                        } text-white px-10`}
                        type="submit"
                      />
                    </div>
                  </div>
                </form>
                <img src="" alt="" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AddUser;
