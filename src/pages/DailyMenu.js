import Title from "../components/base/Title";
import { Sidebar } from "../components/common/Sidebar";
import food from "../assets/images/icon/icon_b_food.png";
import calender from "../assets/images/icon/icon_calendar.png";
import diet from "../assets/images/icon/icon_diet.png";
import { useState } from "react";
import { Helmet } from "react-helmet";
import FoodCard from "../components/dailymenu/FoodCard";
import { useEffect } from "react";
import MyCalendar from "../components/base/MyCalendar";
import dumyData from "../components/dailymenu/dumyData.json";

const DailyMenu = () => {
  const [chBt, setchBt] = useState({
    src: calender,
    alt: "calender",
    chBt: true,
  });

  const changeBtn = (e) => {
    e.preventDefault();
    setchBt(() => {
      if (chBt.chBt) {
        return {
          src: diet,
          alt: "diet",
          chBt: false,
        };
      } else {
        return {
          src: calender,
          alt: "calender",
          chBt: true,
        };
      }
    });
    console.log(chBt);
  };

  useEffect(() => {}, [chBt]);
  return (
    <>
      <Helmet>
        <title>밥</title>
      </Helmet>
      <div className="container w-full h-full m-auto flex">
        <Sidebar></Sidebar>

        <div className="w-full ml-8">
          <div className=" mb-[20px] pb-[10px] rounded-2xl border bg-white drop-shadow-md">
            <div className="flex justify-between p-8">
              <div className="flex">
                <img
                  src={food}
                  alt="food"
                  className="w-[20px] h-[20px] self-center mr-3"
                />
                <Title name={"밥"} />
              </div>
              <button onClick={changeBtn}>
                <img src={chBt.src} alt={chBt.alt} />
              </button>
            </div>

            {chBt.src === calender ? (
              <div className="mx-4">
                <div className=" grid grid-cols-4 ">
                  <div className="bg-[#BDD1D4] bg-center bg-addfood bg-no-repeat  h-[290px] rounded-2xl mx-[10px]" />
                  {dumyData.diet.map((item, index) => {
                    return <FoodCard item={item} key={index} />;
                  })}
                </div>
              </div>
            ) : (
              <MyCalendar />
            )}
          </div>
          <div className="mb-[20px] pb-[10px] rounded-2xl border bg-white drop-shadow-md">
            <div className="flex justify-between p-8">
              <div className="flex">
                <img
                  src={food}
                  alt="food"
                  className="w-[20px] h-[20px] self-center mr-3"
                />
                <Title name={"오늘 추천 식단"} />
              </div>
            </div>
            <div className="mx-4">
              <div className=" grid grid-cols-3 ">
                <div className=" bg-white drop-shadow-md py-4 px-5 rounded-2xl mx-[10px] mb-[20px] ">
                  <div className="bg-main w-full h-40"></div>
                  <p className="mt-5 mb-4 text-xl text-main text-center">
                    아침
                  </p>
                  <p className="flex justify-between">
                    <span>삶은 계란</span>
                    <span>156Kcal</span>
                  </p>
                  <p className="flex justify-between">
                    <span>삶은 계란</span>
                    <span>156Kcal</span>
                  </p>
                  <p className="flex justify-between">
                    <span>삶은 계란</span>
                    <span>156Kcal</span>
                  </p>
                </div>
              </div>
            </div>
            <button>
              <img src={calender} alt="food" />
            </button>
          </div>
          <div className="bg-addfood bg-no-repeat bg-contain w-[190px] h-[290px]" />
        </div>
      </div>
    </>
  );
};
export default DailyMenu;
