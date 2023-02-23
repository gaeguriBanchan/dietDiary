/** @format */

import React from 'react';
import bar from '../../assets/images/icon/bar_.png';
import style from '../addfood/foodlist.module.css';
const FoodListItem = ({ item, selectRadio }) => {
  return (
    <div>
      <label
        htmlFor={item.dceContent}
        className="flex items-center w-full py-3"
      >
        <input
          className={style.inputradio}
          id={item.dceContent}
          type="radio"
          name="foodlist"
          value={item.dceContent}
          onClick={() => selectRadio(item)}
        />
        <span className={style.labelradio} />
        <img src={bar} alt="bar" className="mx-5" />
        <div>
          <p className="text-lg leading-5 text-textBlack ">{item.dceContent}</p>
          <p className="text-xs leading-3 text-second font-normal font-MuseoModerno">
            {item.dceKcal}Kcal
            <span className="font-NanumSquareNeo">
              {`(${item.dceStandard})`}
            </span>
          </p>
        </div>
      </label>
    </div>
  );
};

export default FoodListItem;
