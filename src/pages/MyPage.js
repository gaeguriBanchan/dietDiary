import React from "react";
import Title from "../components/base/Title";
import { Sidebar } from "../components/common/Sidebar";

const MyPage = () => {
  return (
    <div className="container">
      <div className="w-screen">
        <div className="w-7/12 bg-slate-300 m-auto flex">
          <Sidebar></Sidebar>
          <div>
            <Title name={"회원정보"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
