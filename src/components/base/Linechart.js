import { ResponsiveLine } from "@nivo/line";
import React from "react";

const Linechart = () => {
  const data = [
    {
      id: "주간 음수량",
      data: [
        {
          x: "월",
          y: "1컵",
        },
        {
          x: "화",
          y: "2컵",
        },
        {
          x: "수",
          y: "4컵",
        },
        {
          x: "목",
          y: "5컵",
        },
        {
          x: "금",
          y: "4컵",
        },
        {
          x: "토",
          y: "2컵",
        },
        {
          x: "일",
          y: "3컵",
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
    <div
      className=""
      style={{ width: "800px", height: "300px", margin: "0 auto" }}
    >
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        lineWidth={4}
        colors={"#81CFD1"}
        pointSize={10}
        pointColor={"white"}
        pointBorderWidth={3}
        pointBorderColor={"#6E9399"}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "#6E9399",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "#fff",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Linechart;
