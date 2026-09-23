import React from "react";

import {
  GH,
  US,
  NG,
  GB,
} from "country-flag-icons/react/3x2";

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


      {/* RIGHT SIDE */}
      <div className="currency-panel">

        {/* HEADER */}
        <div className="currency-header">

          <div>
            <h3>Choose currency</h3>

            <p>
              Select local currency from the list
            </p>
          </div>

          <button className="close-button">
            × Close
          </button>

        </div>


        {/* SEARCH */}
        <div className="currency-search">

          <span className="search-icon">
            ⌕
          </span>

          <span>
            Search by name or keyword
          </span>

        </div>


        {/* =========================
            GHANA GROUP
        ========================== */}

        <div className="currency-group">

          {/* Ghana */}

          <div className="currency-item country-open">

            <div className="currency-info">

              <div className="flag">
                <GH title="Ghana" />
              </div>

              <div>
                <strong>Ghana</strong>
                <small>Africa</small>
              </div>

            </div>

            <span className="arrow">
              ⌃
            </span>

          </div>


          {/* GHS */}

          <div className="currency-item selected">

            <div className="currency-info">

              <div className="flag">
                <GH title="Ghana" />
              </div>

              <div>
                <strong>GHS</strong>
                <small>Ghana Cedi</small>
              </div>

            </div>

            <button className="continue-button">
              Continue
            </button>

          </div>


          {/* USD */}

          <div className="currency-item">

            <div className="currency-info">

              <div className="flag">
                <US title="United States" />
              </div>

              <div>
                <strong>USD</strong>
                <small>United States Dollar</small>
              </div>

            </div>

            <span className="arrow">
              ›
            </span>

          </div>

        </div>


        {/* =========================
            NIGERIA - SEPARATE
        ========================== */}

        <div className="currency-group single">

          <div className="currency-item">

            <div className="currency-info">

              <div className="flag">
                <NG title="Nigeria" />
              </div>

              <div>
                <strong>Nigeria</strong>
                <small>Africa</small>
              </div>

            </div>

            <span className="arrow">
              ⌄
            </span>

          </div>

        </div>


        {/* =========================
            UNITED KINGDOM - SEPARATE
        ========================== */}

        <div className="currency-group single">

          <div className="currency-item">

            <div className="currency-info">

              <div className="flag">
                <GB title="United Kingdom" />
              </div>

              <div>
                <strong>United Kingdom</strong>
                <small>Europe</small>
              </div>

            </div>

            <span className="arrow">
              ⌄
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SettlementSection;