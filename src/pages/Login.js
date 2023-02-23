import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import { useRef } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router";
import logo from "../assets/images/icon/logo.png";
import kakaoLoginBt from "../assets/images/kakao_login/kakao_login_large_wide.png";
import naverLoginBt from "../assets/images/naver_login/naver_login_large_wide.png";

const Login = () => {
  // 카카오 로그인 기능
  // 등록된 앱의 JavaScript key
  const jsKey = process.env.REACT_APP_KAKAO;
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(jsKey);
    console.log(window.Kakao.isInitialized());
  }
  // 화면이동
  const navigate = useNavigate();
  // 사용자정보
  const userKKOInfo = {};
  const userInfo = {};
  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image, account_email",
      success: function (response) {
        // console.log(response); // 로그인 성공하면 받아오는 데이터
        userKKOInfo.access_token = response.access_token;
        userKKOInfo.token_type = response.token_type;
        userKKOInfo.refresh_token = response.refresh_token;
        window.Kakao.API.request({
          // 사용자 정보 가져오기
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            // console.log("사용자 정보", kakao_account);
            // setKakaoLoginInfo((m) => kakao_account);
            // console.log("카카오로그인정보를 가져왔다", kakaoLoginInfo);
            userKKOInfo.email = kakao_account.profile.email;
            userKKOInfo.nickname = kakao_account.profile.nickname;
            userKKOInfo.profile_image_url =
              kakao_account.profile.profile_image_url;
            userKKOInfo.thumbnail_image_url =
              kakao_account.profile.thumbnail_image_url;

            console.log(userKKOInfo);
            // 이메일,
            // 사용자 정보를 받은 경우 localStorage 저장 또는 redux 저장
            navigate("/today");
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  //   네이버 로그인
  const { naver } = window;
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER,
      callbackUrl: "http://localhost:3000/login",
      isPopup: false,
      loginButton: { color: "red", type: 1, height: 40 },
      callbackHandle: true,
    });
    naverLogin.init();

    naverLogin.getLoginStatus(async function (status) {
      console.log("네이버 status 정보 ", status);
      if (status) {
        console.log("naverLogin.user", naverLogin.user);
        // setNaverLoginInfo(naverLogin.user);
        // console.log("네이버로그인정보를 가져왔다", naverLoginInfo);
        // const userid = naverLogin.user.getEmail();
        // console.log(userid);
        // const nickname = naverLogin.user.getNickName();
        // console.log(userid);
        // console.log(nickname);
        // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다.
        // setuserKKOInfo(naverLogin.user)
      }
    });
  };

  // 네이버 소셜 로그인 (네아로) 는 URL 에 엑세스 토큰이 붙어서 전달됨.
  const userAccessToken = () => {
    window.location.href.includes("access_token") && getToken();
  };

  const getToken = () => {
    const token = window.location.href.split("=")[1].split("&")[0];
    console.log("토큰", token);
    // 로컬 스토리지 또는 state에 저장하여 사용하자!
    // localStorage.setItem('access_token', token)
    // setGetToken(token)
    // 화면이동 코드
    navigate("/today");
  };

  // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
  }, []);

  // 네이버 로그인 버튼 디자인 하기
  const naverRef = useRef();
  const naverLogin = () => {
    naverRef.current.children[0].click();
  };
  return (
    <>
      <div className="flex my-1 justify-center items-center">
        <div className="w-[1120px] h-[1050px] bg-white border rounded-2xl flex justify-center items-center">
          <div className="w-[600px] h-[900px] flex-row text-center">
            <img src={logo} alt="logo" className="m-auto mb-[40px]" />
            <p className="text-second text-xl mb-1 font-normal">
              건강한 다이어트를 지향하는
            </p>
            <p className="text-main text-[60px] ">나의 식단일지</p>
            <form className="w-[600px] h-[90px] my-10 flex justify-between">
              <div className="grid gap-1">
                <input
                  className="border-b-2 w-[480px]"
                  type="text"
                  placeholder="아이디"
                />
                <input
                  className="border-b-2 w-[480px]"
                  type="text"
                  placeholder="비밀번호"
                />
              </div>
              <button
                type="submit"
                className="w-[100px] h-[100px] bg-main rounded-xl text-white text-lg"
              >
                로그인
              </button>
            </form>

            <Link
              to="/join"
              className="block bg-main w-[600px] h-[90px] rounded-xl text-white text-[26px]"
            >
              <p className="w-full h-full justify-center items-center flex">
                회원가입
              </p>
            </Link>
            <button className="bg-[#FEE500] w-[600px] h-[90px] rounded-xl my-3 flex text-[26px]">
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
              // onClick={naverLogin}
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
