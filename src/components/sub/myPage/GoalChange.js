import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { MypageContext } from "../../../context/MypageContext";

const GoalChange = () => {
  const { human } = useContext(MypageContext);
  const user = useSelector((state)=> state.user)
  return (
    <>
      <div className="m-auto grid grid-cols-3 gap-3 mb-[20px] rounded-2xl">
        <div className="h-[200px] bg-white rounded-2xl border">
          <p className="text-main m-8 mb-0 text-xl">기간</p>
          <span className="flex items-center justify-center">
            <input
              className="max-w-[140px] h-[90px] text-[62px] font-MuseoModerno border rounded-full text-center text-textBlack"
              type="text"
              placeholder={human.day}
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
              placeholder={user.miKcal}
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
              placeholder={user.miWater}
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
            placeholder={user.miGoalKg}
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
