import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { NavBar } from "./components/NavBar";
import { HomeClient } from "./pages/HomeClient";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeClient />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <AnimatedRoutes />
    </>
  );
}

export default App;