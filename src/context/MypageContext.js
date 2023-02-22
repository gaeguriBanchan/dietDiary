import { createContext, useState } from "react";

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

  const [btnActive, setBtnActive] = useState();
  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };
  const level = ["건강", "쉬움", "보통", "강함"];
  const levelBt = level.map((item, index) => {
    return (
      <button
        value={index}
        onClick={toggleActive}
        type="button"
        className={
          index.toString() === btnActive
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
