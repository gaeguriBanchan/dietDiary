/** @format */

import React from "react";
import Title from "../components/base/Title";
import { Sidebar } from "../components/common/Sidebar";
import food from "../assets/images/icon/icon_b_food.png";
import calender from "../assets/images/icon/icon_calendar.png";
import diet from "../assets/images/icon/icon_diet.png";
import addFood from "../assets/images/icon/add_food.png";
import { useState } from "react";

import { Helmet } from "react-helmet";

const DailyMenu = () => {
  return (
    <>
      <Helmet>
        <title>마이페이지</title>
      </Helmet>
      <div className="container w-full h-full m-auto flex">
        <Sidebar></Sidebar>
        <div className="w-full ml-8 mb-[20px] rounded-2xl border bg-white drop-shadow-md">
          <div className="flex justify-between p-8 mb-8">
            <div className="flex">
              <img
                src={food}
                alt="food"
                className="w-[20px] h-[20px] self-center mr-3"
              />
              <Title name={"밥"} />
            </div>
            <button>
              <img src={calender} alt="food" />
            </button>
          </div>
          <div className="bg-addfood bg-no-repeat bg-contain w-[190px] h-[290px]" />
        </div>
      </div>
    </>
  );
};

export default DailyMenu;
