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
    <>
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
    </>
  );
}

function App() {
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coverage" element={<Coverage />} />
      </Routes>
    </div>
  );
}

export default App;