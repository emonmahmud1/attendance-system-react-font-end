import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import MainLayout from "./Pages/MainLayout/MainLayout.jsx";
import LeaveApply from "./Pages/LeaveApply/LeaveApply.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: '/applyforleave',
        element: <LeaveApply></LeaveApply>
      },
     
    ],

    
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
