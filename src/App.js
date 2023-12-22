import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 mx-auto h-auto ml-[255px]">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
