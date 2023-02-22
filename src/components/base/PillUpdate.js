// import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from "../../pages/Pill.module.css";
import BarButton from "./BarButton";

// const handleChecked=()

const PillUpdate = () => {
  const [Edit, setEdit] = useState({ name: "추가", EditBt: false });
  const PillEdit = (e) => {
    setEdit(() => {
      if (Edit.EditBt) {
        return { name: "추가", EditBt: false };
      } else {
        return { name: "등록", EditBt: true };
      }
    });
  };
  useEffect(() => {}, [Edit]);
  // axios
  //   .put("http://192.168.0.16:9876/api/pill/add?token=1")
  //   .then(() => {})
  //   .catch((err) => {
  //     console.log("실패^^");
  //   });
  return (
    <div>
      {Edit.name === "추가" ? (
        <>
          <div className="">
            <div className="pill-left">
              <div className="pill-0">
                <label htmlFor="pill">
                  <span className={style.labelradio}>종합 영양제</span>
                  <input type={"checkbox"} className={style.inputradio} />
                  <input type={"checkbox"} className={style.inputradio} />
                  <input type={"checkbox"} className={style.inputradio} />
                </label>
              </div>
              <div className="pill-1">
                <span className={style.labelradio}>비타민</span>
              </div>
            </div>
            <div className="pill-right justify-between">
              <div className="pill-2">
                <span className={style.labelradio}>단백질</span>
              </div>
            </div>
          </div>
          <div onClick={(e) => PillEdit(e)}>
            <BarButton name={Edit.name} color={"main"} />
          </div>
        </>
      ) : (
        <>
          <div className="w-full py-4">
            <form action="">
              <input
                type="text"
                className="w-full h-14 font-nomal focus:outline-none border border-main rounded-2xl pl-3"
                placeholder="약의 종류를 입력해주세요"
              />
              <input
                type="number"
                className="w-full h-14 font-nomal focus:outline-none border border-main rounded-2xl pl-3 mt-3"
                placeholder="복용 횟수를 입력해주세요"
              />
            </form>
          </div>
          <div className="mb-2" onClick={PillEdit}>
            <BarButton name={"취소"} className="cancel" color={"textRed"} />
          </div>
          <div onClick={(e) => PillEdit(e)}>
            <BarButton name={Edit.name} color={"main"} />
          </div>
        </>
      )}
    </div>
  );
};

export default PillUpdate;
