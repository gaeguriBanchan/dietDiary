import React, { useEffect, useState } from "react";
import Linechart from "../components/base/Linechart";
import WaterDrop from "../components/base/WaterDrop";
import Piechart2 from "../components/base/Piechart2";
import { Sidebar } from "../components/common/Sidebar";
import Barchart from "../components/base/Barchart";
import { Helmet } from "react-helmet";
import Title from "../components/base/Title";
import water from "../assets/images/icon/icon_b_water.png";
import calender from "../assets/images/icon/icon_calendar.png";
import diet from "../assets/images/icon/icon_diet.png";
import MyCalendar from "../components/base/MyCalendar";
import axios from "axios";

const Drink = () => {
  useEffect(() => {
    axios.post("").then().catch();
  }, []);

  const [chBt, setchBt] = useState({
    src: calender,
    alt: "calender",
    chBt: true,
  });

  const changeBtn = (e) => {
    e.preventDefault();
    setchBt(() => {
      if (chBt.chBt) {
        return {
          src: diet,
          alt: "diet",
          chBt: false,
        };
      } else {
        return {
          src: calender,
          alt: "calender",
          chBt: true,
        };
      }
    });
    console.log(chBt);
  };
  useEffect(() => {}, [chBt]);
  return (
    <>
      <Helmet>
        <title>물</title>
      </Helmet>
      <div className="container m-auto flex w-full h-full">
        <Sidebar></Sidebar>
        <div className="w-full h-full ml-8 drop-shadow-md ">
          <div className="drinking bg-white mb-8 p-8 border rounded-2xl ">
            <div className="flex justify-between mb-8">
              <div className="flex">
                <img
                  src={water}
                  alt="water"
                  className="w-[20px] h-[20px] self-center mr-3"
                />
                <Title name={"물"} />
              </div>
              <button onClick={changeBtn}>
                <img src={chBt.src} alt={chBt.alt} />
              </button>
            </div>

            {chBt.src === calender ? (
              <WaterDrop />
            ) : (
              <div>
                <MyCalendar />
              </div>
            )}
          </div>
          <div className="weekWater bg-white mb-8 p-8 border rounded-2xl ">
            <p className="text-xl text-main font-bold">주간 음수량</p>
            <Linechart />
          </div>
          <div className="flex justify-between ">
            <div className="goalWater bg-white mb-8 border rounded-2xl h-1/4">
              <p className="text-xl text-main p-8">목표 음수량</p>
              <p
                className="absolute font-MuseoModerno text-5xl font-medium w-[300px] translate-x-32 translate-y-24"
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
                className="absolute font-MuseoModerno text-m font-medium translate-x-[103px] translate-y-40"
                style={{ color: "#6D9399" }}
              >
                8
                <span className="font-NanumSquareNeo text-m font-medium">
                  컵&#32;<span className="font-MuseoModerno">(1600ml)</span>
                </span>
              </span>
              <Piechart2 />
              <p className="font-NanumSquareNeo text-center pb-5">
                목표 음수량{" "}
                <span className="ml-12 text-2xl font-NanumSquareNeo">
                  1600ml
                </span>
              </p>
            </div>
            <div className="goalGraph bg-white mb-8 border rounded-2xl ">
              <p className="text-xl text-main font-bold p-8">
                목표 달성 그래프
              </p>

              <h4
                className="flex text-[65px] font-medium font-MuseoModerno justify-around"
                style={{ color: "#46A7AE" }}
              >
                <p className=" text-main font-NanumSquareNeo text-xl pt-14 pr-5">
                  <span className="font-bold text-[18px] mr-3">달성일</span>{" "}
                  <span className="font-MuseoModerno text-lg font-medium">
                    282 <span style={{ color: "#D9D9D9" }}>/</span> 364
                  </span>
                </p>
                <span className="font-normal font-MuseoModerno">
                  82 <span className="text-5xl font-bold pt-7">%</span>
                </span>
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
