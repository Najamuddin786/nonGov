import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../Pages/Home";
import { Route, Routes } from "react-router-dom";

export default function AllRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* You can add more routes here as needed */}
      </Routes>
      <Footer />
    </>
  );
}
