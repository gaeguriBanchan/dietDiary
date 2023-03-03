/** @format */

import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Barchart = () => {
  const data = [
    {
      id: 'drinking',
      water: 82,
      waterColor: '#81CFD1',
    },
    {
      id: 'empty',
      water: 100,
      waterColor: '#FFF',
    },
  ];
  return (
    <div
      className=""
      style={{ width: '750px', height: '170px', margin: '0 auto' }}
    >
      <ResponsiveBar
        data={data}
        keys={['water', 'empty']}
        indexBy="country"
        margin={{ top: 0, right: 130, bottom: 20, left: 40 }}
        padding={0.5}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={'#81CFD1'}
        borderRadius={30}
        borderWidth={1}
        borderColor={'#DDDCE2'}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={0}
        labelSkipHeight={0}
        labelTextColor={'none'}
        legends={[]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return (
            e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
          );
        }}
      />
    </div>
  );
};

export default Barchart;
