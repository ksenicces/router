import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from './App.module.css';

const Wrapper = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <NavLink to="/users" className={styles.link}>Users</NavLink>
      <NavLink to="/albums" className={styles.link}>Albums</NavLink>
    </header>
    <Outlet />
    <footer className={styles.footer}>
      <span>Yurchuk Kseniya</span>
      <span> BSU 2024</span>
    </footer>
  </div>
);

export default Wrapper;