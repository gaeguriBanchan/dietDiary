import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { MypageContext } from "../../../context/MypageContext";

const GoalChange = ({
  userInfo,
  ddayNow,
  setDdayNow,
  setMiKcal,
  setMiWater,
  setMiGoalKg,
}) => {
  const { human } = useContext(MypageContext);

  const changeDday = (e) => {
    console.log("기간: ", e.target.value);
    setDdayNow(parseInt(e.target.value));
  };

  const changeGoalKcal = (e) => {
    console.log("목표칼로리: ", e.target.value);
    setMiKcal(parseInt(e.target.value));
  };

  const changeWater = (e) => {
    console.log("음수량: ", e.target.value);
    setMiWater(parseInt(e.target.value));
  };

  const changeGoalKg = (e) => {
    console.log("체중목표: ", e.target.value);
    setMiGoalKg(parseInt(e.target.value));
  };

  return (
    <>
      <div className="m-auto grid grid-cols-3 gap-3 mb-[20px] rounded-2xl">
        <div className="h-[200px] bg-white rounded-2xl border">
          <p className="text-main m-8 mb-0 text-xl">기간</p>
          <span className="flex items-center justify-center">
            <input
              className="max-w-[140px] h-[90px] text-[62px] font-MuseoModerno border rounded-full text-center text-textBlack"
              type="text"
              placeholder={ddayNow}
              onChange={changeDday}
            />
            <p className="text-[26px] text-textGray font-normal">일</p>
          </span>
        </div>
        <div className="h-[200px] bg-white rounded-2xl border">
          <p className="text-main m-8 mb-0 text-xl">목표칼로리</p>
          <span className="flex items-center justify-center">
            <input
              className="max-w-[180px] h-[90px] text-[62px] font-MuseoModerno border rounded-full text-center text-textBlack"
              type="text"
              placeholder={userInfo.miKcal}
              onChange={changeGoalKcal}
            />
            <p className="text-[26px] text-textGray font-MuseoModerno font-normal">
              Kcal
            </p>
          </span>
        </div>
        <div className="h-[200px] bg-white rounded-2xl border">
          <p className="text-main m-8 mb-0 text-xl">목표음수량</p>
          <span className="flex items-center justify-center">
            <input
              className="max-w-[110px] h-[90px] text-[62px] font-MuseoModerno border rounded-full text-center text-textBlack"
              type="text"
              placeholder={userInfo.miWater}
              onChange={changeWater}
            />
            <p className="text-[26px] text-textGray font-normal">컵</p>
          </span>
        </div>
      </div>
      <div className="h-[200px] bg-white rounded-2xl border mb-[20px]">
        <p className="text-main m-8 mb-0 text-xl">목표 체중</p>
        <span className="flex items-center justify-center">
          <input
            className="max-w-[120px] h-[90px] text-[62px] font-MuseoModerno border rounded-full text-center text-textBlack"
            type="text"
            placeholder={userInfo.miGoalKg}
            onChange={changeGoalKg}
          />
          <p className="text-[26px] text-textGray font-MuseoModerno font-normal">
            kg
          </p>
        </span>
      </div>
    </>
  );
};

export default GoalChange;
