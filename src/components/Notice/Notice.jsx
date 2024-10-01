import React, { useEffect, useState } from "react";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("/notice_data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchNotices();
  }, []);
  console.log(notices);
  return (
    <div>
      <div>
        <h2 className="text-3xl">Notice</h2>
        <div className="border-y my-3"></div>
      </div>
      <div>
        {notices.map((notice, idx) => (
          <div className=" shadow-md hover:shadow-sm mb-4 rounded-md p-4 text-xl font-medium text-slate-400 bg-gray-100">
            <p>{notice.date}</p> <p>{notice.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
