import React from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import InputSearch from "../../../component/InputSearch";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../../features/modeSlice";

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


const ListEmployee = () => {

    const navigate = useNavigate()

    const mode = useSelector((state: any) => state.mode.mode);
    const dispatch = useDispatch();

    const body = document.body

    if (mode === true) {
        body.style.backgroundColor = '#313338';
    } else {
        body.style.backgroundColor = '#F2F2F2';
    }



    const handleAddUser = () => {
        navigate('/employee/personalemployee')
    }

    return (
        <section>
            <div>
                <Navbar onClick={() => dispatch(toggleMode())} />
            </div>
            <div className="mt-10 px-10 flex flex-row">
                <Sidebar height="h-[80vh]" />
                <motion.div variants={animation} initial='hidden' animate='visible' className="w-[80vw] flex flex-col">
                    <motion.div variants={childAnimation} className={`${mode === true ? 'bg-dark hover:bg-dark text-white' : 'bg-white hover:bg-white'} mx-10 p-6 rounded-b-lg rounded-tr-lg`}>
                        <div className="flex flex-col text-end">
                            <div>
                                <Button
                                    label="Add Employee"
                                    classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white px-10`}
                                    onClick={() => handleAddUser()}
                                />
                            </div>
                            <div className="flex flex-row justify-end mt-3">
                                <InputSearch placeholder="Search User" />
                            </div>
                            <div>
                                <div className="overflow-x-auto mt-4">
                                    <table className="table ">
                                        <thead className={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white border-none`}>
                                            <tr className="border-none ">
                                                <th className="rounded-l-md">Photo</th>
                                                <th>Employee</th>
                                                <th>Email</th>
                                                <th>Division</th>
                                                <th>Job Level</th>
                                                <th>Join Date</th>
                                                <th>Gender</th>
                                                <th className="rounded-r-md">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-none">
                                            <tr className="border-none">
                                                <th><img src="./diskabotak.jpg" alt="Foto" width="50" height="50" /></th>
                                                <td>Diska Ganteng</td>
                                                <td>siganteng@gmail.com</td>
                                                <td>Frontend</td>
                                                <td>Manajer</td>
                                                <td>31-Feb</td>
                                                <td>LANANG</td>
                                                <td>
                                                    <div className="flex flex-row gap-2">
                                                        <div >
                                                            <a href="" className={mode === true ? 'text-white hover:text-white' : 'text-black'}>
                                                                <i className="fa-regular fa-pen-to-square"></i>
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="" className={mode === true ? 'text-white hover:text-white' : 'text-black'}>
                                                                <i className="fa-solid fa-trash"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="flex flex-row justify-end gap-2 mt-5">
                                        <div>
                                            <Button
                                                label="Previous"
                                                classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white px-10`}
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                label="Next"
                                                classname={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white px-10`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
};

export default ListEmployee;
