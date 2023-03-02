/** @format */

import React, { useEffect, useRef, useState } from 'react';
import BarButton from '../base/BarButton';
import Memo from '../base/Memo';
import RountButton from '../base/RoundButon';
import axios from 'axios';
import useInput from './useinput';

const DirectFood = ({ addDirectFood }) => {
  // 이미지 업로드 및 미리보기
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef(null);

  const [foodName, userFoodName] = useInput('');
  const [foodKcal, userFoodKcal] = useInput('');
  const [foodContent, userFoodContent] = useInput('');

  let initVal = {
    menu: '떡볶이',
    kcal: 480,
    content: 'string',
  };
  const [fooddata, SetFoodData] = useState(initVal);

  const onChangeImg = async (e) => {
    e.preventDefault();
    // 미리보기 기능
    if (e.target.files) {
      // files 는 배열에 담긴다
      // files는 1개 이므로 e.target.files[0]
      const uploadFile = e.target.files[0];
      console.log(uploadFile);
      // 이미지를 읽어들이는 바닐라 메서드(함수)
      const reader = new FileReader();
      reader.readAsDataURL(uploadFile);
      reader.onloadend = () => {
        // 임시 이미지 주소가 만들어진다.
        // useState
        setImgFile(reader.result);
      };

      // 서버로 이미지를 임시로 보내고 url 글자를 받아오는 코드 / 일반적인 방법
      // 파일을 강제로 업로드 한다.
      const formData = new FormData();
      formData.append('files', uploadFile);
      await axios({
        method: 'post',
        url: '/api/files/images',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }
  };

  const imgUplod = () => {
    imgRef.current.click();
  };

  console.log(imgFile);

  useEffect(() => {
    axios
      .put('http://192.168.0.16:9876/api/diet/add')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(foodName);

  return (
    <div>
      <div className="w-full border border-main rounded-2xl p-12 mb-8 bg-white">
        <form>
          <div>
            <label className="p-3 flex border-b border-textAsh mb-6">
              <input
                className="w-full bg-none focus:outline-none font-normal "
                placeholder="음식이름"
                value={foodName}
                onChange={(e) => userFoodName(e)}
              />
            </label>
          </div>
          <div className="w-full flex justify-center items-center align-middle text-lg">
            <div className="flex w-1/2 px-3">
              <span className="w-1/2 text-textBlack">칼로리</span>
              <label className="flex">
                <input
                  value={foodKcal}
                  onChange={(e) => userFoodKcal(e)}
                  type="text"
                  className="border-b border-textAsh px-2 focus:outline-none"
                />
                <span className="text-textBlack">Kcal</span>
              </label>
            </div>
            <div className="flex w-1/2">
              <RountButton name={'취소'} text={'main'} color={'white'} />
              <RountButton name={'저장'} text={'white'} color={'main'} />
            </div>
          </div>
        </form>
      </div>
      <>
        <div className="flex flex-col justify-center items-center">
          <div>
            <div>
              <img
                src={imgFile}
                alt={imgFile}
                className="w-[500px] h-[400px] bg-main rounded-2xl mb-8"
              />
              <input
                type="file"
                accept="image/*"
                onInput={onChangeImg}
                ref={imgRef}
                style={{ display: 'none' }}
              ></input>
            </div>
            <div onClick={imgUplod} className="mb-8">
              <BarButton name={'사진올리기'} color={'main'} />
            </div>
          </div>
        </div>
        <Memo />

        <BarButton name={'등록'} color={'main'} handleSubmit={addDirectFood} />
      </>
    </div>
  );
};

export default DirectFood;
