import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import myIcon from "../../../assets/images/icon/icon_b_my.png";
import { MypageContext } from "../../../context/MypageContext";

const MyPageProfile = () => {
  const { toggleChange, human } = useContext(MypageContext);
  const user = useSelector((state) => state.user);
  const hard = () => {
    if (user.miHard === 0) {
      return (
        <p className="text-3xl text-textGray text-center mb-[50px]">
          건강한 다이어터
        </p>
      );
    } else if (user.miHard === 1) {
      return (
        <p className="text-3xl text-textGray text-center mb-[50px]">
          쉽게 가고싶은 다이어터
        </p>
      );
    } else if (user.miHard === 2) {
      return (
        <p className="text-3xl text-textGray text-center mb-[50px]">
          탄탄한 몸매를 원하는 다이어터
        </p>
      );
    } else {
      return (
        <p className="text-3xl text-textGray text-center mb-[50px]">
          극한의 몸매를 원하는 다이어터
        </p>
      );
    }
  };

  return (
    <div className="h-[770px] m-auto mb-[20px] rounded-2xl border bg-white ">
      <div className="flex justify-between">
        <div className="flex m-8">
          <img
            src={myIcon}
            alt="profile"
            className="w-[20px] h-[20px] self-center mr-3"
          />
          <p className="text-main text-xl">프로필</p>
        </div>
        <button
          onClick={() => toggleChange()}
          className="m-8 text-sm w-[70px] h-[25px] text-textAsh border-solid border-2 border-textAsh rounded-full"
        >
          수정
        </button>
      </div>
      <div className="w-[300px] h-[300px] m-auto rounded-full bg-textGray mb-[50px]">
        {/* <img src={myIcon} alt="profile" className="w-[300px] h-[300px]"/> */}
      </div>
      <p className="text-4xl text-textBlack text-center mb-[10px]">
        {user.miName}
      </p>
      {hard()}
      {/* <p className="text-3xl text-textGray text-center mb-[50px]">
        건강한 다이어터
      </p> */}
      {/* <p className="text-3xl text-textGray text-center mb-[50px]">
        쉽게 가고싶은 다이어터
      </p> */}
      {/* <p className="text-3xl text-textGray text-center mb-[50px]">
        탄탄한 몸매를 원하는 다이어터
      </p>
      <p className="text-3xl text-textGray text-center mb-[50px]">
        극한의 몸매를 원하는 다이어터
      </p> */}
      <div className="flex justify-around">
        <div className="">
          <p className="text-center text-main mb-[10px] text-2xl">나이</p>
          <p className="text-center text-textGray text-4xl">{user.miAge} 세</p>
        </div>
        <div className="">
          <p className="text-center text-main mb-[10px] text-2xl">신장</p>
          <p className="text-center text-textGray text-4xl">{user.miTall} cm</p>
        </div>
        <div className="">
          <p className="text-center text-main mb-[10px] text-2xl">체중</p>
          <p className="text-center text-textGray text-4xl">
            {user.miWeight} kg
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyPageProfile;
