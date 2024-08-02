import React from "react";
import styles from "./index.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to the Home Page</h1>
      <p>You are logged in.</p>
    </div>
  );
}

export default Home;
