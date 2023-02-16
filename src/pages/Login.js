import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/images/icon/logo.png";
import kakaoLoginBt from "../assets/images/kakao_login/kakao_login_large_wide.png";
import kakaoIcon from "../assets/images/kakao_login/kakao_icon.png";
import naverLoginBt from "../assets/images/naver_login/btnG_축약형.png";
import naverIcon from "../assets/images/naver_login/btnG_아이콘사각.png";

const Login = () => {
  // 카카오 로그인 기능
  // 등록된 앱의 JavaScript key
  const jsKey = process.env.REACT_APP_KAKAO;

  // SDK는 한 번만 초기화해야 한다.
  // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
  if (!window.Kakao.isInitialized()) {
    // JavaScript key를 인자로 주고 SDK 초기화
    window.Kakao.init(jsKey);
    // SDK 초기화 여부를 확인하자.
    console.log(window.Kakao.isInitialized());
  }
  // 화면이동
  const navigate = useNavigate();
  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image, account_email", //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
      success: function (response) {
        console.log(response); // 로그인 성공하면 받아오는 데이터
        window.Kakao.API.request({
          // 사용자 정보 가져오기
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            console.log("사용자 정보", kakao_account);
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
      clientId: process.env.REACT_APP_NAVER, // 발급 받은 Client ID 입력
      callbackUrl: "http://localhost:3000/login", // 작성했던 Callback URL 입력,
      // 팝업창으로 로그인을 진행할 것인지?
      isPopup: false,
      // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
      loginButton: { color: "red", type: 1, height: 40 },
      callbackHandle: true,
    });
    naverLogin.init();

    naverLogin.getLoginStatus(async function (status) {
      console.log("네이버 status 정보 ", status);
      if (status) {
        console.log("naverLogin.user", naverLogin.user);
        // const userid = naverLogin.user.getEmail();
        // const nickname = naverLogin.user.getNickName();
        // console.log(userid);
        // console.log(nickname);
        // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다.
        // setUserInfo(naverLogin.user)
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
      <div className="flex my-16 justify-center items-center">
        <div className="w-[1120px] h-[925px] bg-white border rounded-2xl flex justify-center items-center">
          <div className="w-[600px] h-[700px] flex-row text-center">
            <img src={logo} alt="logo" className="m-auto mb-[40px]" />
            <p className="text-second text-xl mb-1 font-normal">
              건강한 다이어트를 지향하는
            </p>
            <p className="text-main text-[60px] ">나의 식단일지</p>
            <button onClick={kakaoLogin} className="bg-[#FEE500] w-[600px] h-[90px] rounded-xl my-3 flex text-[26px]">
              <img className="w-[90px] top-0 left-1" alt="" srcset="" />
              <p className="m-auto ">카카오 로그인</p>
              {/* <img src={kakaoLoginBt} alt="" srcset="" /> */}
            </button>
            {/* 네이버로그인은 반드시 !!! id="naverIdLogin" */}
            {/* <button id="naverIdLogin">네이버 로그인</button> */}
            <button
              id="naverIdLogin"
              ref={naverRef}
              style={{ display: "none" }}
            >
              <img src={naverLoginBt} alt="" srcset="" />
            </button>
            <button className="bg-[#03C75A] w-[600px] h-[90px] rounded-xl my-3 flex text-[26px]" onClick={naverLogin}>
              <img className="w-[90px] top-0 ml-1" src={naverIcon} alt="" srcset="" />
              <p className="m-auto text-white">네이버 로그인</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
