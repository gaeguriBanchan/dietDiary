/** @format */

const RountButton = ({ name }) => {
  return (
    <button
      className={`h-12 w-full mx-5 border  border-main text-main rounded-full `}
      value={name}
    >
      {name}
    </button>
  );
};
export default RountButton;
