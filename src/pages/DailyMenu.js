/** @format */

import Title from '../components/base/Title';
import { Sidebar } from '../components/common/Sidebar';
import food from '../assets/images/icon/icon_b_food.png';
import calender from '../assets/images/icon/icon_calendar.png';
import diet from '../assets/images/icon/icon_diet.png';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import FoodCard from '../components/dailymenu/FoodCard';
import { useEffect } from 'react';
import MyCalendar from '../components/base/MyCalendar';

import Modal from '../components/dailymenu/Modal';
import Background from '../components/base/Background';
import Linechart from '../components/base/Linechart';
import Piechart2 from '../components/base/Piechart2';
import Barchart from '../components/base/Barchart';
import DailyDiet from '../components/dailymenu/DailyDiet';
import FoodModal from '../components/dailymenu/FoodModal';
import axios from 'axios';

const DailyMenu = () => {
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    axios
      .get(
        'http://192.168.0.16:9876/api/diet/list?token=1&date=2023-02-10T00%3A00%3A00'
      )
      .then((res) => {
        console.log(res.data.list);
        setFoodList(res.data.list);
      })

      .catch();
  }, []);
  // console.log(foodList);

  // date: Wed Dec 11 2019 09:00:00 GMT+0900 (Korean Standard Time)

  const [chBt, setchBt] = useState({
    src: calender,
    alt: 'calender',
    chBt: true,
  });

  const changeBtn = (e) => {
    e.preventDefault();
    setchBt(() => {
      if (chBt.chBt) {
        return {
          src: diet,
          alt: 'diet',
          chBt: false,
        };
      } else {
        return {
          src: calender,
          alt: 'calender',
          chBt: true,
        };
      }
    });
    console.log(chBt);
  };
  useEffect(() => {}, [chBt]);

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>밥</title>
      </Helmet>

      <div className=" container w-full h-full m-auto flex">
        <Sidebar></Sidebar>

        <div className="w-full h-full ml-8 drop-shadow-md ">
          <div className=" bg-white mb-8 p-8 border rounded-2xl ">
            <div className="flex justify-between mb-8">
              <div className="flex">
                <img
                  src={food}
                  alt="food"
                  className="w-[20px] h-[20px] self-center mr-3"
                />
                <Title name={'밥'} />
              </div>
              <button onClick={changeBtn}>
                <img src={chBt.src} alt={chBt.alt} />
              </button>
            </div>

            {chBt.src === calender ? (
              <div>
                <div className=" grid grid-cols-4 ">
                  <div className="bg-[#BDD1D4] bg-center bg-addfood bg-no-repeat  h-[290px] rounded-2xl mx-[10px]" />

                  {foodList.map((item, index) => {
                    return (
                      <div onClick={openModal}>
                        <FoodCard item={item} key={index} />
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                <MyCalendar />
              </div>
            )}
          </div>

          <div className="mb-[20px] pb-[10px] rounded-2xl border bg-white drop-shadow-md">
            <div className="flex justify-between p-8">
              <div className="flex">
                <Title name={'오늘 추천 식단'} />
              </div>
            </div>
            <div className="mx-4">
              <div className=" grid grid-cols-3 ">
                <DailyDiet />
                <DailyDiet />
                <DailyDiet />
              </div>
            </div>
          </div>

          <Background>
            <Title name={'주간 섭취 칼로리'} />
            <Linechart />
          </Background>

          <div className="flex justify-between">
            <div className="bg-white mb-8 border rounded-2xl h-1/4">
              <div className="m-8">
                <Title neme={'섭취 칼로리'} />
              </div>
              <p
                className="absolute font-MuseoModerno text-5xl font-medium w-[300px] translate-x-32 translate-y-24"
                style={{
                  color: '#46A7AE',
                }}
              >
                25
                <span className="font-NanumSquareNeo font-medium text-m">
                  %
                </span>
              </p>
              <span
                className="absolute font-MuseoModerno text-m font-medium translate-x-[103px] translate-y-40"
                style={{ color: '#6D9399' }}
              >
                8
                <span className="font-NanumSquareNeo text-m font-medium">
                  컵&#32;<span className="font-MuseoModerno">(1600ml)</span>
                </span>
              </span>
              <Piechart2 />
              <p className="font-NanumSquareNeo text-center pb-5">
                목표 음수량{' '}
                <span className="ml-12 text-2xl font-NanumSquareNeo">
                  1600ml
                </span>
              </p>
            </div>
            <div className="goalGraph bg-white mb-8 border rounded-2xl ">
              <p className="text-xl text-main font-NanumSquareNeo font-bold p-8">
                목표 달성 그래프
              </p>

              <h4
                className="flex text-[65px] font-medium font-MuseoModerno justify-around"
                style={{ color: '#46A7AE' }}
              >
                <p className=" text-main font-NanumSquareNeo text-xl pt-14 pr-5">
                  <span className="font-bold text-[18px] mr-3">달성일</span>{' '}
                  <span className="font-MuseoModerno text-lg font-medium">
                    282 <span style={{ color: '#D9D9D9' }}>/</span> 364
                  </span>
                </p>
                <span className="font-normal font-MuseoModerno">
                  82 <span className="text-5xl font-bold pt-7">%</span>
                </span>
              </h4>
              <Barchart />
            </div>
          </div>

          <div className="mb-[20px] rounded-2xl border bg-white drop-shadow-md">
            <div className="m-8">
              <Title name={'주간 식단'} />
              <p>여기에 주간 식단</p>
            </div>
          </div>

          <div className="w-full absolute top-0 left-0 z-999999">
            <Modal open={modalOpen} close={closeModal}>
              <FoodModal close={closeModal} foodList={foodList} />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
export default DailyMenu;
