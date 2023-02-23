/** @format */

import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import style from '../addfood/foodlist.module.css';
import Memo from '../base/Memo';
import RountButton from '../base/RoundButon';

import FoodListItem from './FoodListItem';

const FoodList = () => {
  const [foodContent, setFoodContent] = useState([]);
  const [radioVal, setRadioVal] = useState('');
  const [dceKcal, setDceKcal] = useState(0);
  const [dceStandard, setDceStandard] = useState(0);
  const [sujaebi, setSujaebi] = useState('');
  const selectRadio = (_item) => {
    setRadioVal(_item.dceContent);
    setDceKcal(_item.dceKcal);
    setDceStandard(_item.dceStandard);
    setSujaebi(_item.sujaebi);
    console.log(radioVal);
  };
  console.log(radioVal);

  useEffect(() => {
    axios
      .get('http://192.168.0.16:9876/api/calex/calorie/list')
      .then((res) => {
        console.log(res.data.data);
        setFoodContent(res.data.data);
      })
      .catch();
  }, [radioVal]);
  console.log('목록이지롱', foodContent);

  // {dceSeq: 1, dceContent: '수제비', dceImage: 'sujaebi.jpg', dceKcal: 200, dceStandard: '1인분 '}

  return (
    <>
      <div
        className={` w-full h-96 border overflow-y-scroll border-main rounded-2xl p-8 mb-8 bg-white ${style.scroll}`}
      >
        {foodContent.map((item, index) => {
          return (
            <div>
              <FoodListItem item={item} key={index} selectRadio={selectRadio} />
            </div>
          );
        })}
      </div>
      <div className="w-full border border-main rounded-2xl p-12 mb-8 bg-white">
        <div>
          <div>
            <label className="p-3 flex border-b border-textAsh mb-6">
              <input
                className="w-full bg-none focus:outline-none font-normal "
                placeholder="음식이름"
              />
            </label>
          </div>
          <div className="w-full flex justify-center items-center align-middle text-lg">
            <div className="flex w-1/2 px-3">
              <span className="w-1/2 text-textBlack">칼로리</span>
              <label className="flex">
                <input
                  type="text"
                  className="border-b border-textAsh px-2 focus:outline-none"
                />
                <span className="text-textBlack">Kcal</span>
              </label>
            </div>
            <div className="flex w-1/2">
              <RountButton name={'취소'} text={'main'} color={'white'} />
              <RountButton name={'저장'} text={'white'} color={'main'} />
            </div>
          </div>
        </div>
      </div>
      {radioVal === '' ? (
        <div></div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className="w-[500px] h-[400px] bg-main rounded-2xl mb-8">
                {sujaebi}
              </div>
              <p className="text-5xl text-textBlack text-center">{radioVal}</p>
              <p className="flex justify-between items-end text-textGray font-normal my-8">
                <span className="text-3xl leading-[30px]">{dceStandard}</span>
                <span className="text-5xl font-medium font-MuseoModerno leading-[40px]">
                  {dceKcal} Kcal
                </span>
              </p>
            </div>
          </div>
          <Memo />
        </>
      )}
    </>
  );
};

export default FoodList;
