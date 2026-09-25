import React from "react";
import styles from "../../assets/stylesheets/Navbar.module.css";
import { Link, useParams } from "react-router";

function Navbar() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>where&apos;s waldo&iquest;</h1>
      </Link>
    </header>
  );
}

export default Navbar;
