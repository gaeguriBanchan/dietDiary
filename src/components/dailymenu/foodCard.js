/** @format */

import React from "react";

const FoodCard = ({ item }) => {
  return (
    <div className=" bg-white drop-shadow-md h-[290px] py-4 px-5 rounded-2xl mx-[10px] mb-[20px] ">
      <div>{item.img}</div>
      <div className="flex flex-col">
        <span>{item.title}</span>
        <span>{item.time}</span>
        <span>{item.kcal}</span>
      </div>
    </div>
  );
};

export default FoodCard;
