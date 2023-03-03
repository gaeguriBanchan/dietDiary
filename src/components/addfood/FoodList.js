/** @format */

import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import style from '../addfood/foodlist.module.css';
import Memo from '../base/Memo';
import BarButton from '../base/BarButton';
import FoodListItem from './FoodListItem';
import useInput from './useinput';

const FoodList = ({
  foodContent,
  setFoodContent,
  dceKcal,
  dceStandard,
  dceImage,
  selectRadio,
  radioVal,
  addBycal,
}) => {
  const [memoContent, userMemoContent] = useInput('');

  useEffect(() => {
    axios
      .get('http://192.168.0.16:9876/api/calex/calorie/list')
      .then((res) => {
        console.log(res.data.data);
        setFoodContent(res.data.data);
      })
      .catch();
  }, [radioVal]);
  // console.log("목록이지롱", foodContent);

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

      {radioVal === '' ? (
        <div> </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center">
            <div>
              <div className="w-[500px] h-[400px] bg-main rounded-2xl mb-8 overflow-hidden">
                <img
                  src={`http://192.168.0.16:9876/api/calex/calorie/image/${dceImage}`}
                  alt={dceImage}
                  className="w-full h-full"
                />
              </div>
              <p className="text-5xl text-textBlack text-center">
                {radioVal}&nbsp;
              </p>
              <p className="flex justify-between items-end text-textGray font-normal my-8">
                <span className="text-3xl leading-[30px]">{dceStandard}</span>
                <span className="text-5xl font-medium font-MuseoModerno leading-[40px]">
                  {dceKcal} Kcal
                </span>
              </p>
            </div>
          </div>
          <Memo memoContent={memoContent} userMemoContent={userMemoContent} />
          <BarButton name={'등록'} color={'main'} handleSubmit={addBycal} />
        </>
      )}
    </>
  );
};

export default FoodList;
