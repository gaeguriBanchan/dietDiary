import React from "react";
import { useState } from "react";
import style from "../../pages/Pill.css";

const Changehandle = () => {};

const PillUpdate = () => {
  return (
    <div className="grid grid-cols-2 w-full py-4 ">
      <label htmlFor="p0" className="flex justify-between w-1/2 top-0">
        <span className={style.labelradio}>종합 영양제</span>
        <input
          className={style.inputradio}
          id="pill0"
          type="checkbox"
          name="totalv"
          value="0"
          onClick={(e) => e}
        />
      </label>
      <label htmlFor="p1" className="flex justify-between w-1/2">
        <span className={style.labelradio}>단백질&#32;</span>
        <input
          className={style.inputradio}
          id="pill1"
          type="checkbox"
          name="protein"
          value="1"
          onClick={(e) => e}
        />
        <input
          className={style.inputradio}
          id="pill1_1"
          type="checkbox"
          name="protein"
          value="2"
          onClick={(e) => e}
        />
      </label>
      <label htmlFor="p2" className="flex justify-between w-1/2">
        <span className={style.labelradio}>비타민&#32;</span>
        <input
          className={style.inputradio}
          id="pill2"
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
