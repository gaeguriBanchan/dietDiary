import FrofileChange from "../../sub/myPage/FrofileChange";
import GoalChange from "../../sub/myPage/GoalChange";

const InfoChange = ({ toggleChange}) => {
  const handlePage = ()=>{
    toggleChange()
  }
  return (
    <>
      <FrofileChange />
      <GoalChange />
      <button
        onClick={handlePage}
        className="w-full rounded-2xl h-[60px] text-white font-medium text-xl bg-main"
      >
        확인
      </button>
    </>
  );
};

export default InfoChange;
