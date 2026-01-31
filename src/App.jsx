import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import Generate from "./pages/generate";
import MyGeneration from "./pages/MyGeneration";
import Login from "./components/Login";
import YtPreview from "./pages/YtPreview";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/generate/:id" element={<Generate />} />
        <Route path="/my-generation" element={<MyGeneration />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/preview" element={<YtPreview />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
