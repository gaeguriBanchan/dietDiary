import React, { useState } from "react";
import { useContext } from "react";
import { MypageContext } from "../../../context/MypageContext";

const Level = () => {
  const { levelBt } = useContext(MypageContext);

  return (
    <>
      <div className="text-3xl flex justify-around text-textAsh text-center mx-[150px] mb-[50px]">
        {levelBt}
      </div>
    </>
  );
};

export default Level;
