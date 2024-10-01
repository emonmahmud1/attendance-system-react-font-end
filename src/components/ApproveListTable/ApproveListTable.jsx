const ApproveListTable = ({ applies }) => {
  console.log(applies);
  return (
    <div className="">
      <table className="table rounded-lg overflow-x-auto ">
        {/* head */}
        <thead className="text-xl rounded-lg bg-gray-300">
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>In Time</th>
            <th>Out Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="">
          {/* row 1 */}
          {applies.map((apply, idx) => (
            <tr key={idx} className="text-xl bg-slate-50 shadow-sm">
              <td>{apply.date}</td>
              <td>{apply.day}</td>
              <td>{apply.in_time}</td>
              <td>{apply.out_time}</td>
              <td
                className={`${
                  apply.status == "Approved"
                    ? "text-green-500 font-bold"
                    : "text-orange-400"
                }`}
              >
                {apply.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveListTable;
