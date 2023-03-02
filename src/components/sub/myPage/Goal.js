import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { MypageContext } from "../../../context/MypageContext";

const Goal = () => {
  const { human } = useContext(MypageContext);
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(user);
  const [dday, setDday] = useState(0);

  useEffect(() => {
    axios
      .get(`http://192.168.0.16:9876/api/member/dDay?token=${user.miToken}`)
      .then((res) => {
        // console.log(res.data);
        // 사용자정보 업데이트
        setDday(res.data.dday);
        // console.log(dday);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://192.168.0.16:9876/api/member/info?token=${user.miToken}`)
      .then((res) => {
        // console.log(res.data);
        // 사용자정보 업데이트
        setUserInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="m-auto grid grid-cols-3 gap-3 mb-[20px] rounded-2xl">
      <div className="h-[200px] bg-white rounded-2xl border">
        <p className="text-main m-8 mb-0 text-xl">기간</p>
        <span className="flex items-center justify-center">
          <p className="text-[62px] text-textBlack font-MuseoModerno">{dday}</p>
          <p className="text-[26px] text-textGray font-normal">일</p>
        </span>
      </div>
      <div className="h-[200px] bg-white rounded-2xl border">
        <p className="text-main m-8 mb-0 text-xl">목표칼로리</p>
        <span className="flex items-center justify-center">
          <p className="text-[62px] text-textBlack font-MuseoModerno">
            {userInfo.miKcal}
          </p>
          <p className="text-[26px] text-textGray font-MuseoModerno font-normal">
            Kcal
          </p>
        </span>
      </div>
      <div className="h-[200px] bg-white rounded-2xl border">
        <p className="text-main m-8 mb-0 text-xl">목표음수량</p>
        <span className="flex items-center justify-center">
          <p className="text-[62px] text-textBlack font-MuseoModerno">
            {userInfo.miWater}
          </p>
          <p className="text-[26px] text-textGray font-normal">컵</p>
        </span>
      </div>
    </div>
  );
};

export default Goal;
