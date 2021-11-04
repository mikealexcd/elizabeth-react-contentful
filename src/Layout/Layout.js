import "./Layout.scss";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Header from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;
