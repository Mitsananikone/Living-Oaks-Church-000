import { useEffect, useState, useRef } from "react";
import styles from "./nav.module.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const idleTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setShowNav(currentScrollPos <= lastScrollPos); // Show navbar when scrolling up
      setLastScrollPos(currentScrollPos);
    };

    const handleMouseMove = () => {
      setShowNav(true);
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
      }
      idleTimeout.current = setTimeout(() => setShowNav(false), 5000000000);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (idleTimeout.current) {
        clearTimeout(idleTimeout.current);
      }
    };
  }, [lastScrollPos]);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${showNav ? styles.show : styles.hide}`}>
      <div className={styles.logo} onClick={() => handleNavClick("home")}>
        <img src="./images/LOCnavLogo.png" alt="Logo" />
      </div>
      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        {["Meet the Perrins", "Our Mission", "The Plan", "Resources", "Join Us", "Contact Us"].map(
          (section, index) => (
            <li key={index} onClick={() => handleNavClick(section)}>
              {section}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
