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
import MyPage from "./pages/MyPage";
import Footer from "./components/common/Footer";
import Join from "./pages/Join";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/today" element={<Today />}></Route>
          <Route path="/drink" element={<Drink />}></Route>
          <Route path="/dailyMenu" element={<DailyMenu />}></Route>
          <Route path="/supplement" element={<Supplement />}></Route>
          <Route path="/myPage" element={<MyPage />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="*" element={<Navigate to="/today" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
