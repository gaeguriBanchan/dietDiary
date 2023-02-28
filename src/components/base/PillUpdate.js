/** @format */

import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import style from '../../pages/Pill.module.css';
import BarButton from './BarButton';

// const handleChecked=()

const PillUpdate = () => {
  const [Edit, setEdit] = useState({ name: '추가', EditBt: false });
  const PillEdit = (e) => {
    setEdit(() => {
      if (Edit.EditBt) {
        return { name: '추가', EditBt: false };
      } else {
        return { name: '등록', EditBt: true };
      }
    });
  };
  // 약 이름
  const [name, setName] = useState('');
  const piName = (e) => {
    setName(e.target.value);
  };
  //약 먹는 횟수
  const [count, setCount] = useState(1);
  const piAmount = (e) => {
    setCount(e.target.value);
  };

  //리스트 출력
  const [Plist, setPlist] = useState([]);
  const pillSeq = Plist.pillSeq;
  useEffect(() => {
    axios
      .get('http://192.168.0.16:9876/api/pill/info?token=token1')
      .then((res) => {
        setPlist(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const btnClick = (e) => {
    e.preventDefault();
    if (name === '') {
      alert('이름을 입력해주세요');
    }
    if (count === '') {
      alert('횟수를 입력해주세요');
    }
    const params = {
      piName: name,
      piAmount: count,
    };
    axios
      .put('http://192.168.0.16:9876/api/pill/add?token=token1', params)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        setEdit(() => {
          if (Edit.EditBt) {
            return { name: '추가', EditBt: false };
          } else {
            return { name: '등록', EditBt: true };
          }
        });
      })
      .catch((err) => {
        console.log('실패^^', err);
      });
  };
  console.log(Plist);

  // 약 삭제
  const [listDel, setListDel] = useState();
  const deletePill = (e) => {
    setListDel(e.target.pillSeq);
    console.log(e.target.pillSeq);
  };
  const deleteBtn = (e) => {
    e.preventDefault();
    let param = {
      piSeq: pillSeq,
    };
    axios
      .delete(
        'http://192.168.0.16:9876/api/pill/delete?token=token1&piSeq=1',
        param
      )
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        // setPlist(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, [Edit]);
  // axios
  //   .put("http://192.168.0.16:9876/api/pill/add?token=1")
  //   .then(() => {})
  //   .catch((err) => {
  //     console.log("실패^^");
  //   });
  return (
    <div>
      {Edit.name === '추가' ? (
        <>
          <div className="">
            <div className="pill-left">
              <div className="pill-0">
                <label htmlFor="pill">
                  <span className={style.labelradio}>종합 영양제</span>
                  <input type={'checkbox'} />
                  <input type={'checkbox'} />
                  <input type={'checkbox'} />
                </label>
              </div>
              <div className="pill-1">
                <span className={style.labelradio}>비타민</span>
                <input type={'checkbox'} />
                <input type={'checkbox'} />
              </div>
            </div>
            <div className="pill-right justify-between">
              <div className="pill-2">
                <span className={style.labelradio}>단백질</span>
                <input type={'checkbox'} />
                <span className={style.labelradio}>
                  {Plist.map((item, pillSeq) => {
                    return (
                      <div className="flex">
                        <p key={pillSeq} className="ml-[8.5px]">
                          {item.pillName}
                          {item.pillAmount}
                        </p>
                        <input type={'checkbox'} />
                        <button
                          className="delBtn text-red-700"
                          onClick={(e) => {
                            deleteBtn(e);
                          }}
                        >
                          X
                        </button>
                      </div>
                    );
                  })}
                </span>
              </div>
            </div>
          </div>
          <div onClick={(e) => PillEdit(e)}>
            <BarButton name={Edit.name} color={'main'} />
          </div>
        </>
      ) : (
        <>
          <div className="w-full py-4">
            <form action="submit">
              <input
                type="text"
                className="w-full h-14 font-nomal focus:outline-none border border-main rounded-2xl pl-3"
                placeholder="약의 종류를 입력해주세요"
              />
              <input
                type="number"
                className="w-full h-14 font-nomal focus:outline-none border border-main rounded-2xl pl-3 mt-3"
                placeholder="복용 횟수를 입력해주세요"
              />
            </form>
          </div>
          <div className="mb-2" onClick={PillEdit}>
            <BarButton name={'취소'} className="cancel" color={'textRed'} />
          </div>
          <div onClick={(e) => PillEdit(e)}>
            <BarButton name={Edit.name} color={'main'} />
          </div>
        </>
      )}
    </div>
  );
};

export default PillUpdate;
