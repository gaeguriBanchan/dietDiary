import React from "react";
import logo from "../assets/images/icon/logo.png";
import kakaoLoginBt from '../assets/images/kakao_login/kakao_login_large_wide.png'

const Login = () => {
  return (
    <>
      <div className="flex my-16 justify-center items-center">
        <div className="w-[1120px] h-[925px] bg-white border rounded-2xl flex justify-center items-center">
          <div className="w-[600px] h-[700px] flex-row text-center">
            <img src={logo} alt="logo" className="m-auto mb-[40px]" />
            <p className="text-second text-xl mb-1 font-normal">건강한 다이어트를 지향하는</p>
            <p className="text-main text-[60px] ">나의 식단일지</p>
            <button className="block"><img src={kakaoLoginBt} alt="" srcset="" /></button>
            <button className="w-[600px] h-[90px] border rounded-2xl my-4 bg-yellow-300 m-auto font-medium text-[25px] block">네이버 로그인</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
