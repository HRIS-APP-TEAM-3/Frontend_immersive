/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import Popup from "../../../component/Popup";
import { motion } from "framer-motion";
import TopCard from "../../../component/TopCard";
import Personal from "../../../component/Personal";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../../features/modeSlice";
import Input from "../../../component/Input";
import Cookie from "js-cookie";
import axios from "axios";
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

const TimeOff = () => {
  const [timeOff, setAddTimeOff] = useState<boolean>(false);
  const [popupDetail, setPopupDetail] = useState<boolean>(false);

  const [editTimeOff, setEditTimeOff] = useState<boolean>(false);

  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();
  const token = Cookie.get("token");

  const [type, setType] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [note, setNote] = useState<string>("");
  console.log(startDate);

  const [data, setData] = useState<any>([]);
  const [editdata, setEditData] = useState<any>([]);

  const typeOpsion = ["CTHN", "CEMRG"];
  const selectOpsion = editdata.map((item) => item.policy_code);
  const unSelectOption = typeOpsion.filter(
    (option) => !selectOpsion.includes(option)
  );

  const getData = () => {
    axios
      .get(`https://node.backendlagi.online/leave`, {
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

  const addData = () => {
    axios
      .post(
        "https://node.backendlagi.online/leave",
        {
          start_date: startDate,
          end_date: endDate,
          policy_code: type,
          notes: note,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        getData();
        setAddTimeOff(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateData = (index: string) => {
    axios
      .put(`https://node.backendlagi.online/leave/${index}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEditTimeOff(false);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEditData = (index: string) => {
    setEditTimeOff(!editTimeOff);
    axios
      .get(`https://node.backendlagi.online/leave/${index}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setEditData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeData = (index: string) => {
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
          .delete(`https://node.backendlagi.online/leave/${index}`, {
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

  const handleAdd = () => {
    setAddTimeOff(!timeOff);
  };

  const handleDetail = (note: string) => {
    setPopupDetail(!popupDetail);
    setNote(note);
  };

  const body = document.body;

  if (mode === true) {
    body.style.backgroundColor = "#313338";
  } else {
    body.style.backgroundColor = "#F2F2F2";
  }

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
                    label="Request Timeoff"
                    classname={`${
                      mode === true ? "bg-dark-button" : "bg-primary"
                    } text-white`}
                    onClick={() => handleAdd()}
                  />
                </div>
                <div>
                  <div className="overflow-x-auto mt-4">
                    <table className="table">
                      <thead
                        className={`${
                          mode === true ? "bg-dark-button" : "bg-primary"
                        } text-white border-none`}
                      >
                        <tr className="border-none">
                          <th className="rounded-l-md">No</th>
                          <th>Created At</th>
                          <th>Policy Code</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Notes</th>
                          <th>Status</th>
                          <th className="rounded-r-md">Action</th>
                        </tr>
                      </thead>
                      <tbody className="border-none">
                        {data &&
                          data.map((item, index) => {
                            return (
                              <tr className="border-none" key={index}>
                                <td>{index}</td>
                                <td>{item?.updated_at}</td>
                                <td>{item.policy_code}</td>
                                <td>{item.start_date}</td>
                                <td>{item.end_date}</td>
                                <td>
                                  <button
                                    onClick={() => handleDetail(item.notes)}
                                    className="hover:outline-none hover:border-white"
                                  >
                                    <i className="fa-solid fa-eye"></i>
                                  </button>
                                </td>
                                <td>
                                  {item.lead_approval &&
                                  item.hr_approval === true
                                    ? "Sukses"
                                    : item.lead_approval &&
                                      item.hr_approval === false
                                    ? "Cancel"
                                    : item.lead_approval === true &&
                                      item.hr_approval === false
                                    ? "Cancel"
                                    : "Cancel"}
                                </td>
                                <td>
                                  <div className="flex flex-row gap-2">
                                    <div>
                                      <button
                                        onClick={() => getEditData(item.index)}
                                        className={
                                          mode === true
                                            ? "text-white hover:text-white"
                                            : "text-black"
                                        }
                                      >
                                        <i className="fa-regular fa-pen-to-square"></i>
                                      </button>
                                    </div>
                                    <div>
                                      <button
                                        className={
                                          mode === true
                                            ? "text-white hover:text-white"
                                            : "text-black"
                                        }
                                        onClick={() => removeData(item.index)}
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
          </motion.div>
          <div>
            <Popup isOpen={timeOff} onClose={() => setAddTimeOff(false)}>
              <div className="flex flex-col px-7 py-5">
                <div className="text-center text-[24px] font-semibold">
                  TimeOff
                </div>
                <div className="flex flex-row gap-5 mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs ">
                      <label className="label">
                        <span className="label-text">Choose Time Out</span>
                      </label>
                      <select
                        className="select select-bordered bg-transparent"
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option selected disabled value="">
                          Pick one
                        </option>
                        <option value="CTHN">Cuti Tahunan</option>
                        <option value="CEMRG">Emergency</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mt-3">
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Start Date</span>
                      </label>
                      <input
                        type="date"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">End Date</span>
                      </label>
                      <input
                        type="date"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs bg-transparent"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full my-5 ">
                  <label className="label">
                    <span className="label-text">Notes</span>
                  </label>
                  <Input
                    placeholder="Notes"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
                <div className="mt-8">
                  <Button
                    label="Next"
                    classname="bg-primary text-white w-full"
                    onClick={() => addData()}
                  />
                </div>
              </div>
            </Popup>
          </div>
          <div>
            <Popup isOpen={editTimeOff} onClose={() => setEditTimeOff(false)}>
              <div className="flex flex-col px-7 py-5">
                <div className="text-center text-[24px] font-semibold">
                  Edit TimeOff
                </div>
                {editdata &&
                  editdata.map((item, index) => {
                    return (
                      <div>
                        <div key={index}>
                          <div className="flex flex-row gap-5 mt-3">
                            <div className="w-full">
                              <div className="form-control w-full max-w-xs ">
                                <label className="label">
                                  <span className="label-text">
                                    Choose Time Out
                                  </span>
                                </label>
                                <select
                                  className="select select-bordered bg-transparent"
                                  onChange={(e) => setType(e.target.value)}
                                >
                                  {selectOpsion &&
                                    selectOpsion.map((item, index) => {
                                      return (
                                        <option
                                          value={item}
                                          selected
                                          key={index}
                                        >
                                          {item === "CTHN"
                                            ? "Cuti Tahunan"
                                            : "Cuti Emergency"}
                                        </option>
                                      );
                                    })}
                                  {unSelectOption &&
                                    unSelectOption.map((item, index) => {
                                      return (
                                        <option value={item} key={index}>
                                          {item === "CTHN"
                                            ? "Cuti Tahunan"
                                            : "Cuti Emergency"}
                                        </option>
                                      );
                                    })}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-5 mt-3">
                            <div className="w-full">
                              <div className="form-control w-full max-w-xs">
                                <label className="label">
                                  <span className="label-text">Start Date</span>
                                </label>
                                <input
                                  type="date"
                                  placeholder="Type here"
                                  className="input input-bordered w-full max-w-xs bg-transparent"
                                  value={item.start_date}
                                  onChange={(e) => setStartDate(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="form-control w-full max-w-xs">
                                <label className="label">
                                  <span className="label-text">End Date</span>
                                </label>
                                <input
                                  type="date"
                                  placeholder="Type here"
                                  className="input input-bordered w-full max-w-xs bg-transparent"
                                  value={item.end_date}
                                  onChange={(e) => setEndDate(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-full my-5 ">
                            <label className="label">
                              <span className="label-text">Notes</span>
                            </label>
                            <Input
                              placeholder="Notes"
                              value={item.notes}
                              onChange={(e) => setNote(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="mt-8">
                          <Button
                            label="Next"
                            classname="bg-primary text-white w-full"
                            onClick={() => updateData(item.index)}
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
                  Notes
                </div>
                <div className="mt-4 leading-7">
                  <div className="">
                    <p>{note}</p>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimeOff;
