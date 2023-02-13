import React from "react";
import { Sidebar } from "../components/common/Sidebar";

const MyPage = () => {
  return (
    <div className="container">
      <div className="w-screen">
        <div className="w-7/12 bg-slate-300 m-auto flex">
          <Sidebar></Sidebar>
          <div>MyPage</div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
