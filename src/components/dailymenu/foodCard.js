/** @format */

import React from 'react';

const FoodCard = ({ item, open, close, header }) => {
  return (
    <div
      className="bg-white drop-shadow-md h-[290px] py-4 px-5 rounded-2xl mx-[10px] mb-[20px] cursor-pointer"
      onClick={open}
    >
      <div>{item.dfImg}</div>
      <div className="flex flex-col">
        <span>{item.dfMenu}</span>
        <span>{item.dfRegDt}</span>
        <span>{item.dfKcal}</span>
      </div>
    </div>
  );
};

export default FoodCard;
