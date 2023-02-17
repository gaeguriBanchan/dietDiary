import * as React from "react";
import plus from "../../assets/images/icon/icon_w_add.png";
import minus from "../../assets/images/icon/icon_w_del.png";
import waterDrop from "../../assets/images/water_drop.png";

const WaterDrop = () => {
  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div
      className=""
      style={{ width: "500px", height: "300px", margin: "0 auto" }}
    >
      <img src={waterDrop} alt="waterdrop" className="mx-auto pb-10" />
      <div className="btn flex justify-around translate-y-5">
        <button className="">
          <img src={plus} alt="plus" />
        </button>
        <div className="flex items-center flex-col">
          <>
            <p
              className="font-MuseoModerno font-normal text-5xl"
              style={{ color: "#0C3547" }}
            >
              2
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
                /&#32;8
                <span className="font-NanumSquareNeo font-bold">&#32;컵</span>
              </p>
              <p
                className="pl-1 font-MuseoModerno font-normal text-[15px] tracking-tighter"
                style={{ color: "#6D9399" }}
              >
                &#32;(400ml)
              </p>
            </div>
          </>
        </div>
        <button>
          <img src={minus} alt="minus" />
        </button>
      </div>
    </div>
  );
};

export default WaterDrop;
