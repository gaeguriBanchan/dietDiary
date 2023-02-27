import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import style from "../../pages/Pill.module.css";
import BarButton from "./BarButton";

const PillUpdate = () => {
  const [Edit, setEdit] = useState({ name: "추가", EditBt: false });
  const PillEdit = (e) => {
    setEdit(() => {
      if (Edit.EditBt) {
        return { name: "추가", EditBt: false };
      } else {
        return { name: "등록", EditBt: true };
      }
    });
  };
  // 약 이름
  const [name, setName] = useState("");
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

  useEffect(() => {
    axios
      .get("http://192.168.0.16:9876/api/pill/info?token=token1")
      .then((res) => {
        setPlist(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const btnClick = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("이름을 입력해주세요");
    }
    if (count === "") {
      alert("횟수를 입력해주세요");
    }
    const params = {
      piName: name,
      piAmount: count,
    };
    axios
      .put("http://192.168.0.16:9876/api/pill/add?token=token1", params)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        setEdit(() => {
          if (Edit.EditBt) {
            return { name: "추가", EditBt: false };
          } else {
            return { name: "등록", EditBt: true };
          }
        });
      })
      .catch((err) => {
        console.log("실패^^", err);
      });
  };

  console.log(Plist);

  useEffect(() => {}, [Edit]);

  return (
    <div>
      {Edit.name === "추가" ? (
        <>
          <div className="">
            <div className="pill-left">
              <div className="pill-0">
                <label htmlFor="pill">
                  <span className={style.labelradio}>종합 영양제</span>
                  <input type={"checkbox"} className={style.inputradio} />
                  <input type={"checkbox"} className={style.inputradio} />
                  <input type={"checkbox"} className={style.inputradio} />
                </label>
              </div>
              <div className="pill-1">
                <span className={style.labelradio}>비타민</span>
              </div>
            </div>
            <div className="pill-right justify-between">
              <div className="pill-2">
                <span className={style.labelradio}>단백질</span>
                <span className={style.labelradio}>
                  {Plist.map((item, pillSeq) => {
                    return (
                      <p key={pillSeq} className="ml-[8.5px]">
                        {item.pillName}
                      </p>
                    );
                  })}
                </span>
              </div>
            </div>
          </div>
          <div onClick={(e) => PillEdit(e)}>
            <BarButton name={Edit.name} color={"main"} />
          </div>
        </>
      ) : (
        <>
          <div className="w-full py-4">
            <form>
              <input
                type="text"
                value={name}
                className="w-full h-14 font-nomal focus:outline-none border border-main rounded-2xl pl-3"
                placeholder="약의 종류를 입력해주세요"
                onChange={piName}
              />
              <input
                type="number"
                value={count}
                className="w-full h-14 font-nomal focus:outline-none border border-main rounded-2xl pl-3 mt-3"
                placeholder="복용 횟수를 입력해주세요"
                onChange={piAmount}
              />
            </form>
          </div>
          <div className="mb-2" onClick={PillEdit}>
            <BarButton name={"취소"} className="cancel" color={"textRed"} />
          </div>
          <div onClick={(e) => btnClick(e)}>
            <BarButton name={Edit.name} color={"main"} />
          </div>
        </>
      )}
    </div>
  );
};

export default PillUpdate;
