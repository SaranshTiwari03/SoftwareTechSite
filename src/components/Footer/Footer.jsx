import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { CompanyConfig } from '../../theme/theme';

export default function Footer() {
  const locations = [
    'India'
  ];

  return (
    <>
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <p className={styles.ctaSubtitle}>Have a Project To Discuss?</p>
          <h2 className={styles.ctaTitle}>We're ready!</h2>
          <Link to="/contact" className={styles.ctaButton}>LET'S CONNECT!</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          {/* Main Footer Content */}
          <div className={styles.footerGrid}>
            {/* Services Column */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Services</h3>
              <ul className={styles.linkList}>
                <li><Link to="/services/mobile-app" className={styles.footerLink}>Mobile App Development</Link></li>
                <li><Link to="/services/custom-software" className={styles.footerLink}>Custom Software Development</Link></li>
                <li><Link to="/services/mobile-app/android" className={styles.footerLink}>Android App Development</Link></li>
                <li><Link to="/services/mobile-app/cross-platform" className={styles.footerLink}>Cross Platform App Development</Link></li>
                <li><Link to="/services/web" className={styles.footerLink}>Web Development</Link></li>
                <li><Link to="/services/web/ecommerce" className={styles.footerLink}>Ecommerce Development</Link></li>
                <li><Link to="/services/cloud" className={styles.footerLink}>Cloud Services</Link></li>
                <li><Link to="/services/marketing" className={styles.footerLink}>Digital Marketing</Link></li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Solutions</h3>
              <ul className={styles.linkList}>
                <li><Link to="/industries/automotive" className={styles.footerLink}>Automotive Solutions</Link></li>
                <li><Link to="/industries/healthcare" className={styles.footerLink}>Healthcare Solutions</Link></li>
                <li><Link to="/industries/education" className={styles.footerLink}>Education Solutions</Link></li>
                <li><Link to="/industries/on-demand" className={styles.footerLink}>On-Demand Solutions</Link></li>
                <li><Link to="/industries/ecommerce" className={styles.footerLink}>Ecommerce Solutions</Link></li>
                <li><Link to="/industries/real-estate" className={styles.footerLink}>Real Estate Solutions</Link></li>
                <li><Link to="/industries/fintech" className={styles.footerLink}>Fintech Solutions</Link></li>
                <li><Link to="/industries/saas" className={styles.footerLink}>SaaS Solutions</Link></li>
              </ul>
            </div>

            {/* About Us Column */}
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Company</h3>
              <ul className={styles.linkList}>
                <li><Link to="/insights" className={styles.footerLink}>About {CompanyConfig.name}</Link></li>
                <li><Link to="/portfolio" className={styles.footerLink}>Portfolio</Link></li>
                <li><Link to="/technologies" className={styles.footerLink}>Technologies</Link></li>
                <li><Link to="/industries" className={styles.footerLink}>Industries</Link></li>
                <li><Link to="/contact" className={styles.footerLink}>Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Locations Section */}
          <div className={styles.locationsSection}>
            <h3 className={styles.columnTitle}>Locations</h3>
            <div className={styles.locationsList}>
              {locations.map((location, index) => (
                <React.Fragment key={location}>
                  <span className={styles.locationLink}>
                    {location}
                  </span>
                  {index < locations.length - 1 && <span className={styles.separator}>|</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <a href={`tel:${CompanyConfig.phone}`} className={styles.contactLink}>{CompanyConfig.phone}</a>
              <span className={styles.separator}>|</span>
              <a href={`mailto:${CompanyConfig.email}`} className={styles.contactLink}>{CompanyConfig.email}</a>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className={styles.bottomFooter}>
            <p className={styles.copyright}>© {CompanyConfig.name} 2025. All rights reserved</p>
            
            <div className={styles.legalLinks}>
              <a href={`tel:${CompanyConfig.phone}`} className={styles.legalLink}>Contact Us</a>
            </div>

            {/* Social Media Icons */}
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}