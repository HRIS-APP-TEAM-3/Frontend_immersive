import React from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Button from "../../component/Button";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../features/modeSlice";
import Personal from "../../component/Personal";

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

const Dashboard = () => {

  const mode = useSelector((state: any) => state.mode.mode);
  const dispatch = useDispatch();

  const body = document.body

  if(mode === true){
    body.style.backgroundColor = '#313338';
  } else {
    body.style.backgroundColor = '#F2F2F2';
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

  const data = {
    labels,
    datasets: [
      {
        label: "Result Key",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Progress",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  ChartJS.register(ArcElement, Tooltip, Legend);

  const dataDonuts = {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        data: [12, 19],
        backgroundColor: ["rgba(22, 91, 170, 1)", "rgba(255, 99, 132, 1)"],
      },
    ],
  };

  return (
    <section>
      <div>
        <motion.div variants={animation} animate="visible" initial="hidden">
          <Navbar onClick={() => dispatch(toggleMode())} />
        </motion.div>
        <motion.div variants={animation} animate="visible" initial="hidden" className={`${mode === true ? 'bg-dark text-white' : 'bg-white'} h-[14vh] px-24 flex flex-col py-2.5`}>
          <motion.div variants={childAnimation} className="text-3xl font-bold">
            Welcome to HRIS
          </motion.div>
          <motion.div variants={childAnimation} className="text-xs mt-1">
            It’s Tuesday, 24 November
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <Sidebar height="h-[68vh]" />
        <motion.div variants={animation} initial='hidden' animate='visible' className="w-[80vw] flex flex-col">
          <Personal />
          <motion.div variants={childAnimation} className={`${mode === true ? 'bg-dark hover:bg-dark text-white' : 'bg-white hover:bg-white'} mx-10 p-6 rounded-b-lg rounded-tr-lg`}>
            <div className="text-center mb-4 text-[20px] font-semibold">
              Message
            </div>
            <div className="overflow-x-auto">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead className={`${mode === true ? 'bg-dark-button' : 'bg-primary'} text-white border-none`}>
                    <tr className="border-none ">
                      <th className="rounded-l-md"></th>
                      <th>Name</th>
                      <th>Request For</th>
                      <th className="rounded-r-md">Status</th>
                    </tr>
                  </thead>
                  <tbody className="border-none">
                    <tr className="border-none">
                      <th>1</th>
                      <td>Diskaa</td>
                      <td>Request Timeoff from Sunday , 3 September 2023</td>
                      <td>Pending</td>
                    </tr>
                    <tr className="border-none">
                      <th>2</th>
                      <td>Diskaa</td>
                      <td>Request Timeoff from Sunday , 3 September 2023</td>
                      <td>Pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
          <motion.div variants={childAnimation} className="grid grid-cols-3 gap-3 mt-5 mx-10 mb-10">
            <div className={`${mode === true ? 'bg-dark text-white' : 'bg-white'} p-3 rounded-lg w-full h-72`}>
              <div className="text-center mb-2 text-[16px] font-semibold">
                Result Target
              </div>
              <motion.div whileHover={{ scale: 1.01 }} className="mx-auto text-center">
                <Line options={options} data={data} />
              </motion.div>
            </div>
            <div className={`${mode === true ? 'bg-dark text-white' : 'bg-white'} p-3 rounded-lg w-full h-72`}>
              <div className="text-center mb-2 text-[16px] font-semibold">
                Job Level
              </div>
              <div className="mx-auto text-center mt-5">
                <progress
                  className="progress progress-primary w-56"
                  value={20}
                  max="100"
                ></progress>
                <progress
                  className="progress progress-secondary w-56 "
                  value={80}
                  max="100"
                ></progress>
              </div>
              <div className="flex flex-row text-center mx-10 mt-5 place-items-center justify-between">
                <div className="w-7 h-2 bg-primary"></div>{" "}
                <span className="text-[14px] text-gray-600">Employee</span>
                <div className="w-7 h-2 bg-secondary"></div>{" "}
                <span className="text-[14px] text-gray-600">Manajer</span>
              </div>
            </div>
            <div className={`${mode === true ? 'bg-dark text-white' : 'bg-white'} p-3 rounded-lg w-full h-72`}>
              <div className="text-center mb-2 text-[16px] font-semibold">
                Gender Diversity
              </div>
              <div className="w-60 h-60 mx-auto">
                <Doughnut data={dataDonuts} options={options} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
