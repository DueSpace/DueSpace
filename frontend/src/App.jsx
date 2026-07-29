import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { NavBar } from "./components/NavBar";
import { JoinOurNetwork } from "./pages/JoinOurNetwork";
import OurStory from "./pages/ourStory";
import { Footer } from "./components/Footer";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<JoinOurNetwork />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <AnimatedRoutes />
      <Footer />
    </>
  );
}

export default App;
