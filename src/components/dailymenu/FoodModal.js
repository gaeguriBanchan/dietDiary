/** @format */

import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Background from "../base/Background";
import BarButton from "../base/BarButton";
import dummyData from "./dummyData.json";
import { useSelector } from "react-redux";

const FoodModal = ({ close, foodList, item }) => {
  const [Edit, setEdit] = useState({ name: "수정", EditBt: false });
  const [totalLength, setTotalLength] = useState("");

  const user = useSelector((state) => state.user);
  const miToken = user.miToken;

  const tL = (e) => {
    setTotalLength(e.target.value);
  };
  const dietEdit = (e) => {
    setEdit(() => {
      if (Edit.EditBt) {
        return { name: "수정", EditBt: false };
      } else {
        return { name: "등록", EditBt: true };
      }
    });
  };
  //시간표기
  const data = item.dfRegDt;
  let a = data.slice(11, 16);
  function convert12H(time, options) {
    var _ampmLabel = (options && options.ampmLabel) || ["오전", "오후"];
    var _timeRegExFormat = /^([0-9]{2}):([0-9]{2})$/;
    var _timeToken = time.match(_timeRegExFormat);
    if (typeof _timeRegExFormat === "undefine") {
      // 잘못된 형식
      return null;
    }
    var _intHours = parseInt(_timeToken[1]);
    var _intMinutes = parseInt(_timeToken[2]);
    var _strHours12H = ("0" + (_intHours == 12 ? 12 : _intHours % 12)).slice(
      -2
    );
    return (
      _ampmLabel[parseInt(_intHours / 12)] +
      " " +
      _strHours12H +
      ":" +
      _intMinutes
    );
  }
  const time = convert12H(a, {
    ampmLabel: ["am", "pm"],
  });

  // 식단 삭제

  const delFood = () => {
    // let params = {
    //   token: miToken,
    //   dfSeq: dfSeq,
    // };
    // axios
    //   .get(
    //     `http://192.168.0.16:9876/api/diet/delete?token=${miToken}&dfSeq=${dfSeq}`,
    //     params
    //   )
    //   .then((res) => {
    //     console.log(res);
    // alert("성공!")
    //   })
    //   .catch((err) => {
    //     console.log(err);
    // alert("삭제에 실패했습니다.")
    //   });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Background>
        <div className="w-full ite flex justify-between">
          <p>
            <span className="w-full text-3xl text-main">밥</span>
            <span className="font-MuseoModerno font-normal text-3xl text-second ml-8">
              {time}
            </span>
          </p>

          <button className="bg-close bg-no-repeat w-8 h-8 " onClick={close} />
        </div>
        {Edit.name === "수정" ? (
          <>
            <div className="flex flex-col justify-center items-center p-8">
              <div className="w-[525px] h-[525px] bg-textGray rounded-2xl "></div>
              <span className="my-8 text-4xl text-textBlack">
                {item.dfMenu}
              </span>
              <span className="mb-8 text-5xl font-MuseoModerno font-normal text-textGray ">
                {item.dfKcal}kcal
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
                  메모메모
                </p>
              </div>
            </div>
            <div onClick={dietEdit}>
              <BarButton name={Edit.name} color={"main"} />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center p-8">
              <div className="w-[525px] h-[525px] bg-textGray rounded-2xl " />
              <label>
                <input
                  type="text"
                  placeholder={item.dfMenu}
                  className="my-8 text-4xl text-textBlack text-center"
                ></input>
              </label>
              <div>
                <label>
                  <input
                    className="mb-8 text-5xl font-MuseoModerno font-normal text-center"
                    type="text"
                    placeholder={item.dfKcal + "Kcal"}
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
            <div className="mb-2" onClick={delFood}>
              <BarButton name={"삭제"} color={"textRed"} />
            </div>
            <div onClick={close}>
              <BarButton name={Edit.name} color={"main"} />
            </div>
          </>
        )}
      </Background>
    </div>
  );
};

export default FoodModal;
