import React from "react";

function GlobalLayer() {
  const scrollToDocumentation = () => {
    const section = document.getElementById("documentation");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="global-layer">

      <div className="global-left">
        <h2>
          A truly global layer for
          <br />
          stablecoin payment.
        </h2>
      </div>


      <div className="global-right">

        <p>
          Integrate Stablecoins deposits
          <br />
          that powers real-world flows
        </p>

        <button
          className="global-demo-button"
          onClick={scrollToDocumentation}
        >
          Book a demo
        </button>

      </div>

    </section>
  );
}

export default GlobalLayer;