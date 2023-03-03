import React, { useState, useEffect, useRef } from "react";
import plus from "../../assets/images/icon/icon_w_add.png";
import minus from "../../assets/images/icon/icon_w_del.png";
import water from "../../assets/images/water_drop_water2.png";
import bg from "../../assets/images/water_drop_bg.png";

const WaterDrop = () => {
  // 물방울 변경 관련
  const [cup, setCup] = useState(10);
  // let result = 100 * (1 + count / 100);
  // setCup(result);
  const [count, setCount] = useState(0);
  const plusCount = () => {
    setCount(count + 1);
    if (count > 9) return setCount(count);
  };
  const minusCount = () => {
    return count > 0 ? setCount((prev) => prev - 1) : false;
  };
  const upDown = useRef(null);
  useEffect(() => {
    upDown.current.style.top = `${-12 * count}px`;
  }, [count]);

  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <figure id="Drop">
      <div
        className=""
        style={{ width: "500px", height: "300px", margin: "0 auto" }}
      >
        {" "}
        <div className="pb-3">
          <div
            className="h-full waterBox"
            style={{
              position: "relative",
              width: "140px",
              height: "140px",
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <img
              src={bg}
              alt="waterdrop"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "140px",
                height: "140px",
                margin: "0 auto",
                zIndex: 9,
              }}
            />
            <img
              src={water}
              alt="waterdrop"
              className="mt-[120px]"
              ref={upDown}
              style={{
                position: "absolute",
                left: 0,
                top: 50,
                width: "140px",
                height: "140px",
                transition: "top 0.3s ease-in-out",
              }}
            />
          </div>
        </div>
        <div className="btn flex justify-around translate-y-5">
          <button onClick={plusCount}>
            <img src={plus} alt="plus" />
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
                  /&#32;{cup}
                  <span className="font-NanumSquareNeo font-bold">&#32;컵</span>
                </p>
                <p
                  className="pl-1 font-MuseoModerno font-normal text-[15px] tracking-tighter"
                  style={{ color: "#6D9399" }}
                >
                  &#32;{cup * 200}ml
                </p>
              </div>
            </>
          </div>
          <button onClick={minusCount}>
            <img src={minus} alt="minus" />
          </button>
        </div>
      </div>
    </figure>
  );
};

export default WaterDrop;
