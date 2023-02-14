import React from "react";
import Bumpchart from "../components/base/Bumpchart";
import Piechart from "../components/base/Piechart";
import { Sidebar } from "../components/common/Sidebar";

const Drink = () => {
  return (
    <div className="container  w-full h-full">
      <div className="w-full h-full">
        <div className="w-full bg-slate-300 m-auto flex">
          <Sidebar></Sidebar>
          <div className="w-[1080px] h-full m-8">
            <div className="drinking bg-white mb-8 pt-2 pl-2 border rounded-2xl">
              음수량
              <Piechart />
            </div>
            <div className="weekWater bg-white mb-8 pt-2 pl-2 border rounded-2xl">
              주간 음수량
              <Bumpchart />
            </div>
            <div className="goalWater bg-white ">목표 음수량</div>
            <div className="goalGraph bg-white">목표 달성 그래프</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drink;
