import React from "react";
import Background from "../base/Background";
import dummyData from "./dummyData.json";

const FoodModal = () => {
  return (
    <div>
      <Background>
        <p className="text-3xl text-main w-full ">
          아침
          <span className="text-MuseoModerno text-3xl text-second ml-8">
            {dummyData.diet[0].time}
          </span>
        </p>
        <div className="p-8">
          <div>{dummyData.diet[0].img}</div>
          <p>{dummyData.diet[0].title}</p>
          <span>{dummyData.diet[0].kcal}</span>
          <div>
            <p>메모</p>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default FoodModal;
