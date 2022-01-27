import "./style/main.css";
import Navigation from "./components/Navigation/Navigation.js";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Auth from "./components/Layouts/Auth/Auth";
import CreateAd from "./pages/CreateAd/CreateAd";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Navigation />
        <Routes>
          <Route element={<Auth />}>
            <Route path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
          </Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/create" element={<CreateAd />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
