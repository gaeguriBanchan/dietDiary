/** @format */

import React from 'react';
import Title from '../components/base/Title';
import { Sidebar } from '../components/common/Sidebar';

const DailyMenu = () => {
  return (
    <div className="container w-full h-full">
      <div className="w-full h-full">
        <div className="w-full h-full m-auto flex">
          <Sidebar></Sidebar>
          <div>
            <h3 className="bg-food bg-no-repeat bg-left">
              <Title name={'밥'} />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyMenu;
