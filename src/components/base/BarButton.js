/** @format */

const BarButton = ({ name, color, handleSubmit }) => {

  return (
    
    <div>
      <button
        onClick={handleSubmit}
        className={`bg-${color} text-white w-full h-16 rounded-2xl text-xl`}
      >
        {name}
      </button>
    </div>
  );
};
export default BarButton;