import { IoTimeSharp } from "react-icons/io5";
const AttendanceTable = ({ workData }) => {
  return (
    <div className="">
      <table className="table border-spacing-y-3 border-separate overflow-x-auto ">
        {/* head */}
        <thead className="text-2xl">
          <tr>
            <th></th>
            <th>Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Work Hour</th>
          </tr>
        </thead>
        <tbody className="">
          {/* row 1 */}
          {workData.map((entry, idx) => (
            <tr key={idx} className="text-xl bg-slate-50 shadow-sm">
              <th>
                <IoTimeSharp className={`text-2xl ${entry.checkIn =='weekend'? 'text-yellow-500': 'text-green-500'}`} />
              </th>
              <td>{entry.date}</td>
              <td>{entry.checkIn}</td>
              <td>{entry.checkOut}</td>
              <td>{entry.totalHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
