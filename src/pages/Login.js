import React from "react";
import { useContext } from "react";
// import { useRef } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router";
import logo from "../assets/images/icon/logo.png";
import kakaoLoginBt from "../assets/images/kakao_login/kakao_login_large_wide.png";
import naverLoginBt from "../assets/images/naver_login/naver_login_large_wide.png";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const {kakaoLogin, naverLogin, naverRef} = useContext(LoginContext)  
  return (
    <>
      <div className="flex my-16 justify-center items-center">
        <div className="w-[1120px] h-[925px] bg-white border rounded-2xl flex justify-center items-center">
          <div className="w-[600px] h-[700px] flex-row text-center">
            <img src={logo} alt="logo" className="m-auto mb-[40px]" />
            <p className="text-second text-xl mb-1 font-normal">
              건강한 다이어트를 지향하는
            </p>
            <p className="text-main text-[60px] ">나의 식단일지</p>
            <button
              onClick={kakaoLogin}
              className="bg-[#FEE500] w-[600px] h-[90px] rounded-xl my-3 flex text-[26px]"
            >
              <img
                className="w-full top-0"
                src={kakaoLoginBt}
                alt=""
                srcset=""
              />
            </button>
            <button
              id="naverIdLogin"
              ref={naverRef}
              style={{ display: "none" }}
            >
              <img src={naverLoginBt} alt="" srcset="" />
            </button>
            <button
              className="bg-[#03C75A] w-[600px] h-[90px] rounded-xl my-3 flex text-[26px]"
              onClick={naverLogin}
            >
              <img
                className="w-full top-0"
                src={naverLoginBt}
                alt=""
                srcset=""
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
