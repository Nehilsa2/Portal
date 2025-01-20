
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Import your CSS module for styling
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link to={"/"} className={styles.logo}>Vigyaan Portal </Link>
        <ul className={styles.navLinks}>
          
          <li style={{marginTop:"2%"}}>
            <Link to="/prototype" className={styles.navItem}>Prototypes</Link>
          </li>
          <li style={{marginTop:"2%"}}>
            <Link to="/about" className={styles.navItem}>About Us</Link>
          </li>
          <li style={{marginTop:"2%"}}>
            <Link to="/contact" className={styles.navItem}>Contact Us</Link>
          </li>
          <li>
            <Link to="/admin" className={styles.navItem}>
            <CgProfile style={{height:"5vh",width:"5vw"}}/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;