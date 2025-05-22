import React from "react";
import styles from "../styles/NavBar.css";

const NavBar = () => (
  <header className={styles.navbar}>
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <li><a href="#home">Home</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#guides">Guides</a></li>
      </ul>
      <div className={styles.brand}>RoamReady</div>
      <ul className={styles.navList}>
        <li><a href="#stories">Stories</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default NavBar;