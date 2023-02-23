import { useContext } from "react";
import { MypageContext } from "../../../context/MypageContext";
import ProfileChange from "../../sub/myPage/ProfileChange";
import GoalChange from "../../sub/myPage/GoalChange";

const InfoChange = () => {
  const { toggleChange } = useContext(MypageContext);

  return (
    <>
      <ProfileChange />
      <GoalChange />
      <button
        onClick={() => toggleChange()}
        className="w-full rounded-2xl h-[60px] text-white font-medium text-xl bg-main mb-3"
      >
        확인
      </button>
    </>
  );
};

export default InfoChange;
