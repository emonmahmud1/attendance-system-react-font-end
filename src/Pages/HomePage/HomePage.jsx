import { useEffect, useMemo, useState } from "react";
import AttendanceTable from "./../../components/AttendanceTable/AttendanceTable";
import Timer from "./../../components/Timer/Timer";
import { TbCalendarTime } from "react-icons/tb";
import Notice from "./../../components/Notice/Notice";
import { FcOvertime } from "react-icons/fc";
import { Link } from "react-router-dom";
import { VscGitStashApply } from "react-icons/vsc";

const HomePage = () => {
  //   const [time, setTime] = useState({ hour: "", minute: "", period: "" });
  const [checkValue, setCheckValue] = useState("Check Out");
  const [workData, setWorkData] = useState([]);
  //   const [getTime,setGetTime]=useState({})
  const [checkInTime, setCheckInTime] = useState({});
  const [checkOutTime, setCheckOutTime] = useState({});

  const handleCheckBtn = (e) => {
    // setGetTime(e)
    if (checkValue == "Check In") {
      setCheckValue("Check Out");
      setCheckOutTime(e);
    } else {
      setCheckValue("Check In");
      setCheckInTime(e);
    }
  };
  useEffect(() => {
    const fetchWorkData = async () => {
      try {
        const response = await fetch("/workEntryData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setWorkData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchWorkData();
  }, []);

  const hangleAttendaceBtn = () => {
    document.getElementById("my_modal_4").showModal();
  };

  return (
    <>
      <div className="flex gap-3">
        {/* left side */}
        <div className="mt-4 w-3/5 ">
          <h2 className="text-2xl font-semibold text-slate-500 mb-5">
            Attendence sheet
          </h2>
          <div className="bg-white shadow-sm text-center rounded-lg">
            <div className="w-3/5 mx-auto">
              <div className="py-8">
                <Timer
                  handleCheckBtn={handleCheckBtn}
                  checkValue={checkValue}
                ></Timer>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-sm md:px-10 px-3 w-full mt-4 min-h-[200px] rounded-md">
            <AttendanceTable workData={workData}></AttendanceTable>
          </div>
        </div>

        
        {/* right side */}
        <div className=" w-2/5 mx-auto mt-16 rounded-md">
          <div>
            <p
              onClick={hangleAttendaceBtn}
              className="w-full  flex justify-center gap-5 py-10 rounded-md text-5xl border bg-white hover:cursor-pointer hover:shadow-lg text-slate-500 text-center"
            >
              <TbCalendarTime />
              Attendance
            </p>
          </div>
          <div className="mt-5 px-3 bg-white shadow-sm py-4 rounded-md">
            <Notice></Notice>
          </div>
        </div>
      </div>



      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-2/5 h-1/2">
          <div className="flex flex-col relative h-full">
            <div className="">
              <Link >
                <p className="p-5 text-center rounded-md shadow-md mb-3 bg-gray-200 hover:shadow-xl">
                  <FcOvertime className="text-6xl text-center mx-auto mb-2" />
                  <span className="text-xl font-medium text-gray-500">
                    Attendance Time Sheet
                  </span>
                </p>
              </Link>
              <Link to='applyforleave'>
                <p className="p-5 text-center rounded-md shadow-md bg-gray-200 mt-10 hover:shadow-xl">
                  <VscGitStashApply className="text-6xl text-center mx-auto mb-2" />
                  <span className="text-xl font-medium text-gray-500">
                    Apply for Leave
                  </span>
                </p>
              </Link>
            </div>

            <div className="mt-10 absolute bottom-0 w-full">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn w-full text-2xl bg-gray-400 text-gray-50">Go Back</button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default HomePage;
