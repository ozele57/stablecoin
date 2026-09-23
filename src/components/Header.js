import React from "react";
import Icon from "./Icon";
import Logo from "./Logo";

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const goHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="site-header">

      {/* LOGO */}
      <button
        className="logo-button"
        onClick={goHome}
        aria-label="Go to homepage"
      >
        <Logo />
      </button>


      {/* NAVIGATION */}
      <nav className="nav-pill">

        <button
          className="nav-item active"
          onClick={() => scrollToSection("collection")}
        >
          <Icon size={23}>
            <path d="M13 2 3.5 13h7L9 22l9.5-12h-7L13 2Z" />
          </Icon>

          <span>Collection</span>
        </button>


        <button
          className="nav-item"
          onClick={() => scrollToSection("coverage")}
        >
          <Icon size={23}>
            <circle cx="10.5" cy="10.5" r="6.8" />
            <path d="m16 16 5 5" />
          </Icon>

          <span>Coverage</span>
        </button>


        <button
          className="nav-item"
          onClick={() => scrollToSection("how")}
        >
          <Icon size={23}>
            <path d="m12 2 1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z" />
          </Icon>

          <span>How it works</span>
        </button>


        <button
          className="nav-item"
          onClick={() => scrollToSection("documentation")}
        >
          <Icon size={23}>
            <path d="M6 3h9l4 4v14H6z" />
            <path d="M14 3v5h5M9 12h6M9 16h6" />
          </Icon>

          <span>Documentation</span>
        </button>

      </nav>


      {/* OPEN APP */}
      <button
  className="open-app"
  onClick={() => scrollToSection("app")}
>
  <Icon size={32} stroke={2}>
    <path d="m12 2 8 4.5v11L12 22l-8-4.5v-11L12 2Z" />
    <path d="m4 6.5 8 4.5 8-4.5M12 11v11" />
  </Icon>

  <span>Open app</span>
</button>

    </header>
  );
}

export default Header;