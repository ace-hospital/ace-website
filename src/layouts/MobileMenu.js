import Link from "next/dist/client/link";
import { useState } from "react";
import { Home, News, Pages, Services, Team } from "./Menu";
const MobileMenu = ({ openMenu, closeMenu }) => {
  const [activeToggle, setActiveToggle] = useState("");
  const setActive = (value) =>
      setActiveToggle(value === activeToggle ? "" : value),
    activeLi = (value) =>
      value === activeToggle ? { display: "block" } : { display: "none" },
    activeArrow = (value) => (value === activeToggle ? "expanded" : "");
  return (
    <div className={`mobile-nav__wrapper ${openMenu ? "expanded" : ""}`}>
      <div
        className="mobile-nav__overlay mobile-nav__toggler"
        onClick={() => closeMenu()}
      />
      {/* /.mobile-nav__overlay */}
      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close mobile-nav__toggler"
          onClick={() => closeMenu()}
        >
          <i className="fa fa-times" />
        </span>
        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <img src="../assets/images/VALENZUELA.png" width={155} alt />
            </a>
          </Link>
        </div>
        {/* /.logo-box */}
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            <li className="dropdown current">
              <Link href="/">
                <a>
                  Home
                  <button
                    aria-label="dropdown toggler"
                    className={activeArrow("home")}
                    onClick={() => setActive("home")}
                  >
                    <i className="fa fa-angle-down" />
                  </button>
                </a>
              </Link>
              <ul style={activeLi("home")}>
                <Home />
              </ul>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li className="dropdown">
              <a href="#">
                Services
                <button
                  aria-label="dropdown toggler"
                  className={activeArrow("Services")}
                  onClick={() => setActive("Services")}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </a>
              <ul style={activeLi("Services")}>
                <Services />
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                Find Doctor
                <button
                  aria-label="dropdown toggler"
                  className={activeArrow("Team")}
                  onClick={() => setActive("Team")}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </a>
              <ul style={activeLi("Team")}>
                <Team />
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                Pages
                <button
                  aria-label="dropdown toggler"
                  className={activeArrow("Pages")}
                  onClick={() => setActive("Pages")}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </a>
              <ul style={activeLi("Pages")}>
                <Pages />
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                News
                <button
                  aria-label="dropdown toggler"
                  className={activeArrow("News")}
                  onClick={() => setActive("News")}
                >
                  <i className="fa fa-angle-down" />
                </button>
              </a>
              <ul style={activeLi("News")}>
                <News />
              </ul>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* /.mobile-nav__container */}
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="icon-phone-call" />
            <a href="mailto:needhelp@packageName__.com">needhelp@conbiz.com</a>
          </li>
          <li>
            <i className="icon-letter" />
            <a href="tel:666-888-0000">666 888 0000</a>
          </li>
          <li>
          <div className="main-menu__right">
                    <div className="btn-box">
                      <a href="#" className="thm-btn">
                        Sign Up | Login{" "}
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                          style={{backgroundColor:""}}
                        />
                      </a>
                    </div>
                  </div>
          </li>
        </ul>
        {/* /.mobile-nav__contact */}
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="#" className="fab fa-twitter" />
            <a href="#" className="fab fa-facebook-square" />
            <a href="#" className="fab fa-pinterest-p" />
            <a href="#" className="fab fa-instagram" />
          </div>
          {/* /.mobile-nav__social */}
        </div>
        {/* /.mobile-nav__top */}
      </div>
      {/* /.mobile-nav__content */}
    </div>
  );
};

export default MobileMenu;
