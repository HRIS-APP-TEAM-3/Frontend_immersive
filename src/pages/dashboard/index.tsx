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
const Dashboard = () => {
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
        <Navbar />
        <div className="bg-white h-[14vh] px-24 flex flex-col py-2.5">
          <div className="text-3xl font-bold">Welcome to HRIS</div>
          <div className="text-xs mt-1">It’s Tuesday, 24 November</div>
        </div>
      </div>
      <div className="mt-10 px-10 flex flex-row">
        <Sidebar height="h-[68vh]"/>
        <div className="w-[80vw] flex flex-col">
          <div className="flex flex-row justify-between mr-10">
            <div className="mx-10 mb-5 flex flex-row place-items-center">
              <div className="w-12 h-12 rounded-full bg-white mr-4 flex place-items-center">
                <img
                  src="../../../public/logo.png"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-[18px] font-semibold">Denson Patibang</div>
                <div className="text-[12px]">Leader : Teknis IT</div>
              </div>
            </div>
            <div>
              <Button
                label="Logout"
                icon={<i className="fa-solid fa-right-from-bracket mr-2"></i>}
                classname="bg-white text-gray-400 hover:bg-gray-200"
              />
            </div>
          </div>
          <div className="bg-white mx-10 p-6 rounded-lg ">
            <div className="text-center mb-4 text-[20px] font-semibold">
              Message
            </div>
            <div className="overflow-x-auto">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead className="bg-primary text-white border-none ">
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
          </div>
          <div className="grid grid-cols-3 gap-3 mt-5 mx-10 mb-10">
            <div className="bg-white p-3 rounded-lg w-full h-72">
              <div className="text-center mb-2 text-[16px] font-semibold">
                Result Target
              </div>
              <div className="mx-auto text-center">
                <Line options={options} data={data} />
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg w-full h-72">
              <div className="text-center mb-2 text-[16px] font-semibold">
                Employee Status
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
                <div className="w-7 h-2 bg-primary"></div> <span className="text-[14px] text-gray-600">Employee</span>
                <div className="w-7 h-2 bg-secondary"></div> <span className="text-[14px] text-gray-600">Manajer</span>
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg w-full h-72 ">
              <div className="text-center mb-2 text-[16px] font-semibold">
                Gender Diversity
              </div>
              <div className="w-60 h-60 mx-auto">
                <Doughnut data={dataDonuts} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
