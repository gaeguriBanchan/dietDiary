import React from "react";
import { Sidebar } from "../components/common/Sidebar";

const Drink = () => {
  return (
    <div className="container">
      <div className="w-screen">
        <div className="w-7/12 bg-slate-300 m-auto flex">
          <Sidebar></Sidebar>
          <div className="">Drink</div>
        </div>
      </div>
    </div>
  );
};

export default Drink;
