import moment from "moment";
import { useEffect, useState } from "react";

const Timer = ({ handleCheckBtn, checkValue }) => {
  const [time, setTime] = useState({ hour: "", minute: "", period: "" });


  useEffect(() => {
    const updateTime = () => {
      const dateObject = new Date();
      let hour = dateObject.getHours();
      const minute = dateObject.getMinutes();
      const period = hour >= 12 ? "PM" : "AM";
      hour = hour % 12 || 12;

      setTime({
        hour: hour.toString().padStart(2, "0"),
        minute: minute.toString().padStart(2, "0"),
        period: period,
      });
    };

    const intervalId = setInterval(updateTime, 1000); // Update clock every second

    // Cleanup the interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);
//   const today = moment().format("YYYY-Mm-Dd");
const today = moment().format('MMMM Do YYYY');

  return (
    <div>

      <div className="">
        <p className=" text-5xl text-slate-500 pb-3">{today}</p>

        <div className="flex justify-center my-5">
          <p className="bg-slate-200 font-semibold text-slate-500 text-5xl p-7 rounded-lg mr-2">
            {time.hour}
          </p>
          <p className="text-6xl">:</p>
          <p className="bg-slate-200 font-semibold text-slate-500 text-5xl p-7 rounded-lg ml-2">
            {time.minute}
          </p>
          <p className="text-3xl ml-4 font-semibold text-slate-500  p-2 rounded-md">
            {time.period}
          </p>
        </div>
        
      </div>


      <button
        onClick={() => handleCheckBtn(time)}
        className={`btn text-white text-lg btn-lg w-1/2 ${
          checkValue === "Check In"
            ? "bg-orange-400 text-black"
            : "bg-slate-500"
        }`}
      >
        {checkValue}
      </button>
    </div>
  );
};

export default Timer;
