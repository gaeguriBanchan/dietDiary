import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import myIcon from "../../../assets/images/icon/icon_b_my.png";
import myProfile from "../../../assets/images/icon/icon_profile_big.png";
import { MypageContext } from "../../../context/MypageContext";
import Level from "./Level";

const ProfileChange = ({ userInfo, setMiWeight }) => {
  const { human } = useContext(MypageContext);
  // const user = useSelector((state) => state.user);
  // const [userW, setUserW] = useState();
  const changeWeight = (e) => {
    console.log("체중: ", e.target.value);
    setMiWeight(parseInt(e.target.value));
  };
  // console.log(userInfo.miToken);
  // useEffect(() => {
  //   axios
  //     .put(`http://192.168.0.16:9876/api/weight/add?token=${userInfo.miToken}&weight=${}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       // 사용자정보 업데이트
  //       // setUserW(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="h-[770px] mb-[20px] rounded-2xl border bg-white p-8">
      <div className="flex justify-between">
        <div className="flex">
          <img
            src={myIcon}
            alt="profile"
            className="w-[20px] h-[20px] self-center mr-3"
          />
          <p className="text-main text-xl">프로필</p>
        </div>
      </div>
      <div className="w-[300px] h-[300px] m-auto rounded-full bg-textGray mb-[50px]">
        <img src={myProfile} alt="profile" className="w-[300px] h-[300px] " />
      </div>
      <p className="text-4xl text-textBlack text-center mb-[10px]">
        {userInfo.miName}
      </p>
      <Level />
      <div className="flex justify-around">
        <div className="">
          <p className="text-center text-main mb-[10px] text-2xl">나이</p>
          <p className="w-[180px] p-1 text-center text-textGray text-4xl">
            {userInfo.miAge + "세"}
          </p>
        </div>
        <div className="">
          <p className="text-center text-main mb-[10px] text-2xl">신장</p>
          <p className="w-[180px] p-1 text-center text-textGray text-4xl">
            {userInfo.miTall + "cm"}
          </p>
        </div>
        <div className="">
          <p className="text-center text-main mb-[10px] text-2xl">체중</p>
          <input
            type="text"
            className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
            placeholder={userInfo.miWeight + "kg"}
            onChange={changeWeight}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileChange;
