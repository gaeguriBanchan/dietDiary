/** @format */

import { useEffect } from "react";

const BarButton = ({ name, color = "textRed" }) => {
  return (
    <div>
      <button
        className={`bg-${color} text-white w-full h-16 rounded-2xl text-xl`}
      >
        {name}
      </button>
    </div>
  );
};
export default BarButton;
