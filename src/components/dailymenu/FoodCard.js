/** @format */

import React from "react";

const FoodCard = ({ item, open, close, header }) => {
  //시간표기
  const data = item.dfRegDt;
  let a = data.slice(11, 16);
  function convert12H(time, options) {
    var _ampmLabel = (options && options.ampmLabel) || ["오전", "오후"];
    var _timeRegExFormat = /^([0-9]{2}):([0-9]{2})$/;
    var _timeToken = time.match(_timeRegExFormat);
    if (typeof _timeRegExFormat === "undefine") {
      // 잘못된 형식
      return null;
    }
    var _intHours = parseInt(_timeToken[1]);
    var _intMinutes = parseInt(_timeToken[2]);
    var _strHours12H = ("0" + (_intHours == 12 ? 12 : _intHours % 12)).slice(
      -2
    );
    return (
      _ampmLabel[parseInt(_intHours / 12)] +
      " " +
      _strHours12H +
      ":" +
      _intMinutes
    );
  }
  const time = convert12H(a, {
    ampmLabel: ["am", "pm"],
  });

  return (
    <div
      className="bg-white drop-shadow-md h-[290px] py-4 px-5 rounded-2xl mx-[10px] mb-[20px] cursor-pointer"
      onClick={open}
    >
      <div className="w-full h-1/2 bg-main rounded-xl overflow-hidden">
        {item.dfImg ? (
          <img
            src={`http://192.168.0.16:9876/api/diet/images/${item.dfImg}`}
            alt={item.dfImg}
            className="w-full h-full"
          />
        ) : (
          <div
            style={{
              textAlign: "center",
              color: "#fff",
              lineHeight: "120px",
            }}
          >
            No-Image
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-between">
        <span className="text-lg text-textBlack my-4">{item.dfMenu}</span>
        <div className="flex flex-col h-full font-MuseoModerno font-normal ">
          <p className="text-xs text-second">{time}</p>
          <p className="text-lg text-textGray">{item.dfKcal}Kcal</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
