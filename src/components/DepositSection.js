import React from "react";
import DepositVisual from "./DepositVisual";

function DepositSection() {
  return (
    <section className="deposit-section">

      <DepositVisual />


      <div className="deposit-copy">

        <h2>
          Collect deposits using
          <br />
          Payment link or embed
        </h2>

        <p>
          Create deposit addresses in seconds
          <br />
          to route payout to fiat or stablecoins.
        </p>

        <button className="documentation-button">
          View documentation
        </button>


        <div className="deposit-dots">

          <span></span>
          <span className="active"></span>
          <span></span>

        </div>

      </div>

    </section>
  );
}

export default DepositSection;