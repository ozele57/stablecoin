import React from "react";
import Icon from "./Icon";

function FeatureStrip() {
  return (
    <section className="feature-strip" id="coverage">

      {/* LEFT FEATURE */}
      <div className="feature feature-left">

        <div className="feature-icon">
          <Icon size={38} stroke={1.8}>
            <path d="M20 7h-4V3" />
            <path d="M4 17h4v4" />
            <path d="M20 3a8.5 8.5 0 0 0-15.2 5" />
            <path d="M4 21a8.5 8.5 0 0 0 15.2-5" />
          </Icon>
        </div>

        <h3>Automated payout routing</h3>

        <p>
          Route deposits between crypto
          <br />
          or fiat settlement without delays.
        </p>

      </div>


      {/* RIGHT FEATURE */}
      <div className="feature feature-right">

        <div className="feature-icon">
          <Icon size={38} stroke={1.8}>
            <path d="M8 16 4 20" />
            <path d="M8 8 4 4" />
            <path d="m16 16 4 4" />
            <path d="m16 8 4-4" />
            <path d="M12 5v14" />
            <path d="M5 12h14" />
          </Icon>
        </div>

        <h3>Real time webhooks</h3>

        <p>
          Instant webhook notification for
          <br />
          deposit and settlement events.
        </p>

      </div>

    </section>
  );
}

export default FeatureStrip;