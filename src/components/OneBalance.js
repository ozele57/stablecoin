import React from "react";
import BalanceCard from "./BalanceCard";

function OneBalance() {
  return (
    <section className="one-balance">

      <div className="one-balance-copy">

        <h2>
          One Balance. Any
          <br />
          Stablecoin. Any Chain
        </h2>

        <p>
          Single point of interaction and flow
          <br />
          across EVM and Solana blockchains.
        </p>


        <div className="slider-dots">

          <span className="active"></span>
          <span></span>
          <span></span>

        </div>

      </div>


      <BalanceCard />

    </section>
  );
}

export default OneBalance;