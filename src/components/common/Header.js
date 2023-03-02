import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import me from "../../assets/images/icon/icon_b_my.png";
import { logOut } from "../../reducer/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const today = () => {
    let now = new Date(); // today 객체에 Date()의 결과를 넣어줬다
    let time = {
      month: today.getMonth() + 1, // 현재 월
      date: today.getDate(), // 현재 날짜
    };
  };
  // 스토어에 있는 데이터 읽기
  // console.log(user);
  // 스토어 업데이트하기
  const dispatch = useDispatch();

  // 화면이동
  const navigate = useNavigate();
  // 카카오 로그아웃
  const kakaoLogOut = () => {
    // 사용자정보 업데이트
    dispatch(logOut());
    navigate("/");

    if (!window.Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    window.Kakao.Auth.logout(function (response) {
      alert(response + " logout");
      // window.location.href='/'
      navigate("/");
    });
  };
  return (
    <>
      <div className="flex justify-between w-[81%] h-14 ml-56">
        <p className="Date text-main font-NanumSquareNeo font-bold text-xl">
          오늘
          <span className="kcal font-MuseoModerno text-[25px] font-normal text-[#6E9399] align-middle ml-4">
            1500 kcal
          </span>
        </p>
        <div className="userInfo font-medium pt-2 flex">
          {user.miName}
          <img
            src={me}
            alt="user"
            style={{ width: "27px", height: "27px" }}
            className="ml-2"
          />
          <button
            className="flex border-2 border-main rounded-md px-1 ml-3 mr-1 mb-5 text-center text-[15px] bg-main text-white  hover:font-semibold hover:bg-white hover:text-main"
            onClick={kakaoLogOut}
          >
            로그아웃
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
