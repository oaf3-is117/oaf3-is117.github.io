import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/theme.css"

import Home from "./pages/Home";
import Search from "./pages/Search";
import Support from "./pages/Support";
import TermsOfService from "./pages/Terms-Of-Service";
import PrivacyPolicy from "./pages/Privacy-Policy";
import Footer from "./components/Footer"

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme)
  }

  useEffect(() => {
    const rootElement = document.documentElement;
    if (rootElement) {
      rootElement.classList.add(theme);
    }
    return () => {
      if (rootElement) {
        rootElement.classList.remove(theme);
      }
    };
  }, [theme]);

  return (
    <div className={`${theme} app`}>
      <Navbar toggleTheme={toggleTheme}></Navbar>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/contact-us" element={<Support />}></Route>
          <Route path="/terms-of-service" element={<TermsOfService />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
