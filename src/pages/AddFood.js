/** @format */
import { Helmet } from 'react-helmet';
import Background from '../components/base/Background';
import Title from '../components/base/Title';
import food from '../assets/images/icon/icon_b_food.png';
import search from '../assets/images/icon/search.png';
import { Sidebar } from '../components/common/Sidebar';
import FoodList from '../components/addfood/FoodList';
import BarButton from '../components/base/BarButton';
import { useEffect, useState } from 'react';
import DirectFood from '../components/addfood/DirectFood';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
const Addfood = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const miToken = user.miToken;

  const [foodContent, setFoodContent] = useState([]);
  const [radioVal, setRadioVal] = useState('');
  const [dceKcal, setDceKcal] = useState(0);
  const [dceStandard, setDceStandard] = useState(0);
  const [dceImage, setDceImage] = useState('');
  const [dceSeq, setDceSeq] = useState('');
  const selectRadio = (_item) => {
    setRadioVal(_item.dceContent);
    setDceKcal(_item.dceKcal);
    setDceStandard(_item.dceStandard);
    setDceImage(_item.dceImage);
    setDceSeq(_item.dceSeq);

    console.log(radioVal);
  };
  console.log('dd', dceImage);

  const [selectBtn, setSelectBtn] = useState('전체');

  // 버튼 클릭 이벤트 핸들러
  const handleClick = (e) => {
    setSelectBtn(e.target.id);
  };
  // 검색
  const [searchVal, setSearchVal] = useState('');
  const searchKet = (e) => {
    setSearchVal(e.target.value);
  };
  useEffect(() => {}, [selectBtn]);

  const [btnActive, setBtnActive] = useState();
  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };
  const level = ['아침', '점심', '저녁', '오전간식', '오후간식', '저녁간식'];
  const levelBt = level.map((item, index) => {
    return (
      <button
        value={index}
        onClick={toggleActive}
        type="button"
        className={
          index.toString() === btnActive
            ? 'h-12 w-11/12 border text-center  border-main rounded-full bg-main text-white mb-4  '
            : 'h-12 w-11/12 border text-center  border-main text-main rounded-full mb-4 '
        }
      >
        {item}
      </button>
    );
  });
  
  // 검색기능
  useEffect(() => {
    let param = { keyword: searchVal };
    axios
      .get(
        `http://192.168.0.16:9876/api/calex/search/cal?keyword=${searchVal}`,
        param
      )
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 식단예시클릭 등록
  const handleSubmit = () => {
    let params = {
      dceSeq: dceSeq,
      token: miToken,
    };
    axios
      .get(
        `http://192.168.0.16:9876/api/diet/add/bycal?dceSeq=${dceSeq}&token=${miToken}`,
        params
      )
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        navigate('/dailymenu');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // {dceSeq: 1, dceContent: '수제비', dceImage: 'sujaebi.jpg', dceKcal: 200, dceStandard: '1인분 '}

  return (
    <>
      <Helmet>
        <title>밥</title>
      </Helmet>
      <div className=" container w-full h-full m-auto flex">
        <Sidebar></Sidebar>

        <div className="w-full h-full ml-8 drop-shadow-md ">
          <Background>
            <div className="title">
              <div className="flex">
                <img
                  src={food}
                  alt="food"
                  className="w-[20px] h-[20px] self-center mr-3"
                />
                <Title name={'밥'} />
              </div>

              <div className=" my-8">
                <div className="grid grid-cols-3 px-8">{levelBt}</div>
              </div>
            </div>
          </Background>
          <Background>
            <label className="px-5 flex border border-main rounded-full mb-6">
              <input
                className="w-full bg-none focus:outline-none font-normal"
                onChange={searchKet}
                value={searchVal}
              />
              <img src={search} alt="search" />
            </label>
            <div className="flex mb-6">
              <button
                id="전체"
                className={
                  selectBtn === '전체'
                    ? 'h-12 w-full border border-main text-white bg-main rounded-full mr-6'
                    : 'h-12 w-full border border-main text-main rounded-full mr-6'
                }
                value={selectBtn}
                onClick={handleClick}
              >
                전체
              </button>
              <button
                id="직접입력"
                className={
                  selectBtn === '직접입력'
                    ? 'h-12 w-full border border-main text-white bg-main rounded-full mr-6'
                    : 'h-12 w-full border border-main text-main rounded-full mr-6'
                }
                value={selectBtn}
                onClick={handleClick}
              >
                직접입력
              </button>
            </div>
            {selectBtn === '전체' ? (
              <FoodList
                foodContent={foodContent}
                setFoodContent={setFoodContent}
                dceKcal={dceKcal}
                dceStandard={dceStandard}
                dceImage={dceImage}
                selectRadio={selectRadio}
                radioVal={radioVal}
              />
            ) : (
              <DirectFood />
            )}

            <BarButton
              name={'등록'}
              color={'main'}
              handleSubmit={handleSubmit}
            />
          </Background>
        </div>
      </div>
    </>
  );
};

export default Addfood;
