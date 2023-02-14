import { ResponsiveBump } from "@nivo/bump";
import React from "react";

const Bumpchart = () => {
  const data = [
    {
      id: "주간 음수량",
      data: [
        {
          x: "월",
          y: 1500,
        },
        {
          x: "화",
          y: 1500,
        },
        {
          x: "수",
          y: 1500,
        },
        {
          x: "목",
          y: 1500,
        },
        {
          x: "금",
          y: 1500,
        },
        {
          x: "토",
          y: 1500,
        },
        {
          x: "일",
          y: 1700,
        },
      ],
    },
  ];
  return (
    // make sure parent container have a defined height when using
    // responsive component, otherwise height will be 0 and
    // no chart will be rendered.
    // website examples showcase many properties,
    // you'll often use just a few of them.
    <div style={{ width: "800px", height: "300px", margin: "0 auto" }}>
      <ResponsiveBump
        data={data}
        colors={"#81CFD1"}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={13}
        inactivePointSize={0}
        pointColor={"white"}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={"#6E9399"}
        axisTop={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
      />
    </div>
  );
};

export default Bumpchart;
