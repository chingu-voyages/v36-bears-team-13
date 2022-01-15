import "./style/main.css";
import Navigation from "./components/Navigation/Navigation.js";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
function App() {
  return (
    <>
      <Router>
        <Navigation />
        <div className="flex-1 bg-slate-600">
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
