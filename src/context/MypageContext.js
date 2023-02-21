import { createContext, useState } from "react";

export const MypageContext = createContext();

export function MypageProvider({ children }) {
  const [pageChange, setPageChange] = useState(true);
  const toggleChange = () => setPageChange((mode) => !mode);
  const human = {
    name: "바이든",
    age: 28,
    height: 195,
    weight: 105,
    goalWeight: 120,
    day: 289,
    cal: 2450,
    cup: 10,
  };
  return (
    <MypageContext.Provider value={{ pageChange, toggleChange, human }}>
      {children}
    </MypageContext.Provider>
  );
}
