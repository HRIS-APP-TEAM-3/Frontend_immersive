import React, { useEffect, useState } from "react";
import Navbar from "../../../../component/Navbar";
import Sidebar from "../../../../component/Sidebar";
import Button from "../../../../component/Button";
import Popup from "../../../../component/Popup";
import Input from "../../../../component/Input";
import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux/es/exports";
import { toggleMode } from "../../../../features/modeSlice";
import Personal from "../../../../component/Personal";
import TopCard from "../../../../component/TopCard";
import axios from "axios";
import Cookie from "js-cookie";
import { faL } from "@fortawesome/free-solid-svg-icons";
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

const ListReimbursement = () => {
  const [popupDetail, setPopupDetail] = useState<boolean>(false);
  const [addReimbursement, setAddReimbursement] = useState<boolean>(false);
  const [updateReimbursement, setUpdateReimbursement] =
    useState<boolean>(false);
  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  const [data, setData] = useState<any>([]);
  const [updateData, setUpdateData] = useState<any>([]);

  const token = Cookie.get("token");
  const role = Cookie.get("role");

  //Data
  const [reimbursement, setReimbursement] = useState<string>("");
  const [file, setFile] = useState<any>();
  const [benefit, setBenefit] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  const [notes, setNotes] = useState<string>("");

  // Select Option
  const reimbursementType = ["Transportation", "Medical CheckUp"];
  // const selectReimbursement = updateData.map((item) => item.reimburse_name);

  const selectReimbursement = [];
  for (const item of updateData) {
    selectReimbursement.push(item.reimburse_name);
  }
  console.log(selectReimbursement);

  const unSelectReimbursement = reimbursementType.filter(
    (item) => !selectReimbursement.includes(item)
  );

  const body = document.body;

  if (mode === true) {
    body.style.backgroundColor = "#313338";
  } else {
    body.style.backgroundColor = "#F2F2F2";
  }

  const getData = () => {
    axios
      .get(`https://node.backendlagi.online/reimbursement`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDetail = () => {
    setPopupDetail(!popupDetail);
  };

  const handleAdd = () => {
    axios
      .post(
        "https://node.backendlagi.online/reimbursement",
        {
          reimburse_name: reimbursement,
          benefit_name: benefit,
          notes: notes,
          lead_approval: true,
          hr_approval: true,
          request_amount: parseInt(amount),
          paid_amount: 0,
          file_name: "medical_receipt.pdf",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Berhasil Menambahkan",
          showConfirmButton: false,
          timer: 1500,
        })
          .then((res) => {
            setAddReimbursement(false);
            getData();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUpdate = (index: string) => {
    setUpdateReimbursement(!updateReimbursement);
    axios
      .get(`https://node.backendlagi.online/reimbursement/${index}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUpdateData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateDataReimburs = (index: string) => {
    axios
      .put(
        `https://node.backendlagi.online/reimbursement/${index}`,
        {
          reimburse_name: reimbursement,
          benefit_name: benefit,
          notes: notes,
          lead_approval: true,
          hr_approval: true,
          request_amount: parseInt(amount),
          paid_amount: 0,
          file_name: "medical_receipt.pdf",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: `Success Update`,
          timer: 1500,
        })
          .then((res) => {
            setUpdateReimbursement(false);
            getData();
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  const deleteData = (index: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .delete(`https://node.backendlagi.online/reimbursement/${index}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            getData();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

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
              <div className="flex flex-col">
                <div className="text-end">
                  <Button
                    label="Request Reimbursement"
                    classname={`${
                      mode === true ? "bg-dark-button" : "bg-primary"
                    } text-white`}
                    onClick={() => setAddReimbursement(!addReimbursement)}
                  />
                </div>
                <div className="flex flex-row justify-center gap-10">
                  <a
                    href="/reimbursement"
                    className={
                      mode === true ? "text-white hover:text-white" : ""
                    }
                  >
                    Reimbursement Request
                  </a>
                  <div>|</div>
                  <a
                    href="/reimbursement-taken"
                    className={
                      mode === true ? "text-white hover:text-white" : ""
                    }
                  >
                    Reimbursement Taken
                  </a>
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
                          <th className="rounded-l-md">Transaction ID</th>
                          <th>Reimbursement</th>
                          <th>Created At</th>
                          <th>Detail</th>
                          <th>Status</th>
                          <th className="rounded-r-md">Action</th>
                        </tr>
                      </thead>
                      <tbody className="border-none">
                        {data &&
                          data.map((item, index) => {
                            return (
                              <tr className="border-none" key={index}>
                                <td>{item._id}</td>
                                <td>{item.benefit_name}</td>
                                <td>{item.updated_at}</td>
                                <td>
                                  <button
                                    onClick={() => handleDetail()}
                                    className="hover:outline-none hover:border-white"
                                  >
                                    <i className="fa-solid fa-eye"></i>
                                  </button>
                                </td>
                                <td>Pending</td>
                                <td>
                                  <div className="flex flex-row gap-2">
                                    <div>
                                      <button
                                        onClick={() => getUpdate(item.index)}
                                        className={
                                          mode === true
                                            ? "text-white hover:text-white"
                                            : "text-black"
                                        }
                                      >
                                        <i className="fa-regular fa-pen-to-square"></i>
                                      </button>
                                    </div>
                                    {role === "Manager" ? (
                                      <div>
                                        <button
                                          onClick={() => deleteData(item.index)}
                                          className={
                                            mode === true
                                              ? "text-white hover:text-white"
                                              : "text-black"
                                          }
                                        >
                                          <i className="fa-solid fa-trash"></i>
                                        </button>
                                      </div>
                                    ) : (
                                      ""
                                    )}
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
                          mode === true ? "bg-dark-button" : "bg-[#CACACA]"
                        } text-white px-10`}
                      />
                    </div>
                    <div>
                      <Button
                        label="Next"
                        classname={`${
                          mode === true ? "bg-dark-button" : "bg-primary"
                        } text-white px-10`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div>
            <Popup
              isOpen={addReimbursement}
              onClose={() => setAddReimbursement(false)}
            >
              <div className="flex flex-col px-7 py-5">
                <div className="text-center text-[24px] font-semibold">
                  Request Reimbursement
                </div>
                <div className="flex flex-row w-full mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs ">
                      <label className="label">
                        <span className="label-text">Reimbursement Name</span>
                      </label>
                      <select
                        className="select select-bordered bg-transparent"
                        onChange={(e) => setReimbursement(e.target.value)}
                      >
                        <option value="" disabled selected>
                          Pick one
                        </option>
                        <option value="Transportation">Transportation</option>
                        <option value="Medical CheckUp">Medical CheckUp</option>
                      </select>
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
                      className={`file-input ${
                        mode === true ? "bg-black" : "file-input-primary"
                      } file-input-md bg-transparent`}
                      value={file}
                      onChange={(e) => setFile(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="label">
                    <span className="label-text">Total Paid</span>
                  </label>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead
                        className={`${
                          mode === true ? "bg-dark-button" : "bg-primary"
                        } text-white border-none`}
                      >
                        <tr className="border-none ">
                          <th className="rounded-l-md">Benefit Name</th>
                          <th>Request Ammount</th>
                          <th className="rounded-r-md">Description</th>
                        </tr>
                      </thead>
                      <tbody className="border-none px-0">
                        <tr className="border-none">
                          <td>
                            {reimbursement &&
                            reimbursement === "Transportation" ? (
                              <select
                                className={`  select select-bordered bg-transparent focus:border-none`}
                                onChange={(e) => setBenefit(e.target.value)}
                              >
                                <option
                                  disabled
                                  selected
                                  className={mode === true ? "text-black" : ""}
                                  value=""
                                >
                                  Select Benefit --
                                </option>
                                <option
                                  className={mode === true ? "text-black" : ""}
                                  value="Transportation"
                                >
                                  Transportation
                                </option>
                              </select>
                            ) : (
                              <select
                                className={`  select select-bordered bg-transparent focus:border-none`}
                                onChange={(e) => setBenefit(e.target.value)}
                              >
                                <option
                                  disabled
                                  selected
                                  className={mode === true ? "text-black" : ""}
                                  value=""
                                >
                                  Select Benefit --
                                </option>
                                <option
                                  className={mode === true ? "text-black" : ""}
                                  value="Rawat Inap"
                                >
                                  Rawat Inap
                                </option>
                                <option
                                  className={mode === true ? "text-black" : ""}
                                  value="Rawat Inap"
                                >
                                  Rawat Jalan
                                </option>
                              </select>
                            )}
                          </td>
                          <td>
                            <Input
                              placeholder="Input Amount"
                              type="number"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                          </td>
                          <td>
                            <Input
                              placeholder="Input Description"
                              type="text"
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    label="Next"
                    classname={`${
                      mode === true ? "bg-dark-button" : "bg-primary"
                    } text-white w-full`}
                    onClick={() => handleAdd()}
                  />
                </div>
              </div>
            </Popup>
          </div>
          <div>
            <Popup
              isOpen={updateReimbursement}
              onClose={() => setUpdateReimbursement(false)}
            >
              <div className="flex flex-col px-7 py-5">
                <div className="text-center text-[24px] font-semibold">
                  Edit Request Reimbursement
                </div>
                {updateData &&
                  updateData.map((item, index) => {
                    return (
                      <div>
                        <div className="flex flex-row w-full mt-3">
                          <div className="w-full">
                            <div className="form-control w-full max-w-xs ">
                              <label className="label">
                                <span className="label-text">
                                  Reimbursement Name
                                </span>
                              </label>
                              <select
                                className="select select-bordered bg-transparent"
                                onChange={(e) =>
                                  setReimbursement(e.target.value)
                                }
                              >
                                <option value="" disabled>
                                  Pick one
                                </option>
                                {selectReimbursement &&
                                  selectReimbursement.map((item, index) => {
                                    return (
                                      <option value={item} selected>
                                        {item}
                                      </option>
                                    );
                                  })}
                                {unSelectReimbursement &&
                                  unSelectReimbursement.map((item, index) => {
                                    return <option value={item}>{item}</option>;
                                  })}
                              </select>
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
                              className={`file-input ${
                                mode === true
                                  ? "bg-black"
                                  : "file-input-primary"
                              } file-input-md bg-transparent`}
                              value={file}
                              onChange={(e) => setFile(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="mt-6">
                          <label className="label">
                            <span className="label-text">Total Paid</span>
                          </label>
                          <div className="overflow-x-auto">
                            <table className="table">
                              <thead
                                className={`${
                                  mode === true
                                    ? "bg-dark-button"
                                    : "bg-primary"
                                } text-white border-none`}
                              >
                                <tr className="border-none ">
                                  <th className="rounded-l-md">Benefit Name</th>
                                  <th>Request Ammount</th>
                                  <th className="rounded-r-md">Description</th>
                                </tr>
                              </thead>
                              <tbody className="border-none px-0">
                                <tr className="border-none">
                                  <td>
                                    {reimbursement &&
                                    reimbursement === "Transportation" ? (
                                      <select
                                        className={`  select select-bordered bg-transparent focus:border-none`}
                                        onChange={(e) =>
                                          setBenefit(e.target.value)
                                        }
                                      >
                                        <option
                                          disabled
                                          selected
                                          className={
                                            mode === true ? "text-black" : ""
                                          }
                                          value=""
                                        >
                                          Select Benefit --
                                        </option>
                                        <option
                                          className={
                                            mode === true ? "text-black" : ""
                                          }
                                          value="Transportation"
                                        >
                                          Transportation
                                        </option>
                                      </select>
                                    ) : (
                                      <select
                                        className={`  select select-bordered bg-transparent focus:border-none`}
                                        onChange={(e) =>
                                          setBenefit(e.target.value)
                                        }
                                      >
                                        <option
                                          disabled
                                          selected
                                          className={
                                            mode === true ? "text-black" : ""
                                          }
                                          value=""
                                        >
                                          Select Benefit --
                                        </option>
                                        <option
                                          className={
                                            mode === true ? "text-black" : ""
                                          }
                                          value="Rawat Inap"
                                        >
                                          Rawat Inap
                                        </option>
                                        <option
                                          className={
                                            mode === true ? "text-black" : ""
                                          }
                                          value="Rawat Inap"
                                        >
                                          Rawat Jalan
                                        </option>
                                      </select>
                                    )}
                                  </td>
                                  <td>
                                    <Input
                                      placeholder="Input Amount"
                                      type="number"
                                      value={item.request_amount}
                                      onChange={(e) =>
                                        setAmount(e.target.value)
                                      }
                                    />
                                  </td>
                                  <td>
                                    <Input
                                      placeholder="Input Description"
                                      type="text"
                                      value={item.notes}
                                      onChange={(e) => setNotes(e.target.value)}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="mt-8">
                          <Button
                            label="Next"
                            classname={`${
                              mode === true ? "bg-dark-button" : "bg-primary"
                            } text-white w-full`}
                            onClick={() => updateDataReimburs()}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </Popup>
          </div>
          <div>
            <Popup isOpen={popupDetail} onClose={() => setPopupDetail(false)}>
              <div className="flex flex-col px-7 py-5">
                <div className="text-center text-[24px] font-semibold">
                  Reimbursement Detail
                </div>
                <div className="mt-4 leading-7">
                  <div className="grid grid-cols-2 gap-24">
                    <div>Transaction ID :</div>
                    <div>Reimbursement Name :</div>
                  </div>
                  <div className="grid grid-cols-2 gap-24">
                    <div>1131414131231313</div>
                    <div>Medical Check Up</div>
                  </div>
                </div>
                <div className="mt-6 leading-7">
                  <div className="grid grid-cols-2 gap-24">
                    <div>Employee Name :</div>
                    <div>
                      File Attached :{" "}
                      <span>
                        <a
                          href=""
                          className={mode === true ? "text-white" : ""}
                        >
                          <i className="fa-solid fa-folder"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-24">
                    <div>Denson Patibang</div>
                    <div>
                      Status : <span>Pending</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div>Notes :</div>
                  <div>Melakukan pembayaran Check Up</div>
                </div>
                <div className="mt-6">
                  <div>Total Paid :</div>
                  <div className="text-[24px] font-semibold">Rp. 1.000.000</div>
                </div>
              </div>
            </Popup>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ListReimbursement;
