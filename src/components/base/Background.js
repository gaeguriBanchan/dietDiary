import React from "react";

const Background = (props) => {
  return (
    <div>
      <div className="w-full h-full drop-shadow-md ">
        <div className="bg-white mb-8 p-8 border rounded-2xl ">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Background;
