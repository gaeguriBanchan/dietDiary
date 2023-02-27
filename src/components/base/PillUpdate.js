// import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import style from "../../pages/Pill.module.css";
import BarButton from "./BarButton";
import { useForm } from "react-hook-form";
// const handleChecked=()

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
  useEffect(() => {}, [Edit]);
  // axios
  //   .put("http://192.168.0.16:9876/api/pill/add?token=1")
  //   .then(() => {})
  //   .catch((err) => {
  //     console.log("실패^^");
  //   });
  // 로컬에 저장된 내용을 가지고 온다.
  const { reset, register, handleSubmit } = useForm();
  const getLocalPost = () => {
    const data = localStorage.getItem("post");
    if (data === null) {
      return [];
    } else {
      return JSON.parse(data);
    }
  };
  const [posts, setPosts] = useState(getLocalPost());
  const [Allowed, setAllowed] = useState(true);
  const createPost = (data) => {
    console.log("submit 으로 넘겨진 데이터");
    console.log(data);
    // data ======>  { title: title, content: conten}
    setPosts([...posts, data]);
    // ...register("title")
    // ...register("conente")
    reset();

    setAllowed((prev) => true);
    setPosts((prev) => {
      const arr = [...prev];
      const updateArr = arr.map((item, index) => {
        item.enableUpdate = false;
        return item;
      });
      return updateArr;
    });
  };

  // 삭제기능
  const deletePost = (idx) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    setPosts(posts.filter((item, index) => idx !== index));
  };
  // 업데이트 기능
  const enableUpdate = (idx) => {
    if (!Allowed) return;
    setAllowed(false);
    setPosts(
      posts.map((item, index) => {
        if (idx === index) {
          item.enableUpdate = true;
        }
        return item;
      })
    );
  };
  // 업데이트 취소
  const disableUpdate = (idx) => {
    setAllowed(true);
    setPosts(
      posts.map((item, index) => {
        if (index === idx) {
          item.enableUpdate = false;
        }
        return item;
      })
    );
  };
  // 게시물 업데이트
  const updatePost = (data) => {
    setPosts(
      posts.map((item, index) => {
        // 숫자로 변경하여서 비교
        if (parseInt(data.index) === index) {
          item.title = data.title;
          item.content = data.content;
          item.timestamp = data.timestamp;
          item.enableUpdate = false;
        }
        return item;
      })
    );

    setAllowed(true);
  };
  // 로컬에 저장
  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(posts));
  }, [posts]);
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
            <form onSubmit={handleSubmit(createPost)}>
              <input
                type="text"
                className="w-full h-14 font-nomal focus:outline-none border border-main rounded-2xl pl-3"
                placeholder="약의 종류를 입력해주세요"
                {...register}
              />
              <input
                type="number"
                className="w-full h-14 font-nomal focus:outline-none border border-main rounded-2xl pl-3 mt-3"
                placeholder="복용 횟수를 입력해주세요"
                {...register}
              />
            </form>
          </div>
          <div className="mb-2" onClick={PillEdit}>
            <BarButton name={"취소"} className="cancel" color={"textRed"} />
          </div>
          <div onClick={handleSubmit(createPost)}>
            <BarButton name={Edit.name} color={"main"} />
          </div>
        </>
      )}
    </div>
  );
};

export default PillUpdate;
