import React from "react";
import { Helmet } from "react-helmet-async";
import Title from "../components/base/Title";
import { Sidebar } from "../components/common/Sidebar";

const MyPage = () => {
  return (
    <div className="container w-full h-full">
      <Helmet>
        <title>마이페이지</title>
      </Helmet>
      <div className="w-full h-full flex">
        <Sidebar></Sidebar>
        <div className="w-[1080px] m-8 h-full self-start bg-slate-600">
          <div className="h-[340px] m-auto mb-[20px] bg-slate-300 text-2xs">asdfasdf</div>
          <div className="h-[340px] m-auto mb-[20px] bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
