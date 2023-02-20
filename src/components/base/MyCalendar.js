/** @format */

import React from 'react';
import Calendar from 'react-calendar';

// 날짜 관련 라이브러리
import moment from 'moment/moment';
// 한글로 출력하게 해줌.
import 'moment/locale/ko';
import { useState } from 'react';

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="pb-4 px-8">
      <Calendar
        // 일요일부터 출력
        calendarType="US"
        
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
      />
    </div>
  );
};

export default MyCalendar;
