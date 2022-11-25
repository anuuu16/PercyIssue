import logo from "./logo.svg";
import "./App.css";
import React, { Suspense, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import GlobalPopup from "./GlobalPopup";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const newSearch = new URLSearchParams(window.location.search);
    newSearch.set("popup", "welcome");
    navigate(`?${newSearch.toString()}`);
  }, []);

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <GlobalPopup />
    </>
  );
}

export default App;
