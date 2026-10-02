import React from "react";

function FeatureStrip() {
  return (
    <section className="feature-strip">

      <div className="feature">

        <div className="feature-icon">
          <img src="/refresh.svg" alt="" />
        </div>

        <h3>Instant settlement</h3>

        <p>
          Move money globally without
          <br />
          unnecessary delays.
        </p>

      </div>


      <div className="feature feature-right">

        <div className="feature-icon">
          <img src="/vector.svg" alt="" />
        </div>

        <h3>Global coverage</h3>

        <p>
          Collect and payout across
          <br />
          multiple currencies.
        </p>

      </div>

    </section>
  );
}

export default FeatureStrip;