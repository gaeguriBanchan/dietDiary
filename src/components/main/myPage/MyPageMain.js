import React from "react";
import Goal from "../../sub/myPage/Goal";
import MyPageProfile from "../../sub/myPage/MyPageProfile";
import Weight from "../../sub/myPage/Weight";
import WeightGraph from "../../sub/myPage/WeightGraph";

const MyPageMain = () => {
  return (
    <>
      <MyPageProfile />
      <Goal />
      <Weight />
      <WeightGraph />
    </>
  );
};

export default MyPageMain;
