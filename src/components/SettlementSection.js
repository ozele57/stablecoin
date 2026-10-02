import React from "react";

function SettlementSection() {
  return (
    <section className="settlement-section">

      {/* LEFT SIDE */}
      <div className="settlement-copy">
        <h2>
          Cross border and local
          <br />
          payment settlement.
        </h2>

        <p>
          Collect stablecoin from any chain and
          <br />
          instantly convert to any local currency.
        </p>

        <div className="settlement-dots">
          <span></span>
          <span></span>
          <span className="active"></span>
        </div>
      </div>


      {/* CURRENCY PANEL IMAGE */}
      <div className="currency-panel-image">
        <img
          src="/Frame 1707480166.svg"
          alt="Currency selection panel"
        />
      </div>

    </section>
  );
}

export default SettlementSection;