import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import your CSS module for styling
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link to={"/"} className={styles.logo}>Vigyaan Portal</Link>
        <ul className={styles.navLinks}>
          <li style={{ marginTop: "2%" }}>
            <Link to="/prototype" className={styles.navItem}>Prototypes</Link>
          </li>
          <li style={{ marginTop: "2%" }}>
            <Link to="/about" className={styles.navItem}>About Us</Link>
          </li>
          <li style={{ marginTop: "2%" }}>
            <Link to="/contact" className={styles.navItem}>Contact Us</Link>
          </li>
          <li style={{ position: 'relative' }}>
            <Link to="#" className={styles.navItem} onClick={toggleDropdown}>
              <CgProfile style={{ height: "5vh", width: "5vw" }} />
            </Link>
            <div className={`${styles.dropdownMenu} ${dropdownVisible ? styles.show : ''}`}>
              <Link to="/login" className={styles.dropdownItem}>Login </Link>
              <Link to="/signup" className={styles.dropdownItem}>Signup</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;