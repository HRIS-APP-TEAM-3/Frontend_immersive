import React, { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import InputSearch from "../../../component/InputSearch";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../../features/modeSlice";
import axios from "axios";
import Cookie from "js-cookie";
import Swal from "sweetalert2";

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
  const [dataPage, setDataPage] = useState<boolean>();
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any>([]);

  const [search, setSearch] = useState<any>([]);

  const token = Cookie.get("token");
  const role = Cookie.get("role");

  const navigate = useNavigate();
  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();
  const body = document.body;

  if (mode === true) {
    body.style.backgroundColor = "#313338";
  } else {
    body.style.backgroundColor = "#F2F2F2";
  }

  const middleware = () => {
    if (role != "Superadmin" && role != "Admin") {
      navigate("/dashboard");

      if (token === undefined) {
        navigate("/");
      }
    }
  };

  const handleAddUser = () => {
    navigate("/user/adduser");
  };

  const getData = () => {
    axios
      .get(`https://backendlagi.online/users?page=${page}&itemPerPage=5`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res?.data?.data);
        setDataPage(res?.data?.next);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditUser = (id: string) => {
    navigate(`/user/update-adduser/${id}`, {
      state: {
        id: id,
      }
    });
  };

  const handleDeleteUser = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://backendlagi.online/users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            getData();
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  };

  const nextPage = () => {
    if (dataPage === true) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    getData();
    middleware();
  }, [page]);

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
            <div className="flex flex-col text-end">
              <div>
                <Button
                  label="Add User"
                  classname={`${
                    mode === true ? "bg-dark-button" : "bg-primary"
                  } text-white px-10`}
                  onClick={() => handleAddUser()}
                />
              </div>
              <div className="flex flex-row justify-end mt-3">
                <InputSearch placeholder="Search User" />
              </div>
              <div>
                <div className="overflow-x-auto mt-4">
                  <table className="table ">
                    <thead
                      className={`${
                        mode === true ? "bg-dark-button" : "bg-primary"
                      } text-white border-none`}
                    >
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
                      {data &&
                        data.map((item, index) => {
                          return (
                            <tr className="border-none" key={index}>
                              <th>{index + 1} </th>
                              <td>
                                {item.first_name} {item.last_name}
                              </td>
                              <td>{item.email}</td>
                              <td>{item.division.name}</td>
                              <td>{item.role.name}</td>
                              <td>
                                <div className="flex flex-row gap-2">
                                  <div>
                                    <button
                                      className={`${
                                        mode === true
                                          ? "text-white hover:text-white"
                                          : "text-black"
                                      } p-0 hover:border-none focus:border-none`}
                                      onClick={() => handleEditUser(item.id)}
                                    >
                                      <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                  </div>
                                  <div>
                                    <button
                                      className={`${
                                        mode === true
                                          ? "text-white hover:text-white"
                                          : "text-black"
                                      } p-0 hover:border-none focus:border-none`}
                                      onClick={() => handleDeleteUser(item.id)}
                                    >
                                      <i className="fa-solid fa-trash"></i>
                                    </button>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-row justify-end gap-2 mt-5">
                  <div>
                    <Button
                      label="Previous"
                      classname={`${
                        mode === true
                          ? "bg-dark-button"
                          : `${
                              page > 1
                                ? "bg-primary"
                                : "bg-gray-500 cursor-not-allowed"
                            }`
                      } text-white px-10`}
                      onClick={() => prevPage()}
                    />
                  </div>
                  <div>
                    <Button
                      label="Next"
                      classname={`${
                        mode === true
                          ? "bg-dark-button"
                          : `${
                              dataPage === true
                                ? "bg-primary"
                                : "bg-gray-500 cursor-not-allowed"
                            }`
                      } text-white px-10`}
                      onClick={() => nextPage()}
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
