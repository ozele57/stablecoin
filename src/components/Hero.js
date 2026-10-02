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
      <div className="hero-background">
  <img src="/Group.svg" alt="" />
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