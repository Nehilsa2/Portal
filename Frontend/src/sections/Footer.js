import React from 'react';
import styles from './Footer.module.css';
import Socials from '../components/Socials';
import TCfavicon from "../assets/TCfavicon.jpg";
import Email from '../components/Email';
import BackToTop from '../components/BackToTop';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <h1>Technocracy</h1>
          <img style={{ height: "20vh", marginTop: "4%" }} src={TCfavicon} alt="Logo" />
        </div>
        <div className={styles.footerAddress}>
          <p>GE Road Amanaka, NIT Raipur</p>
          <p>Phone: (Your Phone Number)</p>
          <Email />
        </div>
        <div className={styles.footerLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.footerSocial}>
          <Socials />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div>
          <p>&copy; {new Date().getFullYear()} Technocracy. All rights reserved.</p>
          <p>Site Credits: Your Name or Company</p>
        </div>
        <div className={styles.backToTopContainer}>
          <button onClick={() => window.scrollTo(0, 0)} className={styles.backToTop}>
            <BackToTop />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;