import * as React from "react";
import { useState } from "react";
import plus from "../../assets/images/icon/icon_w_add.png";
import minus from "../../assets/images/icon/icon_w_del.png";
import water from "../../assets/images/water_drop_water.png";
import bg from "../../assets/images/water_drop_bg.png";
import { useRef } from "react";

const WaterDrop = () => {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(() => {
      if (count === 0) {
        setCount(0);
      } else {
        setCount(count - 1);
      }
    });
  };
  const drop = useRef(null);
  // const waterUpDown = () => {
  //   drop.current = setDrop(()=>setCount())
  // };
  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div
      className=""
      style={{ width: "500px", height: "300px", margin: "0 auto" }}
    >
      {" "}
      <div className="translate-x-44 pb-32">
        <figure>
          <img
            src={water}
            alt="waterdrop"
            className="absolute mx-auto pb-10"
            ref={drop}
          />
        </figure>
        <img src={bg} alt="waterdrop" className="absolute mx-auto pb-10" />
      </div>
      <div className="btn flex justify-around translate-y-5">
        <button className="" onClick={plusCount}>
          <img src={plus} alt="plus" onClick={(e) => drop} />
        </button>
        <div className="flex items-center flex-col">
          <>
            <p
              className="font-MuseoModerno font-normal text-5xl"
              style={{ color: "#0C3547" }}
            >
              {count}
              <span
                className="font-NanumSquareNeo align-[4.5px] text-3xl font-bold"
                style={{ color: "#0C3547" }}
              >
                컵
              </span>
            </p>
          </>

          <>
            <div className="flex">
              <p
                className="font-MuseoModerno font-normal text-[15px] self-center"
                style={{ color: "#6D9399" }}
              >
                /&#32;{count}
                <span className="font-NanumSquareNeo font-bold">&#32;컵</span>
              </p>
              <p
                className="pl-1 font-MuseoModerno font-normal text-[15px] tracking-tighter"
                style={{ color: "#6D9399" }}
              >
                &#32;({count * 200}ml)
              </p>
            </div>
          </>
        </div>
        <button onClick={minusCount}>
          <img src={minus} alt="minus" />
        </button>
      </div>
    </div>
  );
};

export default WaterDrop;
