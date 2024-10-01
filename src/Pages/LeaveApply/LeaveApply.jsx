import Title from "./../../components/Title/Title";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ApproveListTable from './../../components/ApproveListTable/ApproveListTable';
const LeaveApply = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [applies, setApplies] = useState([]);

  useEffect(() => {
    const applyListData = async () => {
      try {
        const response = await fetch("/leave_data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setApplies(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    applyListData();
  }, []);
  return (
    <div>
      <Title title="Apply For Leave"></Title>
      <div className=" h-40 rounded-md bg-white">
        <form
          className="flex justify-around flex-grow gap-10 items-center p-5 relative"
          action=""
        >
          <div>
            <label className="">
              <span className="text-2xl text-gray-500 font-medium block">
                Select Date
              </span>
              <DatePicker
                className="border rounded-md "
                showIcon
                toggleCalendarOnIconClick
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </label>
          </div>
          <div className="text-gray-500 flex-1">
            <label className="text-2xl font-medium">
              Reasons
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="w-52 top-3 relative">
            <button className="btn btn-lg w-full bg-gray-600 text-white">
              Apply
            </button>
          </div>
        </form>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-semibold text-slate-500 mb-5">Approved List</h2>
        <ApproveListTable applies={applies}></ApproveListTable>
      </div>
    </div>
  );
};

export default LeaveApply;
