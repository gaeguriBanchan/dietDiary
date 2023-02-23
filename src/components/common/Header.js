import React from "react";
import { Outlet } from "react-router";
import me from "../../assets/images/icon/icon_b_my.png";

const Header = () => {
  const today = () => {
    let now = new Date(); // today 객체에 Date()의 결과를 넣어줬다
    let time = {
      month: today.getMonth() + 1, // 현재 월
      date: today.getDate(), // 현재 날짜
    };
  };
  return (
    <>
      <div className="flex justify-between w-[80%] h-14 ml-56">
        <p className="Date text-main font-NanumSquareNeo font-bold text-xl">
          오늘
          <span className="kcal font-MuseoModerno text-[25px] font-normal text-[#6E9399] align-middle ml-4">
            1500 kcal
          </span>
        </p>

        <div className="userInfo font-medium pt-2 flex">
          박둘리
          <img
            src={me}
            alt="user"
            style={{ width: "27px", height: "27px" }}
            className="ml-3"
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
