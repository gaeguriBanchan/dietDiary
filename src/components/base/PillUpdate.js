import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../../pages/Pill.module.css";
import BarButton from "./BarButton";
import { useSelector } from "react-redux";

const PillUpdate = () => {
  const user = useSelector((state) => state.user);
  const miToken = user.miToken;
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

  const getPillData = async () => {
    let param = {
      token: miToken,
    };
    await axios
      .get(`http://192.168.0.16:9876/api/pill/info?token=${miToken}`, param)
      .then((res) => {
        console.log(res.data);
        if (res.data.list) {
          setPlist(res.data.list);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPillData();
  }, []);

  //
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
      .put(`http://192.168.0.16:9876/api/pill/add?token=${miToken}`, params)
      .then((res) => {
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

  // 약 삭제
  const [selPill, setSelPill] = useState("");

  const deletePill = (_item) => {
    let param = {
      token: miToken,
      piSeq: _item.pillSeq,
    };
    axios
      .delete(
        `http://192.168.0.16:9876/api/pill/delete?token=${miToken}&piSeq=${_item.pillSeq}`,
        param
      )
      .then((res) => {
        console.log(res);
        getPillData();
        alert(res.data.message);
        // setSelPill();
      })
      .catch((err) => {
        console.log("실패^^", err);
      });
  };

  useEffect(() => {}, [Edit]);

  return (
    <div>
      {Edit.name === "추가" ? (
        <>
          <div className="grid mb-6">
            <div className="pill-left">
              <div className="pill">
                <label htmlFor="pill" className={styles.labelradio}>
                  <span>종합 영양제</span>
                  <input type={"checkbox"} className={styles.inputradio} />
                  <input type={"checkbox"} className={styles.inputradio} />
                  <input type={"checkbox"} className={styles.inputradio} />
                </label>
              </div>
              <div className="pill">
                <label htmlFor="pill" className={styles.labelradio}>
                  <span>비타민</span>
                  <input type={"checkbox"} className={styles.inputradio} />
                  <input type={"checkbox"} className={styles.inputradio} />
                </label>
              </div>
            </div>
            <div className="pill-right">
              <div className="pill-2">
                <label htmlFor="pill" className={styles.labelradio}>
                  <span>단백질</span>
                  <input type={"checkbox"} />
                  <span>
                    {Plist.map((item, pillSeq) => {
                      return (
                        <div className="flex" key={pillSeq}>
                          <label htmlFor="">
                            <p key={pillSeq} className={styles.labelradio}>
                              {item.pillName}
                              {item.pillAmount}
                              {item.pillSeq}
                            </p>
                            <input
                              type={"checkbox"}
                              className={styles.inputradio}
                            />
                          </label>
                          <button
                            className="delBtn font-bold ml-3 text-sm text-[#D76A6A]"
                            onClick={() => deletePill(item)}
                          >
                            X
                          </button>
                        </div>
                      );
                    })}
                  </span>
                </label>
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
            <BarButton
              name={"취소"}
              className="cancel bg-#D76A6A"
              color={"textRed"}
            />
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
