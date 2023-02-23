import React from "react";
import Background from "../components/base/Background";
import myIcon from "../assets/images/icon/icon_b_my.png";
import BarButton from "../components/base/BarButton";
import { Link } from "react-router-dom";
import { useState } from "react";

const Join = () => {
  const [btnActive, setBtnActive] = useState();
  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };
  const level = ["건강", "쉬움", "보통", "강함"];
  const levelBt = level.map((item, index) => {
    return (
      <button
        value={index}
        onClick={toggleActive}
        type="button"
        className={
          index.toString() === btnActive
            ? "border border-main rounded-full px-7 bg-main text-white"
            : "border rounded-full px-7"
        }
      >
        {item}
      </button>
    );
  });
  const Level = () => {
    return (
      <>
        <div className="text-3xl flex justify-around text-textAsh text-center mx-[150px] mb-[50px]">
          {levelBt}
        </div>
      </>
    );
  };
  return (
    <>
      <Background>
        <div className="flex justify-between">
          <div className="flex">
            <img
              src={myIcon}
              alt="profile"
              className="w-[20px] h-[20px] self-center mr-3"
            />
            <p className="text-main text-xl">프로필</p>
          </div>
        </div>
        <div className="w-[300px] h-[300px] m-auto rounded-full bg-textGray mb-[50px]"></div>
        <p className="text-4xl text-textBlack text-center mb-[10px]">이름</p>
        <Level/>
        {/* <div className="text-3xl flex justify-around text-textAsh text-center mx-[150px] mb-[50px]">
          <button type="button" className="border rounded-full px-7">
            건강
          </button>
          <button type="button" className="border rounded-full px-7">
            쉬움
          </button>
          <button type="button" className="border rounded-full px-7">
            보통
          </button>
          <button type="button" className="border rounded-full px-7">
            강함
          </button>
        </div> */}
        <div className="flex justify-around mb-[70px]">
          <div className="">
            <p className="text-center text-main mb-[10px] text-2xl">나이</p>
            <input
              type="text"
              className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
              placeholder={"25세"}
            />
          </div>
          <div className="">
            <p className="text-center text-main mb-[10px] text-2xl">신장</p>
            <input
              type="text"
              className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
              placeholder={"170cm"}
            />
          </div>
          <div className="">
            <p className="text-center text-main mb-[10px] text-2xl">체중</p>
            <input
              type="text"
              className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
              placeholder={"70kg"}
            />
          </div>
        </div>
        <div className="mb-[30px]">
          <div className=" m-auto justify-center text-center mb-[70px]">
            <p className="text-center text-main mb-[10px] text-2xl">
              다이어트 기간
            </p>
            <span className="flex items-center justify-center">
              <input
                className="max-w-[140px] h-[90px] text-[62px] font-MuseoModerno text-center text-textBlack focus:outline-none"
                type="text"
                placeholder="300"
              />
              <p className="text-[26px] text-textGray font-normal">일</p>
            </span>
            <div className="w-[280px] h-[1px] m-auto bg-textAsh"></div>
          </div>
          <div className=" m-auto justify-center text-center mb-[70px]">
            <p className="text-center text-main mb-[10px] text-2xl">
              목표 섭취 칼로리
            </p>
            <span className="flex items-center justify-center">
              <input
                className="max-w-[160px] h-[90px] text-[62px] font-MuseoModerno text-center text-textBlack focus:outline-none"
                type="text"
                placeholder="2500"
              />
              <p className="text-[26px] text-textGray font-normal">Kcal</p>
            </span>
            <div className="w-[280px] h-[1px] m-auto bg-textAsh"></div>
          </div>
          <div className=" m-auto justify-center text-center mb-[70px]">
            <p className="text-center text-main mb-[10px] text-2xl">
              목표 음수량
            </p>
            <span className="flex items-center justify-center">
              <input
                className="max-w-[100px] h-[90px] text-[62px] font-MuseoModerno text-center text-textBlack focus:outline-none"
                type="text"
                placeholder="8"
              />
              <p className="text-[26px] text-textGray font-normal">컵</p>
            </span>
            <div className="w-[280px] h-[1px] m-auto bg-textAsh"></div>
          </div>
          <div className=" m-auto justify-center text-center mb-[70px]">
            <p className="text-center text-main mb-[10px] text-2xl">
              목표 체중
            </p>
            <span className="flex items-center justify-center">
              <input
                className="max-w-[120px] h-[90px] text-[62px] font-MuseoModerno text-center text-textBlack focus:outline-none"
                type="text"
                placeholder="80"
              />
              <p className="text-[26px] text-textGray font-normal">kg</p>
            </span>
            <div className="w-[280px] h-[1px] m-auto bg-textAsh"></div>
          </div>
        </div>
        <Link to="/today">
          <BarButton name={"회원가입"} color={"main"} />
        </Link>
      </Background>
    </>
  );
};

export default Join;
