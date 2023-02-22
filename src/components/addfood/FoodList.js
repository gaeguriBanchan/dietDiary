/** @format */

import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import FoodListItem from './FoodListItem';

const FoodList = () => {
  const [foodContent, setFoodContent] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.0.16:9876/api/calex/calorie/list')
      .then((res) => {
        console.log(res.data.data);
        setFoodContent(res.data.data);
      })
      .catch();
  }, []);
  console.log('목록이지롱', foodContent);

  return (
    <>
      <div className=" w-full border  border-main rounded-2xl p-8 ">
        {foodContent.map((item, dceSeq) => {
          return <FoodListItem item={item} key={dceSeq} />;
        })}
      </div>
    </>
  );
};

export default FoodList;
