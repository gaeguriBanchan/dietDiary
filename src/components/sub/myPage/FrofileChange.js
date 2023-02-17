import React from "react";
import myIcon from "../../../assets/images/icon/icon_b_my.png";

const FrofileChange = () => {
  return (
    <div className="h-[770px] mb-[20px] rounded-2xl bg-white p-8">
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
      <div className="w-[300px] h-[300px] m-auto rounded-full bg-textGray mb-[50px]">
      </div>
      <p className="text-4xl text-textBlack text-center mb-[10px]">김개똥</p>
      <div className="text-3xl flex justify-around text-textAsh text-center mx-[150px] mb-[50px]">
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
      </div>
      <div className="flex justify-around">
        <div className="">
          <p className="text-center text-main mb-[10px] text-2xl">나이</p>
          <input
            type="text"
            className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
            placeholder="25세"
          />
        </div>
        <div className="">
          <p className="text-center text-main mb-[10px] text-2xl">신장</p>
          <input
            type="text"
            className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
            placeholder="170 cm"
          />
        </div>
        <div className="">
          <p className="text-center text-main mb-[10px] text-2xl">체중</p>
          <input
            type="text"
            className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
            placeholder="85 kg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrofileChange;
