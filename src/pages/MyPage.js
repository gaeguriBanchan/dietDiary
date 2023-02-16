import React from "react";
import { Helmet } from "react-helmet-async";
// import Title from "../components/base/Title";
import { Sidebar } from "../components/common/Sidebar";
import InfoChange from "../components/main/myPage/InfoChange";
import MyPageMain from "../components/main/myPage/MyPageMain";
// import Goal from "../components/sub/myPage/Goal";
// import MyPageFrofile from "../components/sub/myPage/MyPageFrofile";
// import Weight from "../components/sub/myPage/Weight";
// import WeightGraph from "../components/sub/myPage/WeightGraph";

const MyPage = () => {
  return (
    <div className="container w-full h-full">
      <Helmet>
        <title>마이페이지</title>
      </Helmet>
      <div className="w-full h-full flex">
        <Sidebar></Sidebar>
        <div className="w-[1080px] m-8 h-full self-start ">
          {/* <MyPageMain /> */}
          <InfoChange/>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
