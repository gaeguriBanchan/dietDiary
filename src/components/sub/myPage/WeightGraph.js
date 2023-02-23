import { ResponsiveLine } from "@nivo/line";
import React from "react";

const WeightGraph = () => {
  const data = [
    {
      id: "주간 체중변화",
      data: [
        {
          x: "월",
          y: "80kg",
        },
        {
          x: "화",
          y: "83kg",
        },
        {
          x: "수",
          y: "81kg",
        },
        {
          x: "목",
          y: "82kg",
        },
        {
          x: "금",
          y: "79kg",
        },
        {
          x: "토",
          y: "85.5kg",
        },
        {
          x: "일",
          y: "85kg",
        },
      ],
    },
  ];
  return (
    <div className="w-full h-full bg-white rounded-2xl border mb-3">
      <p className=" text-xl text-main m-8 mb-0">체중변화 그래프</p>
      <div
        className="px-3"
        style={{ width: "full", height: "360px", margin: "0 auto" }}
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
      <div className="flex justify-end mb-5 pr-10 text-center items-center">
        <p className="text-textGray text-m font-normal pr-5">2월1일 금요일</p>
        <p className="text-textBlack text-xl font-medium font-MuseoModerno">85kg</p>
      </div>
    </div>
  );
};

export default WeightGraph;
