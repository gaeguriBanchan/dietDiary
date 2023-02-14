import React from "react";
import { Sidebar } from "../components/common/Sidebar";

const Today = () => {
  return (
    <div className="container w-full h-full">
      <div className="w-full h-full">
        <div className="w-full h-full m-auto flex">
          <Sidebar></Sidebar>
          <div className="w-[1080px]  h-full m-8">Today</div>
        </div>
      </div>
    </div>
  );
};

export default Today;
