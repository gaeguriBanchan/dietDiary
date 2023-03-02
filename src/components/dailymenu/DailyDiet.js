/** @format */

import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

const DailyDiet = () => {
  // useEffect(() => {
  //   axios
  //     .get('http://192.168.0.16:9876/api/suggest/suggest/list?token=token1')
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch();
  // }, []);

  return (
    <div className=" bg-white drop-shadow-md py-4 px-5 rounded-2xl mx-[10px] mb-[20px] ">
      <div className="bg-main w-full h-40"></div>
      <p className="mt-5 mb-4 text-xl text-main text-center">아침</p>
      <p className="flex justify-between">
        <span>삶은 계란</span>
        <span>156Kcal</span>
      </p>
      <p className="flex justify-between">
        <span>삶은 계란</span>
        <span>156Kcal</span>
      </p>
      <p className="flex justify-between">
        <span>삶은 계란</span>
        <span>156Kcal</span>
      </p>
    </div>
  );
};

export default DailyDiet;
