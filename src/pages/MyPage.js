import { useState } from "react";
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
  const [pageChange, setPageChange] = useState(true);
  const toggleChange = () => setPageChange((mode) => !mode);
  
  return (
    <>
      <Helmet>
        <title>마이페이지</title>
      </Helmet>
      <div className="container w-full h-full flex m-auto">
        <Sidebar></Sidebar>
        <div className="w-full ml-8 h-full self-start drop-shadow-md">
          {pageChange ? (
            <MyPageMain
              toggleChange={toggleChange}
              name="최개똥"
              age={29}
              height={190}
              weight={90}
            />
          ) : (
            <InfoChange
              toggleChange={toggleChange}
              name="최개똥"
              age={29}
              height={190}
              weight={90}
            />
          )}
          {/* <MyPageMain toggleChange={toggleChange} name="최개똥" age={26} />
          <InfoChange toggleChange={toggleChange} /> */}
        </div>
      </div>
    </>
  );
};

export default MyPage;
