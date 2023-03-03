import React from "react";
import Goal from "../../sub/myPage/Goal";
import MyPageProfile from "../../sub/myPage/MyPageProfile";
import Weight from "../../sub/myPage/Weight";
import WeightGraph from "../../sub/myPage/WeightGraph";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MyPageMain = ({ userInfo }) => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <MyPageProfile userInfo={userInfo} />
      <Goal userInfo={userInfo} />
      <Weight userInfo={userInfo} />
      {/* <WeightGraph userInfo={userInfo} /> */}
    </>
  );
};

export default MyPageMain;
