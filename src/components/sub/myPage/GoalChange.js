import React from "react";
import { useContext } from "react";
import { MypageContext } from "../../../context/MypageContext";

const GoalChange = () => {
  const { human } = useContext(MypageContext);
  return (
    <div className="m-auto grid grid-cols-3 gap-3 mb-[20px] rounded-2xl">
      <div className="h-[200px] bg-white rounded-2xl border">
        <p className="text-main m-8 mb-0 text-xl">기간</p>
        <span className="flex items-center justify-center">
          <input
            className="max-w-[140px] h-[90px] text-[62px] font-MuseoModerno border rounded-full text-center text-textBlack"
            type="number"
            min="1"
            max="1000"
            placeholder={human.day}
          />
          <p className="text-[26px] text-textGray font-normal">일</p>
        </span>
      </div>
      <div className="h-[200px] bg-white rounded-2xl border">
        <p className="text-main m-8 mb-0 text-xl">목표칼로리</p>
        <span className="flex items-center justify-center">
          <input
            className="max-w-[160px] h-[90px] text-[62px] font-MuseoModerno border rounded-full text-center text-textBlack"
            type="number"
            min="1"
            placeholder={human.cal}
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
            className="max-w-[100px] h-[90px] text-[62px] font-MuseoModerno border rounded-full text-center text-textBlack"
            type="number"
            min="1"
            placeholder={human.cup}
          />
          <p className="text-[26px] text-textGray font-normal">컵</p>
        </span>
      </div>
    </div>
  );
};

export default GoalChange;
