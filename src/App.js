import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureStrip from "./components/FeatureStrip";
import GlobalLayer from "./components/GlobalLayer";
import HowTitle from "./components/HowTitle";
import OneBalance from "./components/OneBalance";
import DepositSection from "./components/DepositSection";
import SettlementSection from "./components/SettlementSection";
import FinalCTA from "./components/FinalCTA";

import "./App.css";

function App() {
  return (
    <div className="page">

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

export default App;