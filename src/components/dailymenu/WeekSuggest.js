/** @format */

import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const WeekSuggest = () => {
  const [suggestList, setSuggestList] = useState();
  useEffect(() => {
    axios
      .get('http://192.168.0.16:9876/api/suggest/suggest/week?token=token1')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
};

export default WeekSuggest;
