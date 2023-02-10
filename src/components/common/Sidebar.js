import React from "react";
import { Link } from "react-router-dom";
// 임시 로고
import logo from "../../assets/images/285645_user_icon.png";

export const Sidebar = () => {
  return (
    <div className="w-2/12 h-screen bg-blue-400">
      <div className="grid h-3/5 justify-center text-center">
        <Link className="self-center" to="/today">
          <img className="self-center m-auto" src={logo} alt="logo" />
        </Link>
        <Link to="/dailyMenu">식단</Link>
        <Link to="/drink">음수</Link>
        <Link to="/supplement">약</Link>
        <Link to="/mypage">마이페이지</Link>
      </div>
    </div>
  );
};
