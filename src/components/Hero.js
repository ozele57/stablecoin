import React from "react";

function Hero() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="hero"
      id="collection"
    >

      {/* BACKGROUND BLOCKS */}
      <div
        className="hero-grid"
        aria-hidden="true"
      >
        <span className="grid-block block-1"></span>
        <span className="grid-block block-2"></span>
        <span className="grid-block block-3"></span>
        <span className="grid-block block-4"></span>
        <span className="grid-block block-5"></span>
        <span className="grid-block block-6"></span>
        <span className="grid-block block-7"></span>
        <span className="grid-block block-8"></span>
      </div>


      {/* HERO CONTENT */}
      <div className="hero-content">

        <h1>
          Receive stablecoin.
          <br />
          Get fiat in seconds.
        </h1>


        <p>
          Accept stablecoin payments, and get just
          <br className="desktop-break" />
          settled with your local currency instantly.
        </p>


        {/* BUTTONS */}
        <div className="hero-actions">

          <button
            className="hero-button primary"
            onClick={() => scrollTo("documentation")}
          >
            Book a demo
          </button>


          <button
            className="hero-button secondary"
            onClick={() => scrollTo("how")}
          >
            Get started
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;