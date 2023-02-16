/** @format */

import React from 'react';
import Title from '../components/base/Title';
import { Sidebar } from '../components/common/Sidebar';
import food from '../assets/images/icon/icon_b_food.png';
import calender from '../assets/images/icon/icon_calendar.png';
import diet from '../assets/images/icon/icon_diet.png';
import addFood from '../assets/images/icon/add_food.png';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import FoodCard from '../components/dailymenu/FoodCard';

const DailyMenu = () => {
  const mockData = [
    {
      img: '이미지1',
      title: '그릭요거트1',
      time: 'am:08:31',
      kcal: '300kcal',
    },
    {
      img: '이미지2',
      title: '그릭요거트2',
      time: 'am:09:31',
      kcal: '300kcal',
    },
    {
      img: '이미지3',
      title: '그릭요거트3',
      time: 'am:010:31',
      kcal: '300kcal',
    },
    {
      img: '이미지4',
      title: '그릭요거트4',
      time: 'am:10:31',
      kcal: '300kcal',
    },
    {
      img: '이미지5',
      title: '그릭요거트5',
      time: 'am:11:31',
      kcal: '300kcal',
    },
    {
      img: '이미지6',
      title: '그릭요거트6',
      time: 'pm:12:31',
      kcal: '300kcal',
    },
  ];

  return (
    <>
      <Helmet>
        <title>마이페이지</title>
      </Helmet>
      <div className="container w-full h-full m-auto flex">
        <Sidebar></Sidebar>
        <div className="w-full">
          <div className=" ml-8 mb-[20px] rounded-2xl border bg-white drop-shadow-md">
            <div className="flex justify-between p-8">
              <div className="flex">
                <img
                  src={food}
                  alt="food"
                  className="w-[20px] h-[20px] self-center mr-3"
                />
                <Title name={'밥'} />
              </div>
              <button>
                <img src={calender} alt="food" />
              </button>
            </div>
            <div className="mx-4">
              <div className=" grid grid-cols-4 ">
                <div className="bg-[#BDD1D4] bg-center bg-addfood bg-no-repeat  h-[290px] rounded-2xl mx-[10px]" />
                {mockData.map((item, index) => {
                  return <FoodCard item={item} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DailyMenu;
