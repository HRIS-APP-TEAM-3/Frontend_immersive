import { useState } from "react";
import Navbar from "../../../component/Navbar";
import Sidebar from "../../../component/Sidebar";
import Button from "../../../component/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const HistoryTimeOff = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [popupDetail, setPopupDetail] = useState<boolean>(false);



    const handleDetail = () => {
        setPopupDetail(!popupDetail);
    };



    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const CustomDatePickerInput = ({ value, onClick }: any) => (
        <div className="relative">
            <input
                type="text"
                value={value}
                onClick={onClick}
                readOnly={true}
                className="pl-10 pr-4 py-2 w-full border rounded-lg cursor-pointer"
                placeholder="Select a date"
            />
            <div className="absolute top-0 left-0 h-full flex items-center pl-3">
                <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="text-gray-400 cursor-pointer"
                    onClick={onClick}
                />
            </div>
        </div>
    );
    
    return (
        <section>
            <div>
                <Navbar />
            </div>
            <div className="mt-10 px-10 flex flex-row">
                <Sidebar height="h-[80vh]" />
                <div className="w-[80vw] flex flex-col">
                    <div className="bg-white mx-10 p-6 rounded-lg">
                        <div className="flex flex-col text-end">
                            <div>
                                <div className="mb-4">
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={handleDateChange}
                                        dateFormat="dd/MM/yyyy"
                                        customInput={<CustomDatePickerInput />}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="overflow-x-auto mt-4">
                                    <table className="table">
                                        <thead className="bg-primary text-white border-none">
                                            <tr className="border-none">
                                                <th className="rounded-l-md">No.</th>
                                                <th>Created At</th>
                                                <th>Policy Code</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Notes</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-none">
                                            <tr className="border-none">
                                                <td>1</td>
                                                <td>12 Sept</td>
                                                <td>CT</td>
                                                <td>12 Sept</td>
                                                <td>17 Sept</td>
                                                <td>
                                                    <button
                                                        onClick={() => handleDetail()}
                                                        className="hover:outline-none hover:border-white"
                                                    >
                                                        <i className="fa-solid fa-eye"></i>
                                                    </button>
                                                </td>
                                                <td>Pending</td>
                                            </tr>
                                            <tr className="border-none">
                                                <td>2</td>
                                                <td>15 Sept</td>
                                                <td>CE</td>
                                                <td>20 Sept</td>
                                                <td>25 Sept</td>
                                                <td>
                                                    <button
                                                        onClick={() => handleDetail()}
                                                        className="hover:outline-none hover:border-white"
                                                    >
                                                        <i className="fa-solid fa-eye"></i>
                                                    </button>
                                                </td>
                                                <td>Approved</td>
                                            </tr>
                                            <tr className="border-none">
                                                <td>3</td>
                                                <td>18 Sept</td>
                                                <td>CT</td>
                                                <td>25 Sept</td>
                                                <td>30 Sept</td>
                                                <td><img src="./EYE.png" alt="Foto" width="20" height="20" /></td>
                                                <td>Rejected</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HistoryTimeOff;
