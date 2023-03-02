import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logIn, updateHard } from "../reducer/userSlice";
import axios from "axios";
export const MypageContext = createContext();

export function MypageProvider({ children }) {
  const [pageChange, setPageChange] = useState(true);
  const toggleChange = () => setPageChange((mode) => !mode);
  const human = {
    name: "강백호",
    age: 28,
    height: 195,
    weight: 105,
    goalWeight: 120,
    day: 289,
    cal: 2450,
    cup: 10,
  };
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [btnActive, setBtnActive] = useState(user.miHard);
  const level = ["건강", "쉬움", "보통", "강함"];
  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return parseInt(e.target.value);
    });
    axios
      .patch(
        `http://192.168.0.16:9876/api/member/update/hard?hard=${e.target.value}&token=${user.miToken}`
      )
      .then((res) => {
        // console.log("성공? : ", res.data);
        dispatch(updateHard(parseInt(e.target.value)));
      })
      .catch((err) => console.log(err));
  };
  const levelBt = level.map((item, index) => {
    // console.log(user);
    return (
      <button
        key={index}
        value={index}
        onClick={toggleActive}
        type="button"
        className={
          // index.toString() === btnActive
          index === btnActive
            ? "border border-main rounded-full px-7 bg-main text-white"
            : "border rounded-full px-7"
        }
      >
        {item}
      </button>
    );
  });

  return (
    <MypageContext.Provider
      value={{ pageChange, toggleChange, human, levelBt }}
    >
      {children}
    </MypageContext.Provider>
  );
}
