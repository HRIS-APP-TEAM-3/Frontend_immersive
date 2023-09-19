import React from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import InputSearch from "../../../component/InputSearch";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

const ListUser = () => {
  const navigate = useNavigate()

  const handleAddUser = () => {
    navigate('/user/adduser')
  }

  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <Sidebar height="h-[80vh]" />
        <motion.div variants={animation} initial='hidden' animate='visible' className="w-[80vw] flex flex-col">
          <motion.div variants={childAnimation} className="bg-white mx-10 p-6 rounded-lg ">
            <div className="flex flex-col text-end">
              <div>
                <Button
                  label="Add User"
                  classname="bg-primary text-white px-10"
                  onClick={() => handleAddUser()}
                />
              </div>
              <div className="flex flex-row justify-end mt-3">
                <InputSearch placeholder="Search User" />
              </div>
              <div>
                <div className="overflow-x-auto mt-4">
                  <table className="table ">
                    <thead className="bg-primary text-white border-none ">
                      <tr className="border-none ">
                        <th className="rounded-l-md">No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Division</th>
                        <th>Job Level</th>
                        <th className="rounded-r-md">Action</th>
                      </tr>
                    </thead>
                    <tbody className="border-none">
                      <tr className="border-none">
                        <th>1</th>
                        <td>Denson Patibang</td>
                        <td>denson753@gmail.com</td>
                        <td>Frontend</td>
                        <td>Manajer</td>
                        <td>
                          <div className="flex flex-row gap-2">
                            <div >
                              <a href="" className="text-black">
                                <i className="fa-regular fa-pen-to-square"></i>
                              </a>
                            </div>
                            <div>
                              <a href="" className="text-black">
                                <i className="fa-solid fa-trash"></i>
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                  <div className="flex flex-row justify-end gap-2 mt-5">
                    <div>
                        <Button
                          label="Previous"
                          classname="bg-primary text-white px-10"
                        />
                    </div>
                    <div>
                        <Button
                          label="Next"
                          classname="bg-primary text-white px-10"
                        />
                    </div>
                  </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ListUser;
