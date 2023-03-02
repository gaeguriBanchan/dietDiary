import React from "react";
import { useNavigate } from "react-router";
import { Sidebar } from "../components/common/Sidebar";
// 스토어에 있는 데이터 읽기
import { useSelector } from "react-redux";
// 스토어 값 업데이트하기
import { useDispatch } from "react-redux";
import { logOut } from "../reducer/userSlice";

const Today = () => {
  // 스토어에 있는 데이터 읽기
  const user = useSelector((state) => state.user);
  // console.log(user);
  // 스토어 업데이트하기
  const dispatch = useDispatch();

  // 화면이동
  const navigate = useNavigate();
  // 카카오 기능
  // 카카오 로그아웃
  // 카카오 회원 탈퇴
  const memberOut = () => {
    window.Kakao.API.request({
      url: "/v1/user/unlink",
      success: function (response) {
        console.log(response);
        //callback(); //연결끊기(탈퇴)성공시 서버에서 처리할 함수
        // window.location.href='/'
        navigate("/");
      },
      fail: function (error) {
        console.log("탈퇴 미완료");
        console.log(error);
      },
    });
  };
  // 네이버 로그아웃
  const naverLogout = () => {
    localStorage.removeItem("com.naver.nid.access_token");
    localStorage.removeItem("com.naver.nid.oauth.state_token");
    navigate("/");
  };
  return (
    <div className="container w-full h-full">
      <div className="w-full h-full">
        <div className="w-full h-full m-auto flex">
          <Sidebar></Sidebar>
          <div className="w-[1080px]  h-full m-8">Today</div>
        </div>
      </div>
    </div>
  );
};

export default Today;
