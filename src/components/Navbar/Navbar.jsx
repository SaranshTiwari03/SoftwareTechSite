import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import navItems from "./navConfig";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CompanyConfig } from "../../theme/theme";

const MEGA_MENU_IMAGE = "/mobile-dummy.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20); }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  useEffect(() => {
    setHovered(null);
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(null);
  }, [location.pathname]);

  const navClasses = [
    styles.navbar,
    !scrolled && !hovered ? styles.transparent : styles.white,
  ].join(" ");
  const showDropdown = hovered && navItems.find(i => i.label === hovered && i.megaMenu);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubmenuOpen(null);
  };

  const toggleMobileSubmenu = (label) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === label ? null : label);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className={navClasses}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt={`${CompanyConfig.name} Logo`} />
            </Link>
          </div>
          
          <button 
            className={styles.hamburger} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={mobileMenuOpen ? styles.hamburgerOpen : ''}></span>
            <span className={mobileMenuOpen ? styles.hamburgerOpen : ''}></span>
            <span className={mobileMenuOpen ? styles.hamburgerOpen : ''}></span>
          </button>

          <ul className={`${styles.navItems} ${styles.desktopNav}`}>
            {navItems.map(item =>
              <li
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => setHovered(item.megaMenu ? item.label : null)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.path ? (
                  <Link className={`${styles.link} ${isActivePath(item.path) ? styles.active : ''}`} to={item.path}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={styles.link}>{item.label}</span>
                )}
                
                {item.megaMenu && hovered === item.label && (
                  <div
                    className={styles.megaWrapper}
                    onMouseEnter={() => setHovered(item.label)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className={styles.megaMenu}>
                      <div className={styles.megaImageCol}>
                        <div className={styles.imageContent}>
                          <h2 className={styles.imageTitle}>Built to Win</h2>
                          <p className={styles.imageDesc}>
                            Transforming business with our future-ready tech solutions. 
                            Get custom products for accelerated digital transformation across industries globally.
                          </p>
                          <img 
                            src={item.megaMenu.image || MEGA_MENU_IMAGE} 
                            alt={`${item.label} solutions`} 
                            className={styles.megaImage} 
                          />
                        </div>
                      </div>

                      <div className={styles.megaContent}>
                        {item.megaMenu.columns.map((col, idx) => (
                          <div className={styles.megaCol} key={idx}>
                            {col.heading && (
                              col.path ? (
                                <Link className={styles.megaHeading} to={col.path}>
                                  {col.heading}
                                </Link>
                              ) : (
                                <div className={styles.megaHeading}>{col.heading}</div>
                              )
                            )}

                            {col.links && (
                              <ul className={styles.megaLinks}>
                                {col.links.map((link, i) => (
                                  <li className={styles.megaLinkRow} key={i}>
                                    <span className={styles.arrow}>&#8250;</span>
                                    <Link className={styles.megaLink} to={link.path}>{link.label}</Link>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {col.desc && (
                              <div className={styles.megaDesc}>{col.desc}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            )}

            <li>
              <Link to="/contact" className={styles.button}>GET A QUOTE</Link>
            </li>
          </ul>

          <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
            <ul className={styles.mobileNavItems}>
              {navItems.map(item => (
                <li key={item.label} className={styles.mobileNavItem}>
                  {item.megaMenu ? (
                    <>
                      <button 
                        className={styles.mobileNavLink}
                        onClick={() => toggleMobileSubmenu(item.label)}
                      >
                        {item.label}
                        <span className={`${styles.mobileArrow} ${mobileSubmenuOpen === item.label ? styles.mobileArrowOpen : ''}`}>
                          &#9662;
                        </span>
                      </button>
                      {mobileSubmenuOpen === item.label && (
                        <div className={styles.mobileSubmenu}>
                          {item.megaMenu.columns.map((col, idx) => (
                            <div key={idx} className={styles.mobileSubmenuSection}>
                              {col.heading && (
                                col.path ? (
                                  <Link className={styles.mobileSubmenuHeading} to={col.path} onClick={toggleMobileMenu}>
                                    {col.heading}
                                  </Link>
                                ) : (
                                  <div className={styles.mobileSubmenuHeading}>{col.heading}</div>
                                )
                              )}
                              {col.links && (
                                <ul className={styles.mobileSubmenuLinks}>
                                  {col.links.map((link, i) => (
                                    <li key={i}>
                                      <Link to={link.path} onClick={toggleMobileMenu} className={styles.mobileSubmenuLink}>
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {col.desc && (
                                <p className={styles.mobileSubmenuDesc}>{col.desc}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      to={item.path} 
                      className={styles.mobileNavLink}
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className={styles.mobileNavItem}>
                <Link to="/contact" className={styles.mobileButton}>GET A QUOTE</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showDropdown && <div className={styles.dropdownOverlay} />}
      {mobileMenuOpen && <div className={styles.mobileOverlay} onClick={toggleMobileMenu} />}
    </>
  );
}