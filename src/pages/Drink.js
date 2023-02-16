import React from "react";
import Linechart from "../components/base/Linechart";
import WaterDrop from "../components/base/WaterDrop";
import Piechart2 from "../components/base/Piechart2";
import { Sidebar } from "../components/common/Sidebar";
import Barchart from "../components/base/Barchart";
import { Helmet } from "react-helmet";

const Drink = () => {
  return (
    <>
      <Helmet>
        <title>물</title>
      </Helmet>
      <div className="container m-auto flex w-full h-full">
        <Sidebar></Sidebar>
        <div className="w-full h-full ml-8">
          <div className="drinking bg-white mb-8 p-8 border rounded-2xl ">
            <p className="text-xl text-main font-NanumSquareNeo font-bold">
              음수량
            </p>
            <WaterDrop />
          </div>
          <div className="weekWater bg-white mb-8 p-8 border rounded-2xl ">
            <p className="text-xl text-main font-NanumSquareNeo font-bold">
              주간 음수량
            </p>
            <Linechart />
          </div>
          <div className="flex justify-between">
            <div className="goalWater bg-white mb-8 border rounded-2xl h-1/4">
              <p className="text-xl text-main font-NanumSquareNeo">
                목표 음수량
              </p>
              <p
                className="absolute font-MuseoModerno text-5xl font-medium w-100"
                style={{
                  color: "#46A7AE",
                }}
              >
                25
                <span className="font-NanumSquareNeo font-medium text-m">
                  %
                </span>
              </p>
              <span
                className="absolute font-MuseoModerno text-m font-medium"
                style={{ color: "#6D9399" }}
              >
                8
                <span className="font-NanumSquareNeo text-m font-medium">
                  컵&#32;<span className="font-MuseoModerno">(1600ml)</span>
                </span>
              </span>
              <Piechart2 />
              <p className="font-NanumSquareNeo text-center">
                목표 음수량{" "}
                <span className="ml-12 text-2xl font-NanumSquareNeo">
                  1600ml
                </span>
              </p>
            </div>
            <div className="goalGraph bg-white mb-8 border rounded-2xl">
              <p className="text-xl text-main font-NanumSquareNeo font-bold">
                목표 달성 그래프
              </p>
              <h4
                className="text-[65px] font-medium font-MuseoModerno flex justify-end mr-16 "
                style={{ color: "#46A7AE" }}
              >
                <p className="text-main font-NanumSquareNeo text-xl pt-16 mr-60">
                  <span className="font-bold text-[18px] mr-3">달성일</span> 282
                  / 364
                </p>
                <span className="font-normal font-MuseoModerno">82</span>
                <span className="text-5xl font-bold pt-7">%</span>
              </h4>
              <Barchart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drink;
