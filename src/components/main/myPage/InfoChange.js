import { useContext } from "react";
import { MypageContext } from "../../../context/MypageContext";
import ProfileChange from "../../sub/myPage/ProfileChange";
import GoalChange from "../../sub/myPage/GoalChange";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  updateHard,
  updateKcal,
  updateGoalKg,
  updateWater,
  updateWeight,
} from "../../../reducer/userSlice";

const InfoChange = () => {
  const { toggleChange } = useContext(MypageContext);
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(user);

  const dispatch = useDispatch();

  const [dday, setDday] = useState(0);
  const [ddayNow, setDdayNow] = useState(0);

  useEffect(() => {
    // 초기 DDay 정보
    axios
      .get(`http://192.168.0.16:9876/api/member/dDay?token=${userInfo.miToken}`)
      .then((res) => {
        // console.log(res.data);
        // 사용자정보 업데이트
        setDday(res.data.dday);
        setDdayNow(res.data.dday);
        // console.log(dday);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [miHard, setMiHard] = useState(userInfo.miHard);
  const [miKcal, setMiKcal] = useState(userInfo.miKcal);
  const [miGoalKg, setMiGoalKg] = useState(userInfo.miGoalKg);
  const [miWater, setMiWater] = useState(userInfo.miWater);
  const [miWeight, setMiWeight] = useState(userInfo.miWeight);

  const userInfoUpdate = async () => {
    const newUserInfo = {
      miGoalKg: user.miGoalKg,
      miKcal: user.miKcal,
      miWater: user.miWater,
      miWeight: user.miWeight,
    };
    // console.log("변경전 정보 : ", newUserInfo);

    // 회원별 목표 다이어트 강도 변경
    if (user.miHard !== miHard) {
      // dispatch(updateHard(miHard));
    }

    // 목표날짜 수정
    // console.log("기존 정보dday: ", dday);
    // console.log("신규 정보 miKcal: ", ddayNow);
    if (dday !== ddayNow) {
      // alert("목표날짜 수정");
      await axios
        .patch(
          `http://192.168.0.16:9876/api/member/update/day?time=${ddayNow}&token=${user.miToken}`
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
    // 회원별 목표 칼로리 변경
    // console.log("기존 정보 user.miKcal: ", user.miKcal);
    // console.log("신규 정보 miKcal: ", miKcal);
    if (user.miKcal !== miKcal) {
      // alert("목표 칼로리 수정");
      await axios
        .patch(
          `http://192.168.0.16:9876/api/member/update/kcal?cal=${miKcal}&token=${user.miToken}`
        )
        .then((res) => {
          console.log(res.data);
          newUserInfo.miKcal = miKcal;
          dispatch(updateKcal(miKcal));
        })
        .catch((err) => console.log(err));
    }
    // 회원별 목표 몸무게 변경
    // console.log("기존 정보 user.miGoalKg: ", user.miGoalKg);
    // console.log("신규 정보 miGoalKg: ", miGoalKg);
    if (user.miGoalKg !== miGoalKg) {
      // alert("몸무게 목표 수정");
      await axios
        .patch(
          `http://192.168.0.16:9876/api/member/update/kg?weight=${miGoalKg}&token=${user.miToken}`
        )
        .then((res) => {
          console.log(res.data);
          newUserInfo.miGoalKg = miGoalKg;
          dispatch(updateGoalKg(miGoalKg));
        })
        .catch((err) => console.log(err));
    }
    // 회원별 목표 음수량 변경

    // console.log("기존 정보 user.miWater: ", user.miWater);
    // console.log("신규 정보 miWater: ", miWater);
    if (user.miWater !== miWater) {
      // alert("음수량 수정");
      await axios
        .patch(
          `http://192.168.0.16:9876/api/member/update/water?water=${miWater}&token=${user.miToken}`
        )
        .then((res) => {
          console.log(res.data);
          newUserInfo.miWater = miWater;
          dispatch(updateWater(miWater));
        })
        .catch((err) => console.log(err));
    }
    if (user.miWeight !== miWeight) {
      // alert("몸무게 수정");
      await axios
        .put(
          `http://192.168.0.16:9876/api/weight/add?token=${user.miToken}&weight=${miWeight}`
        )
        .then((res) => {
          console.log(res.data);
          newUserInfo.miWeight = miWeight;

          dispatch(updateWeight(miWeight));
        })
        .catch((err) => console.log(err));
    }
    toggleChange();
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    console.log("사용자 정보 InfoChange userInfo : ", userInfo);
  }, [userInfo]);
  return (
    <>
      <ProfileChange userInfo={userInfo} setMiWeight={setMiWeight} />
      <GoalChange
        userInfo={userInfo}
        ddayNow={ddayNow}
        setDdayNow={setDdayNow}
        setMiKcal={setMiKcal}
        setMiWater={setMiWater}
        setMiGoalKg={setMiGoalKg}
      />
      <button
        onClick={() => userInfoUpdate()}
        className="w-full rounded-2xl h-[60px] text-white font-medium text-xl bg-main mb-3"
      >
        확인
      </button>
    </>
  );
};

export default InfoChange;
