/** @format */

import React, { useState } from 'react';
import Background from '../base/Background';
import BarButton from '../base/BarButton';
import dummyData from './dummyData.json';

const FoodModal = ({ close, foodList }) => {
  const [Edit, setEdit] = useState({ name: '수정', EditBt: false });
  const [totalLength, setTotalLength] = useState('');
  const tL = (e) => {
    setTotalLength(e.target.value);
  };
  const dietEdit = (e) => {
    setEdit(() => {
      if (Edit.EditBt) {
        return { name: '수정', EditBt: false };
      } else {
        return { name: '등록', EditBt: true };
      }
    });
  };

  return (
    <div>
      <Background>
        <div className="w-full ite flex justify-between">
          <p>
            <span className="w-full text-3xl text-main">아침</span>
            <span className="font-MuseoModerno font-normal text-3xl text-second ml-8">
              am 08: 30
            </span>
          </p>

          <button className="bg-close bg-no-repeat w-8 h-8 " onClick={close} />
        </div>
        {Edit.name === '수정' ? (
          <>
            <div className="flex flex-col justify-center items-center p-8">
              <div className="w-[525px] h-[525px] bg-textGray rounded-2xl "></div>
              <span className="my-8 text-4xl text-textBlack">
                {dummyData.diet[0].title}
              </span>
              <span className="mb-8 text-5xl font-MuseoModerno font-normal text-textGray ">
                {dummyData.diet[0].kcal}kcal
              </span>
            </div>
            <div className="bg-[#F6F6F6] rounded-2xl mb-8">
              <div className="p-8">
                <p className="text-textGray font-MuseoModerno font-normal text-[24px]">
                  memo
                </p>
                <p
                  className="font-normal w-full bg-[#F6F6F6] focus:outline-none p-3 text-[24px] resize-none h-[250px]"
                  maxLength="150"
                >
                  {dummyData.diet[0].kcal}
                </p>
              </div>
            </div>
            <div onClick={dietEdit}>
              <BarButton name={Edit.name} color={'main'} />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center p-8">
              <div className="w-[525px] h-[525px] bg-textGray rounded-2xl " />
              <label>
                <input
                  type="text"
                  placeholder={dummyData.diet[0].title}
                  className="my-8 text-4xl text-textBlack text-center"
                ></input>
              </label>
              <div>
                <label>
                  <input
                    className="mb-8 text-5xl font-MuseoModerno font-normal text-center"
                    type="text"
                    placeholder={dummyData.diet[0].kcal + 'Kcal'}
                  ></input>
                </label>
              </div>

              {/* <span className="mb-8 text-5xl font-MuseoModerno font-normal text-textGray ">
              {dummyData.diet[0].kcal}
            </span> */}
            </div>
            <div className="bg-[#F6F6F6] rounded-2xl mb-8">
              <div className="p-8">
                <p className="text-textGray font-MuseoModerno font-normal text-[24px]">
                  memo
                </p>
                <textarea
                  className="font-normal w-full bg-[#F6F6F6] focus:outline-none p-3 text-[24px] resize-none h-[250px]"
                  maxLength="150"
                  value={totalLength}
                  onChange={tL}
                />
                <p className=" left-0 text-xs text-textGray flex justify-end">
                  <span>{totalLength.length}/150</span>
                </p>
              </div>
            </div>
            <div className="mb-2" onClick={close}>
              <BarButton name={'삭제'} color={'textRed'} />
            </div>
            <div onClick={close}>
              <BarButton name={Edit.name} color={'main'} />
            </div>
          </>
        )}
      </Background>
    </div>
  );
};

export default FoodModal;
