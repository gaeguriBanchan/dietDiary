/** @format */
import icon_c_true from '../../assets/images/icon/icon_c_true.png';
import icon_c_false from '../../assets/images/icon/icon_c_false.png';
import React from 'react';
import Calendar from 'react-calendar';

// 날짜 관련 라이브러리
import moment from 'moment/moment';
// 한글로 출력하게 해줌.
import 'moment/locale/ko';
import { useState } from 'react';

const MyCalendar = ({ goalList, changeDay }) => {
  console.log(goalList);
  const [value, onChange] = useState(new Date());
  const calendarMonthFormat = {
    monthShort: 'MMM',
  };
  const showTile = ({ date, view }) => {
    let html = [];
    let obj = goalList.find((item, index) => {
      if (
        item.date === moment(date).format('YYYY-MM-DD') &&
        item.totalCal > 0
      ) {
        return item;
      }
    });

    if (obj !== undefined) {
      html.push(
        <div key={obj.date}>
          <img
            key={`todoData_${moment(date)}}`}
            src={obj.goal ? icon_c_false : icon_c_true}
            alt="아이콘"
            style={{ width: 20, height: 20 }}
          />
        </div>
      );

      return <div>{html}</div>;
    }

    return null;
  };

  const onDay = (e) => {
    // console.log("gogo", e);
    changeDay(e);
  };
  return (
    <div className="pb-4 px-8">
      <Calendar
        onClickDay={onDay}
        locale="en-GB"
        // 일요일부터 출력
        calendarType="US"
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format('D')}
        formatShortMonth={calendarMonthFormat}
        tileContent={showTile}
      />
    </div>
  );
};

export default MyCalendar;
