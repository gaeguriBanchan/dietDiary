import React from "react";
import { Helmet } from "react-helmet-async";
import { Sidebar } from "../components/common/Sidebar";
import calendar from "../assets/images/icon/icon_calendar.png";
import drug from "../assets/images/icon/icon_b_pill.png";
import Title from "../components/base/Title";

const Supplement = () => {
  return (
    <>
      <Helmet>
        <title>약</title>
      </Helmet>
      <div className="container m-auto flex w-full h-full ">
        <Sidebar></Sidebar>
        <div className="w-full ml-8 drop-shadow-md">
          <div className="bg-white mb-8 p-8 border rounded-2xl">
            <div className="flex justify-between mb-8">
              <div className="flex">
                <img
                  src={drug}
                  alt="drug"
                  className="w-[20px] h-[20px] self-center mr-3"
                />
                <Title name={"약"} />
              </div>
              <button>
                {" "}
                <img src={calendar} alt="drug" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supplement;
