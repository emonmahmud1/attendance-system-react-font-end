import { Outlet } from "react-router-dom";
import Navbar from "./../../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto bg-slate-50">
      <Navbar />
      <div className=" px-5 min-h-[calc(100vh-140px)]">
        <Outlet></Outlet>
      </div>
      <div className="my-5">
        <p className="text-lg font-medium text-slate-400"> &copy; Battery Low Interactivel | 2024</p>
      </div>
    </div>
  );
};

export default MainLayout;
