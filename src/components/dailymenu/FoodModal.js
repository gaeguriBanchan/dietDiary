/** @format */

import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import Background from '../base/Background';
import BarButton from '../base/BarButton';
import BarButtonRed from '../base/BarButtonRed';
import dummyData from './dummyData.json';
import { useSelector } from 'react-redux';
import Memo from '../base/Memo';
import useInput from '../addfood/useinput';

const FoodModal = ({ close, foodList, item, getFoodList }) => {
  const [Edit, setEdit] = useState({ name: '수정', EditBt: false });
  const [memoContent, userMemoContent] = useInput('');

  const user = useSelector((state) => state.user);
  const miToken = user.miToken;

  const dietEdit = (e) => {
    setEdit(() => {
      if (Edit.EditBt) {
        return { name: '수정', EditBt: false };
      } else {
        return { name: '등록', EditBt: true };
      }
    });
  };

  //시간표기
  const data = item.dfRegDt;
  let a = data.slice(11, 16);
  function convert12H(time, options) {
    var _ampmLabel = (options && options.ampmLabel) || ['오전', '오후'];
    var _timeRegExFormat = /^([0-9]{2}):([0-9]{2})$/;
    var _timeToken = time.match(_timeRegExFormat);
    if (typeof _timeRegExFormat === 'undefine') {
      // 잘못된 형식
      return null;
    }
    var _intHours = parseInt(_timeToken[1]);
    var _intMinutes = parseInt(_timeToken[2]);
    var _strHours12H = ('0' + (_intHours == 12 ? 12 : _intHours % 12)).slice(
      -2
    );
    return (
      _ampmLabel[parseInt(_intHours / 12)] +
      ' ' +
      _strHours12H +
      ':' +
      _intMinutes
    );
  }
  const time = convert12H(a, {
    ampmLabel: ['am', 'pm'],
  });

  // 식단 삭제

  console.log(getFoodList);
  const delFood = () => {
    let params = {
      token: miToken,
      dfSeq: item.dfSeq,
    };
    axios
      .get(
        `http://192.168.0.16:9876/api/diet/delete?token=${miToken}&dfSeq=${item.dfSeq}`,
        params
      )
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        close();
        getFoodList();
      })
      .catch((err) => {
        console.log(err);
        alert('삭제에 실패했습니다.');
      });
  };

  useEffect(() => {
    console.log(foodList);
  }, [foodList]);

  //dfSeq
  // data
  // object
  // {
  //   "menu": "떡볶이",
  //   "kcal": 480,
  //   "content": "string"
  // }
  // http://192.168.0.16:9876/api/diet/update?dfSeq=1

  // 식단수정

  const upDataDite = () => {
    let seq = item.dfSep;
    let param = {
      data: {},
      file: '',
      token: miToken,
      date: '',
    };
    axios
      .put(`http://192.168.0.16:9876/api/diet/update?dfSeq=${seq}`, param)
      .then()
      .catch();
  };

  // 이미지 업로드 및 미리보기
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef(null);

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
      // const formData = new FormData();
      // formData.append('files', uploadFile);
      // await axios({
      //   method: 'post',
      //   url: '/api/files/images',
      //   data: formData,
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
    }
  };

  const imgUplod = () => {
    imgRef.current.click();
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Background>
        <div className="w-full ite flex justify-between">
          <p>
            <span className="w-full text-3xl text-main">밥</span>
            <span className="font-MuseoModerno font-normal text-3xl text-second ml-8">
              {time}
            </span>
          </p>

          <button className="bg-close bg-no-repeat w-8 h-8 " onClick={close} />
        </div>
        {Edit.name === '수정' ? (
          <>
            <div className="flex flex-col justify-center items-center p-8">
              <div className="w-[525px] h-[525px] bg-textGray rounded-2xl overflow-hidden">
                <img
                  src={`http://192.168.0.16:9876/api/diet/images/${item.dfImg}`}
                  alt={item.dfImg}
                  className="w-full h-full"
                />
              </div>
              <span className="my-8 text-4xl text-textBlack">
                {item.dfMenu}
              </span>
              <span className="mb-8 text-5xl font-MuseoModerno font-normal text-textGray ">
                {item.dfKcal}kcal
              </span>
            </div>
            <div className="bg-[#F6F6F6] rounded-2xl mb-8">
              <div className="p-8">
                <p className="text-textGray font-MuseoModerno font-normal text-[24px]">
                  memo
                </p>
                <p
                  className="font-normal w-full bg-[#F6F6F6] focus:outline-none p-3 text-[24px] resize-none h-[250px]"
                  maxLength="150"
                >
                  메모메모
                </p>
              </div>
            </div>
            <div onClick={dietEdit}>
              <BarButton name={Edit.name} color={'main'} />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center p-8">
              <div className="w-[525px] h-[525px] bg-textGray rounded-2xl overflow-hidden ">
                <img
                  src={`http://192.168.0.16:9876/api/diet/images/${item.dfImg}`}
                  alt={item.dfImg}
                  className="w-full h-full"
                />
              </div>
              <div className="photo w-[525px] mt-8 ">
                <input
                  name={imgFile}
                  type="file"
                  accept="image/*"
                  onInput={onChangeImg}
                  ref={imgRef}
                  style={{ display: 'none' }}
                ></input>
                <div onClick={imgUplod} className="mb-8 w-full">
                  <BarButton name={'사진올리기'} color={'main'} />
                </div>
              </div>

              <label>
                <input
                  type="text"
                  placeholder={item.dfMenu}
                  className="my-8 text-4xl text-textBlack text-center"
                />
              </label>

              <label className="mb-8 text-5xl font-MuseoModerno font-normal text-center">
                <input type="text" placeholder={item.dfKcal} />
                <span className="text-textBlack">Kcal</span>
              </label>
            </div>
            <Memo memoContent={memoContent} userMemoContent={userMemoContent} />
            <div className="mb-2" onClick={delFood}>
              <BarButtonRed name={'삭제'} color={'textRed'} />
            </div>
            <div onClick={close}>
              <BarButton name={Edit.name} color={'main'} />
            </div>
          </>
        )}
      </Background>
    </div>
  );
};

export default FoodModal;
