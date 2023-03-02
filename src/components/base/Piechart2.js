import * as React from "react";
import { ResponsivePie } from "@nivo/pie";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const Piechart2 = () => {
  const user = useSelector((state) => state.user);
  const miToken = user.miToken;

  const handle = {
    padClick: (data) => {
      console.log(data);
    },

    legendClick: (data) => {
      console.log(data);
    },
  };
  const [chartData, setChartData] = useState([]);

  let param = {
    id: miToken,
    date: "2023-02-27",
  };
  // useEffect(() => {
  //   axios
  //     .get(
  //       "http://192.168.0.16:9876/api/water/day?token=token1&date=2023-02-27",
  //       param
  //     )
  //     .res((res) => {
  //       console.log(res);
  //       let chaData = {
  //          id: miToken,
  //          value: res.body.wiSuccess,
  //        };
  //        setChartData();
  //     })
  //     .catch((err) => {
  //       console.log("에러났어용");
  //     });
  // }, []);

  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div style={{ width: "300px", height: "300px" }}>
      <ResponsivePie
        /**
         * chart에 사용될 데이터
         */
        data={[
          { id: "water", value: 36 },
          { id: "남은 목표량", value: 64 },
        ]}
        /**
         * chart margin
         */
        margin={{ top: 40, right: 30, bottom: 40, left: 30 }}
        /**
         * chart 중간 빈공간 반지름
         */
        innerRadius={0.7}
        /**
         * pad 간격
         */
        padAngle={1.8}
        /**
         * pad radius 설정 (pad별 간격이 있을 시 보임)
         */
        cornerRadius={8}
        /**
         * chart 색상
         */
        colors={["#81CFD1", "#BDD1D4"]} // 커스터하여 사용할 때
        // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
        /**
         * pad border 두께 설정
         */
        borderWidth={0}
        /**
         * link label skip할 기준 각도
         */
        arcLinkLabelsSkipAngle={0}
        /**
         * link label 색상
         */
        arcLinkLabelsTextColor="none"
        /**
         * link label 연결되는 선 두께
         */
        arcLinkLabelsThickness={2}
        /**
         * link label 연결되는 선 색상
         */
        arcLinkLabelsColor={{ from: "water" }} // pad 색상에 따라감
        /**
         * label (pad에 표현되는 글씨) skip할 기준 각도
         */
        arcLabelsSkipAngle={10}
        theme={{
          /**
           * label style (pad에 표현되는 글씨)
           */
          labels: {
            text: {
              fontSize: 0,
              fill: "none",
            },
          },
        }}
        /**
         * pad 클릭 이벤트
         */
        onClick={handle.padClick}
        /**
         * legend 설정 (default로 하단에 있는 색상별 key 표시)
         */
      />
    </div>
  );
};

export default Piechart2;
