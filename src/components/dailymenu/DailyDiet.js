/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const DailyDiet = () => {
  const user = useSelector((state) => state.user);
  const miToken = user.miToken;

  const [sugges, setSugges] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.0.16:9876/api/suggest/suggest/list?token=${miToken}`)
      .then((res) => {
        if (res.data.data) {
          setSugges(res.data.data);
        }
      })
      .catch();
  }, []);

  //  dietContent  :   "새우, 닭가슴살 100g, 야채 2컵"
  //  dietDate :  "2023-03-03"
  //  dietHard :  1
  //  dietSeq :  37
  //  dietStatus :  4
  //  dietTotalCal :  225

  return (
    <div className="px-8 mb-4">
      {sugges.map((item, dietSeq) => {
        return (
          <div className="flex justify-between" key={dietSeq}>
            <span className="text-textGray">{item.dietContent}</span>
            <span className="text-textBlack">{item.dietTotalCal} kcal</span>
          </div>
        );
      })}
    </div>
  );
};

export default DailyDiet;

// <p>
// <span>총 섭취 칼로리</span>
// <span>
//   {Number(item.dietTotalCal) * Number(sugges.length)}kcal
// </span>
// </p>
