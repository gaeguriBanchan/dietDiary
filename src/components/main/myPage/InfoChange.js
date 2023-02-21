import { useContext } from "react";
import { MypageContext } from "../../../context/MypageContext";
import FrofileChange from "../../sub/myPage/FrofileChange";
import GoalChange from "../../sub/myPage/GoalChange";

const InfoChange = () => {
  const { toggleChange } = useContext(MypageContext);

  return (
    <>
      <FrofileChange />
      <GoalChange />
      <button
        onClick={() => toggleChange()}
        className="w-full rounded-2xl h-[60px] text-white font-medium text-xl bg-main"
      >
        확인
      </button>
    </>
  );
};

export default InfoChange;
