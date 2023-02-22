/** @format */
import { Helmet } from 'react-helmet';
import Background from '../components/base/Background';
import Title from '../components/base/Title';
import food from '../assets/images/icon/icon_b_food.png';
import search from '../assets/images/icon/search.png';

import { Sidebar } from '../components/common/Sidebar';
import axios from 'axios';
import RountButton from '../components/base/RoundButon';
import FoodList from '../components/addfood/FoodList';
import { useState } from 'react';
// import { useEffect } from 'react';
const Addfood = () => {
  const [btnActive, setBtnActive] = useState();
  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };
  const level = ['아침', '점심', '저녁', '오전간식', '오후간식', '저녁간식'];
  const levelBt = level.map((item, index) => {
    return (
      <button
        value={index}
        onClick={toggleActive}
        type="button"
        className={
          index.toString() === btnActive
            ? 'h-12 w-11/12 border text-center  border-main rounded-full bg-main text-white mb-4  '
            : 'h-12 w-11/12 border text-center  border-main text-main rounded-full mb-4 '
        }
      >
        {item}
      </button>
    );
  });

  return (
    <>
      <Helmet>
        <title>밥</title>
      </Helmet>
      <div className=" container w-full h-full m-auto flex">
        <Sidebar></Sidebar>

        <div className="w-full h-full ml-8 drop-shadow-md ">
          <Background>
            <div className="title">
              <div className="flex">
                <img
                  src={food}
                  alt="food"
                  className="w-[20px] h-[20px] self-center mr-3"
                />
                <Title name={'밥'} />
              </div>

              <div className=" my-8">
                <div className="grid grid-cols-3 px-8">{levelBt}</div>
              </div>
            </div>
          </Background>
          <Background>
            <label className="px-5 flex border border-main rounded-full mb-6">
              <input className="w-full bg-none focus:outline-none font-normal" />
              <img src={search} alt="search" />
            </label>
            <div className="flex mb-6">
              <button
                className={`h-12 w-full border  border-main text-main rounded-full mr-6 `}
                value="전체"
              >
                전체
              </button>
              <button
                className={`h-12 w-full border  border-main text-main rounded-full  ml-6 `}
                value="직접입력
                "
              >
                직접입력
              </button>
            </div>
            <FoodList />
          </Background>
        </div>
      </div>
    </>
  );
};

export default Addfood;
