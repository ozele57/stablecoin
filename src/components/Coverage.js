import React from "react";

import {
  BO,
  CA,
  CL,
  CR,
  DO,
  EC,
  SV,
  GT,
  HN,
  PE,
  PY,
} from "country-flag-icons/react/3x2";

import FinalCTA from "./FinalCTA";

function Coverage() {

  const countries = [
    {
      name: "Bolivia",
      Flag: BO,
    },
    {
      name: "Canada",
      Flag: CA,
    },
    {
      name: "Chile",
      Flag: CL,
    },
    {
      name: "Costa Rica",
      Flag: CR,
    },
    {
      name: "Dominican",
      Flag: DO,
    },
    {
      name: "Ecuador",
      Flag: EC,
    },
    {
      name: "El Salvador",
      Flag: SV,
    },
    {
      name: "Guatemala",
      Flag: GT,
    },
    {
      name: "Honduras",
      Flag: HN,
    },
    {
      name: "Peru",
      Flag: PE,
    },
    {
      name: "Paraguay",
      Flag: PY,
    },
    {
      name: "Bolivia",
      Flag: BO,
    },
  ];

  const continents = [
    "America",
    "Africa",
    "Europe",
    "Asia",
  ];

  return (
    <main className="coverage-page">

      <section className="coverage-hero">

       <div className="coverage-world">
  <img
    src="/Frame.svg"
    alt=""
  />
</div>

        <div className="coverage-hero-content">

          <h1>
            Convert deposits to
            <br />
            over 30+ currencies.
          </h1>

          <p>
            Settle payouts to 100+ countries across 30
            <br />
            local currencies globally in few seconds.
          </p>

          <div className="coverage-actions">

            <button className="coverage-primary">
              Book a demo
            </button>

            <button className="coverage-secondary">
              Get started
            </button>

          </div>

        </div>

      </section>

      <section className="coverage-fees">

        <div className="fees-left">

          <h2>
            Skip the high fees
            <br />
            and bad rates.
          </h2>

        </div>

        <div className="fees-right">

          <p>
            Everything you need to send
            <br />
            and collect stablecoins.
          </p>

          <button>
            Book a demo
          </button>

        </div>

      </section>
      
      {continents.map((continent) => (

        <section
  className={`coverage-countries ${
    continent === "Africa" ? "africa-section" : ""
  }`}
  key={continent}
>

          <div className="countries-intro">

            <h2>{continent}</h2>

            <p>
              Send payouts to any of
              <br />
              these supported countries.
            </p>

          </div>


          <div className="countries-grid">

            {countries.map(({ name, Flag }, index) => (

              <div
                className="country"
                key={`${continent}-${name}-${index}`}
              >

                <Flag
                  className="country-flag"
                  title={name}
                />

                <span className="country-name">
                  {name}
                </span>

              </div>

            ))}

          </div>

        </section>

      ))}

      <FinalCTA />

    </main>
  );
}

export default Coverage;