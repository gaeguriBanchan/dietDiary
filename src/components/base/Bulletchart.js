import React from "react";

import { ResponsiveBullet } from "@nivo/bullet";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Bulletchart = () => {
  const data = [
    {
      id: "달성률",
      ranges: [10],
      measures: [70],
      markers: [100],
    },
  ];
  return (
    <div style={{ width: "800px", height: "150px", margin: "0 auto" }}>
      <ResponsiveBullet
        data={data}
        margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
        spacing={46}
        titleAlign="start"
        titleOffsetX={-70}
        measureSize={0.2}
      />
    </div>
  );
};

export default Bulletchart;
