import React from "react";
import { Link } from "react-router-dom";
import styles from './App.module.css';

const NotFound = () => (
  <div>
    <h2 className={styles.notFound1}>404 - Page Not Found</h2>
    <Link className={styles.notFound} to="/">Return to home</Link>
  </div>
);

export default NotFound;