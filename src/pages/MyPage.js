import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
// import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
// import Title from "../components/base/Title";
import { Sidebar } from "../components/common/Sidebar";
import InfoChange from "../components/main/myPage/InfoChange";
import MyPageMain from "../components/main/myPage/MyPageMain";
import { MypageContext } from "../context/MypageContext";
// import Goal from "../components/sub/myPage/Goal";
// import MyPageFrofile from "../components/sub/myPage/MyPageFrofile";
// import Weight from "../components/sub/myPage/Weight";
// import WeightGraph from "../components/sub/myPage/WeightGraph";

const MyPage = () => {
  const { pageChange } = useContext(MypageContext);
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(user);
  const [userImg, setUserImg] = useState("");

  useEffect(() => {
    axios
      .get(`http://192.168.0.16:9876/api/member/info?token=${user.miToken}`)
      .then((res) => {
        // console.log(res.data);
        // 사용자정보 업데이트
        setUserInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .get(`http://192.168.0.16:9876/api/member/image/200937431.jpg`)
    //   .then((res) => {
    //     console.log(res.data);
    //     // 사용자정보 업데이트
        
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  // console.log(user);

  useEffect(() => {
    // console.log("사용자 정보 Mypage userInfo : ", userInfo);
  }, [userInfo]);
  return (
    <>
      <Helmet>
        <title>마이페이지</title>
      </Helmet>
      <div className="container w-full h-full flex m-auto">
        <Sidebar></Sidebar>
        <div className="w-full ml-8 h-full self-start drop-shadow-md">
          {pageChange ? <MyPageMain userInfo={userInfo} /> : <InfoChange />}
        </div>
      </div>
    </>
  );
};

export default MyPage;
