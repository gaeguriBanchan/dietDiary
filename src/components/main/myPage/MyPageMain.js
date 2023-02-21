import React from "react";
import Goal from "../../sub/myPage/Goal";
import MyPageFrofile from "../../sub/myPage/MyPageFrofile";
import Weight from "../../sub/myPage/Weight";
import WeightGraph from "../../sub/myPage/WeightGraph";

const MyPageMain = ({name, age, toggleChange, height, weight}) => {
  return (
    <>
      <MyPageFrofile name={name} age={age} toggleChange={toggleChange} height={height} weight={weight}/>
      <Goal />
      <Weight />
      <WeightGraph />
    </>
  );
};

export default MyPageMain;
