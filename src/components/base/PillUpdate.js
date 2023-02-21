import React from "react";
import { useState } from "react";
import style from "../../pages/Pill.css";

// const handleChecked=()

const PillUpdate = () => {
  return (
    <div className="grid grid-cols-2 w-full py-4 ">
      <label htmlFor="pill1" className="flex justify-between w-1/2 top-0">
        <span className={style.labelradio}>종합 영양제</span>
        <input
          id="pill1"
          type="checkbox"
          name="totalv"
          value="0"
          // checked={name === "totalv" ? true : false}
          onClick={(e) => e}
          style={{ cursor: "pointer", display: "none" }}
        />
        <input
          className={style.inputradio}
          id="pill1"
          type="checkbox"
          name="totalv"
          value="0"
          // checked={id === "pill1" ? true : false}
          onClick={(e) => e}
        />
        <input
          className={style.inputradio}
          id="pill1"
          type="checkbox"
          name="totalv"
          value="0"
          // checked={id === "pill1" ? true : false}
          onClick={(e) => e}
        />
      </label>
      <label htmlFor="p1" className="flex justify-between w-1/2">
        <span className={style.labelradio}>단백질</span>
        <input
          className={style.inputradio}
          id="p1"
          type="checkbox"
          name="protein"
          value="1"
          onClick={(e) => e}
        />
        <input
          className={style.inputradio}
          id="p1"
          type="checkbox"
          name="protein"
          value="2"
          onClick={(e) => e}
        />
      </label>
      <label htmlFor="p2" className="flex justify-between w-1/2">
        <span className={style.labelradio}>비타민</span>
        <input
          className={style.inputradio}
          id="p2"
          type="checkbox"
          name="vitamin"
          value="3"
          onClick={(e) => e}
        />
      </label>
    </div>
  );
};

export default PillUpdate;
