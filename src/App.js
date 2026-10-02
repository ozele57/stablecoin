import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureStrip from "./components/FeatureStrip";
import GlobalLayer from "./components/GlobalLayer";
import HowTitle from "./components/HowTitle";
import OneBalance from "./components/OneBalance";
import DepositSection from "./components/DepositSection";
import SettlementSection from "./components/SettlementSection";
import FinalCTA from "./components/FinalCTA";
import Coverage from "./components/Coverage";

import "./App.css";

function Home() {
  return (
    <div className="page">

      {/* LEFT SIDE LINE */}
      <img
        className="side-line side-line-left"
        src="/Rectangle 12.svg"
        alt=""
      />

      {/* RIGHT SIDE LINE */}
      <img
        className="side-line side-line-right"
        src="/Rectangle 12.svg"
        alt=""
      />

      <Header />

      <main>
        <Hero />
        <FeatureStrip />
        <GlobalLayer />
        <HowTitle />
        <OneBalance />
        <DepositSection />
        <SettlementSection />
      </main>

      <FinalCTA />
    </div>
  );
}

function CoveragePage() {
  return (
    <div className="page">

      {/* SIDE LINES */}
      <img
        className="side-line side-line-left"
        src="/Rectangle 12.svg"
        alt=""
      />

      <img
        className="side-line side-line-right"
        src="/Rectangle 12.svg"
        alt=""
      />

      <Header />

      <Coverage />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coverage" element={<CoveragePage />} />
    </Routes>
  );
}

export default App;