/** @format */

import React from 'react';
import bar from '../../assets/images/icon/bar_.png';
import style from '../addfood/foodlist.module.css';
const FoodListItem = ({ item }) => {
  return (
    <div>
      <label htmlFor="foodlist" className="flex items-center w-full py-1">
        <input
          className={style.inputradio}
          id="foodlist"
          type="radio"
          name="foodlist"
          value={item.dceContent}
        />
        <span className={style.labelradio} />
        <img src={bar} alt="bar" className="mx-5" />
        <div>
          <p className="text-lg text-textBlack ">{item.dceContent}</p>
          <p className="text-xs text-second font-normal font-MuseoModerno">
            {item.dceKcal + 'Kcal'}
          </p>
        </div>
      </label>
    </div>
  );
};

export default FoodListItem;
