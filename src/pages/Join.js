import React from "react";
import Background from "../components/base/Background";
import myIcon from "../assets/images/icon/icon_b_my.png";
import BarButton from "../components/base/BarButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const Join = () => {
  // 화면이동
  const navigate = useNavigate();
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
    if (_val.pwd2 === "") {
      errs.pwd2 = "비밀번호 확인을 입력해 주세요.";
      return alert("비밀번호 확인을 입력해 주세요.");
    }
    if (_val.pwd2 !== _val.pwd) {
      errs.pwd2 = "비밀번호가 일치하지 않습니다.";
      return alert("비밀번호가 일치하지 않습니다.");
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

    if (Object.keys(Err).length === 0) {
      errCheck.current = false;
    } else {
      errCheck.current = true;
    }
    return errs;
  };
  useEffect(() => {
    console.log("항목 에러 내용 :", Err);
  }, [Err]);
  //  회원 가입시 필요로 한 내용
  let initVal = {
    id: "",
    pwd: "",
    pwd2: "",
    name: "",
    age: "",
    gen: "",
    address: "",
    tall: "",
    weight: "",
    hard: "",
    cal: "",
    kg: "",
    water: "",
    time: "",
    // 서버관리자에게 전달할 내용
  };
  // 최종 서버로 전송할 데이터 모음
  const [val, setVal] = useState(initVal);

  const handleChangeNumber = (e) => {
    let v = e.target.value;
    v = v.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    const { name } = e.target;
    setVal({ ...val, [name]: v });
  };
  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);

    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  useEffect(() => {
    console.log("사용자 입력 내용 :", val);
  }, [val]);

  // 전송 실행시 각 항목의 내용 체크
  const handleSubmit = (e) => {
    e.preventDefault();
    // 필요항목에 대한 체크 실행
    // 각 항목 체크용 객체를 생성해 진행
    setErr(check(val));

    let errObj = check(val);
    const count = Object.keys(errObj).length;
    // console.log("count 체크 값 : ", count);
    if (count === 0) {
      registFunc();
    }
  };
  const registFunc = () => {
    console.log("회원가입 실행");

    const header = {
      headers: {
        // "Content-Type": "multipart/form-data",
        // Authorization,
      },
    };

    // 서버로 이미지를 임시로 보내고 url 글자를 받아오는 코드 / 일반적인 방법
    // 파일을 강제로 업로드 한다.
    const formData = new FormData();
    formData.append("file", imgFile);
    formData.append("id", val.id);
    formData.append("pwd", val.pwd);
    formData.append("name", val.name);
    formData.append("age", val.age);
    formData.append("gen", "");
    formData.append("address", "");
    formData.append("tall", val.tall);
    formData.append("weight", val.weight);
    formData.append("hard", val.hard);
    formData.append("cal", val.cal);
    formData.append("kg", val.kg);
    formData.append("water", val.water);
    formData.append("time", val.time);

    axios
      .put("http://192.168.0.16:9876/api/member/add", formData, header)
      .then((res) => {
        console.log(res.data);
        alert("회원가입 완료");
        navigate("/login");
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        console.log(err);
        // setBtFlag(false);
      });
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

  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef(null);
  const imgUplod = () => {
    imgRef.current.click();
  };
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
      // formData.append("files", uploadFile);
      // await axios({
      //   method: "post",
      //   url: "/api/files/images",
      //   data: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
    }
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
        <div className="w-[300px] h-[300px] m-auto rounded-full relative bg-textGray mt-[50px] mb-[20px]">
          <img
            onClick={imgUplod}
            src={imgFile}
            alt=""
            className="w-[300px] h-[300px] m-auto rounded-full bg-main"
          />
          <input
            type="file"
            accept="image/*"
            onInput={onChangeImg}
            ref={imgRef}
            style={{ display: "none" }}
          />
        </div>
        <div onClick={imgUplod} className="w-[200px] m-auto mb-[50px]">
          <BarButton name={"프로필 사진 추가"} color={"main"} />
        </div>
        <div className="flex justify-center mb-[10px]">
          <input
            className="text-4xl text-textBlack text-center mb-[100px] focus:outline-none border-b-2"
            type="text"
            placeholder="Name"
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
            onChange={handleChange}
          />
        </div>
        <Level />
        <div className="flex justify-around mb-[70px]">
          <div className="">
            <p className="text-center text-main mb-[10px] text-2xl">나이</p>
            <input
              name="age"
              onChange={handleChangeNumber}
              type="text"
              value={val.age}
              className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
              placeholder={"25세"}
            />
          </div>
          <div className="">
            <p className="text-center text-main mb-[10px] text-2xl">신장</p>
            <input
              name="tall"
              onChange={handleChangeNumber}
              type="text"
              value={val.tall}
              className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
              placeholder={"170cm"}
            />
          </div>
          <div className="">
            <p className="text-center text-main mb-[10px] text-2xl">체중</p>
            <input
              type="text"
              value={val.kg}
              className="w-[180px] p-1 border rounded-full text-center text-textGray text-4xl"
              placeholder={"70kg"}
              name="kg"
              onChange={handleChangeNumber}
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
                value={val.time}
                placeholder="300"
                name="time"
                onChange={handleChangeNumber}
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
                value={val.cal}
                placeholder="2500"
                name="cal"
                onChange={handleChangeNumber}
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
                value={val.water}
                placeholder="8"
                name="water"
                onChange={handleChangeNumber}
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
                value={val.weight}
                placeholder="80"
                name="weight"
                onChange={handleChangeNumber}
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
