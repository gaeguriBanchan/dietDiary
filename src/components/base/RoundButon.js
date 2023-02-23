/** @format */

const RountButton = ({ name, color, text }) => {
  return (
    <button
      className={`h-12 w-full mx-5 border border-main bg-${color}  text-${text} rounded-full `}
      value={name}
    >
      {name}
    </button>
  );
};
export default RountButton;
