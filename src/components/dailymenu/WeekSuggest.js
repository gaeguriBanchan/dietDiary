/** @format */

import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const WeekSuggest = () => {
  const [suggestList, setSuggestList] = useState([]);
  useEffect(() => {
    axios
      .get('http://192.168.0.16:9876/api/suggest/suggest/week?token=token1')
      .then((res) => {
        console.log(res.data.data);
        setSuggestList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log('리스트', suggestList);

  const suggesSug = suggestList.map((item, index) => {
    return (
      <div key={index}>
        <span>{item.date}</span>
      </div>
    );
  });

  return (
    <div>
      <p>뭐야</p>
      <p>{suggesSug}</p>
    </div>
  );
};

export default WeekSuggest;
