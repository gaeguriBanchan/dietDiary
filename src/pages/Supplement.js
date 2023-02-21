import React from "react";
import { Helmet } from "react-helmet";
import { Sidebar } from "../components/common/Sidebar";
import calendar from "../assets/images/icon/icon_calendar.png";
import drug from "../assets/images/icon/icon_b_pill.png";
import diet from "../assets/images/icon/icon_diet.png";
import Title from "../components/base/Title";
import PillUpdate from "../components/base/PillUpdate";
import { useState } from "react";
import { useEffect } from "react";
import MyCalendar from "../components/base/MyCalendar";

const Supplement = () => {
  const [chBt, setchBt] = useState({
    src: calendar,
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
          src: calendar,
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
        <title>약</title>
      </Helmet>
      <div className="container m-auto flex w-full h-full">
        <Sidebar></Sidebar>
        <div className="w-full h-full ml-8 drop-shadow-md">
          <div className="pill bg-white mb-8 p-8 border rounded-2xl">
            <div className="flex justify-between mb-8">
              <div className="flex">
                <img
                  src={drug}
                  alt="drug"
                  className="w-[20px] h-[20px] self-center mr-3"
                />
                <Title name={"약"} />
              </div>
              <button onClick={changeBtn}>
                <img src={chBt.src} alt={chBt.alt} />
              </button>
            </div>

            {chBt.src === calendar ? (
              <div className="pillupdate">
                <PillUpdate />
              </div>
            ) : (
              <MyCalendar />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Supplement;
