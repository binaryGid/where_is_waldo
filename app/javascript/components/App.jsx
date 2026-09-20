import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import styles from "../../assets/stylesheets/App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
    </div>
  );
}
