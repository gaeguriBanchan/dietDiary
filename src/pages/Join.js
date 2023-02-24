import React from "react";
import Background from "../components/base/Background";
import myIcon from "../assets/images/icon/icon_b_my.png";
import BarButton from "../components/base/BarButton";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Join = () => {
  //================ 회원 가입 관련
  // 에러 정보 관리 객체
  const [Err, setErr] = useState({});
  const errCheck = useRef(true);
  const check = (_val) => {
    // 에러 항목을 모아서 체크하고 메세지를 출력한다.
    const errs = {};
    // 아이디 체크
    if (_val.name === "") {
      errs.name = "이름을 입력해 주세요.";
      return alert("이름을 입력해 주세요.");
    }
    if (_val.id === "") {
      errs.id = "아이디를 입력해 주세요.";
      return alert("아이디를 입력해 주세요.");
    }
    if (_val.pwd === "") {
      errs.pwd = "비밀번호를 입력해 주세요.";
      return alert("비밀번호를 입력해 주세요.");
    }
    if (_val.pwd === '') {
      errs.pwd = "비밀번호를 입력해 주세요.";
      return alert("비밀번호를 입력해 주세요.");
    }
    if (_val.hard === "") {
      errs.hard = "다이어트 강도를 선택해 주세요.";
      return alert("다이어트 강도를 선택해 주세요.");
    }
    if (_val.age === "") {
      errs.age = "나이를 입력해 주세요.";
      return alert("나이를 입력해 주세요.");
    }
    if (_val.tall === "") {
      errs.tall = "신장을 입력해 주세요.";
      return alert("신장을 입력해 주세요.");
    }
    if (_val.kg === "") {
      errs.kg = "체중을 입력해 주세요.";
      return alert("체중을 입력해 주세요.");
    }
    if (_val.time === "") {
      errs.time = "다이어트 기간을 입력해 주세요.";
      return alert("다이어트 기간을 입력해 주세요.");
    }
    if (_val.cal === "") {
      errs.cal = "목표 섭취 칼로리를 입력해 주세요.";
      return alert("목표 섭취 칼로리를 입력해 주세요.");
    }
    if (_val.water === "") {
      errs.water = "목표 음수량을 입력해 주세요.";
      return alert("목표 음수량을 입력해 주세요.");
    }
    if (_val.weight === "") {
      errs.weight = "목표 체중을 입력해 주세요.";
      return alert("목표 체중을 입력해 주세요.");
    }

    // if (Object.keys(Err).length === 0) {
    //   errCheck.current = false;
    // } else {
    //   errCheck.current = true;
    // }
    return errs;
  };
  useEffect(() => {
    console.log("항목 에러 내용 :", Err);
  }, [Err]);
  //  회원 가입시 필요로 한 내용
  let initVal = {
    id: "",
    pwd: "",
    name: "",
    age: "",
    tall: "",
    weight: "",
    hard: "",
    cal: "",
    kg: "",
    water: "",
    time: "",
    token: "",
    // 서버관리자에게 전달할 내용
  };
  let pwC= {
    pwd2:''
  }
  // 최종 서버로 전송할 데이터 모음
  const [val, setVal] = useState(initVal);
  const [pwCheck, setPwCheck] = useState(pwC)

  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };
  const handlePwCheck = (e)=>{
    const { name, value } = e.target;
    setPwCheck({ ...pwCheck, [name]: value });
  }

  useEffect(() => {
    console.log("사용자 입력 내용 :", val);
  }, [val]);

  // 전송 실행시 각 항목의 내용 체크
  const handleSubmit = (e) => {
    console.log("handleSubmit : ");
    e.preventDefault();
    // 필요항목에 대한 체크 실행
    // 각 항목 체크용 객체를 생성해 진행
    setErr(check(val));
    setErr(check(pwC))
    // let errObj = check(val);
    // const count = Object.keys(errObj).length;
    // // console.log("count 체크 값 : ", count);
    // if (count === 0) {
    //   alert("서버전송");
    // }
  };
  //================
  const [btnActive, setBtnActive] = useState();
  const toggleActive = (e) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });

    setBtnActive((prev) => {
      return e.target.value;
    });
  };
  const level = ["건강", "쉬움", "보통", "강함"];
  const levelBt = level.map((item, index) => {
    return (
      <button
        name="hard"
        value={index}
        onClick={toggleActive}
        type="button"
        className={
          index.toString() === btnActive
            ? "border border-main rounded-full px-7 bg-main text-white"
            : "border rounded-full px-7"
        }
      >
        {item}
      </button>
    );
  });
  const Level = () => {
    return (
      <>
        <div className="text-3xl flex justify-around text-textAsh text-center mx-[150px] mb-[50px]">
          {levelBt}
        </div>
      </>
    );
  };

  return (
    <>
      <Background>
        <div className="flex justify-between">
          <div className="flex">
            <img
              src={myIcon}
              alt="profile"
              className="w-[20px] h-[20px] self-center mr-3"
            />
            <p className="text-main text-xl">회원가입</p>
          </div>
        </div>
        <div className="w-[300px] h-[300px] m-auto rounded-full bg-textGray my-[50px]"></div>
        <div className="flex justify-center mb-[10px]">
          <input
            className="text-4xl text-textBlack text-center mb-[100px] focus:outline-none border-b-2"
            type="text"
            placeholder="홍길동"
            maxLength="10"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center mb-[50px]">
          <p className="text-[30px] w-[180px] text-center text-main">아이디</p>
          <input
            className="max-w-[500px] mx-4 text-[30px] font-light font-NanumSquareNeo text-center text-textBlack border-b-2 m-0 focus:outline-none"
            type="text"
            placeholder="아이디를 입력해 주세요"
            maxLength="15"
            name="id"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center mb-[50px]">
          <p className="text-[30px] w-[180px] text-center text-main">
            비밀번호
          </p>
          <input
            className="max-w-[500px] mx-4 text-[30px] font-light font-NanumSquareNeo text-center text-textBlack border-b-2 m-0 focus:outline-none"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            minLength="8"
            name="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center mb-[100px]">
          <p className="text-[30px] w-[180px] text-center text-main">
            비밀번호확인
          </p>
          <input
            className="max-w-[500px] mx-4 text-[30px] font-light font-NanumSquareNeo text-center text-textBlack border-b-2 m-0 focus:outline-none"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            minLength="8"
            name="pwd2"
            onChange={handlePwCheck}
          />
        </div>
        <Level />
        <div className="flex justify-around mb-[70px]">
          <div className="">
            <p className="text-center text-main mb-[10px] text-2xl">나이</p>
            <input
              name="age"
              onChange={handleChange}
              type="text"
              className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
              placeholder={"25세"}
            />
          </div>
          <div className="">
            <p className="text-center text-main mb-[10px] text-2xl">신장</p>
            <input
              name="tall"
              onChange={handleChange}
              type="text"
              className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
              placeholder={"170cm"}
            />
          </div>
          <div className="">
            <p className="text-center text-main mb-[10px] text-2xl">체중</p>
            <input
              type="text"
              className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
              placeholder={"70kg"}
              name="kg"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-[30px]">
          <div className=" m-auto justify-center text-center mb-[70px]">
            <p className="text-center text-main mb-[10px] text-2xl">
              다이어트 기간
            </p>
            <span className="flex items-center justify-center">
              <input
                className="max-w-[140px] h-[90px] text-[62px] font-MuseoModerno text-center text-textBlack focus:outline-none"
                type="text"
                placeholder="300"
                name="time"
                onChange={handleChange}
              />
              <p className="text-[26px] text-textGray font-normal">일</p>
            </span>
            <div className="w-[280px] h-[1px] m-auto bg-textAsh"></div>
          </div>
          <div className=" m-auto justify-center text-center mb-[70px]">
            <p className="text-center text-main mb-[10px] text-2xl">
              목표 섭취 칼로리
            </p>
            <span className="flex items-center justify-center">
              <input
                className="max-w-[160px] h-[90px] text-[62px] font-MuseoModerno text-center text-textBlack focus:outline-none"
                type="text"
                placeholder="2500"
                name="cal"
                onChange={handleChange}
              />
              <p className="text-[26px] text-textGray font-normal">Kcal</p>
            </span>
            <div className="w-[280px] h-[1px] m-auto bg-textAsh"></div>
          </div>
          <div className=" m-auto justify-center text-center mb-[70px]">
            <p className="text-center text-main mb-[10px] text-2xl">
              목표 음수량
            </p>
            <span className="flex items-center justify-center">
              <input
                className="max-w-[100px] h-[90px] text-[62px] font-MuseoModerno text-center text-textBlack focus:outline-none"
                type="text"
                placeholder="8"
                name="water"
                onChange={handleChange}
              />
              <p className="text-[26px] text-textGray font-normal">컵</p>
            </span>
            <div className="w-[280px] h-[1px] m-auto bg-textAsh"></div>
          </div>
          <div className=" m-auto justify-center text-center mb-[70px]">
            <p className="text-center text-main mb-[10px] text-2xl">
              목표 체중
            </p>
            <span className="flex items-center justify-center">
              <input
                className="max-w-[120px] h-[90px] text-[62px] font-MuseoModerno text-center text-textBlack focus:outline-none"
                type="text"
                placeholder="80"
                name="weight"
                onChange={handleChange}
              />
              <p className="text-[26px] text-textGray font-normal">kg</p>
            </span>
            <div className="w-[280px] h-[1px] m-auto bg-textAsh"></div>
          </div>
        </div>
        {/* <Link to="/today"> */}
        <BarButton
          name={"회원가입"}
          color={"main"}
          handleSubmit={handleSubmit}
          
        />
        {/* </Link> */}
      </Background>
    </>
  );
};

export default Join;
