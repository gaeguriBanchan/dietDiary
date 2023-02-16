import * as React from "react";
import plus from "../../assets/images/icon/icon_w_add.png";
import minus from "../../assets/images/icon/icon_w_del.png";

const WaterDrop = () => {
  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div
      className=""
      style={{ width: "800px", height: "300px", margin: "0 auto" }}
    >
      <div className="btn">
        <button className="">
          <img src={plus} alt="plus" />
        </button>
        <button className="">
          <img src={minus} alt="minus" />
        </button>
      </div>
    </div>
  );
};

export default WaterDrop;
