/** @format */

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Today from "./pages/Today";
import Drink from "./pages/Drink";
import DailyMenu from "./pages/DailyMenu";
import Supplement from "./pages/Supplement";
import Footer from "./components/common/Footer";
import Join from "./pages/Join";
import RealMyPage from "./pages/RealMyPage";
import Header from "./components/common/Header";
import Addfood from "./pages/AddFood";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<Header />}>
            <Route path="/today" element={<Today />}></Route>
            <Route path="/drink" element={<Drink />}></Route>
            <Route path="/dailyMenu" element={<DailyMenu />}></Route>
            <Route path="/addfood" element={<Addfood />}></Route>
            <Route path="/supplement" element={<Supplement />}></Route>
            <Route path="/myPage" element={<RealMyPage />}></Route>
            <Route path="*" element={<Navigate to="/today" />} />
          </Route>
          <Route path="/join" element={<Join />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
