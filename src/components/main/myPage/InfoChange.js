import FrofileChange from "../../sub/myPage/FrofileChange";
import GoalChange from "../../sub/myPage/GoalChange";

const InfoChange = ({ name, age, toggleChange, height, weight}) => {
  const handlePage = ()=>{
    toggleChange()
  }
  return (
    <>
      <FrofileChange name={name} age={age} height={height} weight={weight} />
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
