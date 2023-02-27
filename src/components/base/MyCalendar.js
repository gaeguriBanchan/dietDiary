/** @format */

import React from "react";
import Calendar from "react-calendar";

// 날짜 관련 라이브러리
import moment from "moment/moment";
// 한글로 출력하게 해줌.
import "moment/locale/ko";
import { useState } from "react";

import iconTrue from "../../assets/images/icon/icon_c_true.png";
import iconFalse from "../../assets/images/icon/icon_c_false.png";

const MyCalendar = ({ menu, goalList, changeDay }) => {
  const publicFolder = process.env.PUBLIC_URL; // 이미지 출력
  const [value, onChange] = useState(new Date());
  const calendarMonthFormat = {
    monthShort: "MMM",
  };
  const showTile = ({ date, view }) => {
    let html = [];

    // 우선 mark 와 같은 경우 item 을 리턴하여 저장한다.
    let obj = goalList.find((item, index) => {
      if (item.date === moment(date).format("YYYY-MM-DD")) {
        return item;
      }
    });

    if (obj !== undefined) {
      html.push(
        <div key={obj.date}>
          {obj.goal ? (
            <img src={iconTrue} alt="아이콘" style={{}} />
          ) : (
            <img src={iconFalse} alt="아이콘" style={{}} />
          )}
        </div>
      );

      return <div>{html}</div>;
    }

    return null;
  };
  // 날짜 클릭
  const onClickDay = (_day) => {
    // console.log(
    //   moment(_day).format("YYYY-MM-DD") + "T" + moment(_day).format("hh:mm")
    // );
    changeDay(
      moment(_day).format("YYYY-MM-DD") + "T" + moment(_day).format("hh:mm")
    );
  };

  return (
    <div className="pb-4 px-8">
      <Calendar
        locale="en-GB"
        // 일요일부터 출력
        calendarType="US"
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("D")}
        formatShortMonth={calendarMonthFormat}
        // 달력에 출력될 html 작성
        tileContent={showTile}
        onClickDay={onClickDay}
      />
    </div>
  );
};

export default MyCalendar;
