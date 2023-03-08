import React from "react";
import Button from "../Button/Button";
import Hero from "../Hero/Hero";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search placeholder="Search a song of your choice" />
      <Button>Give Feedback</Button>
      <Hero />
    </div>
  );
}

export default Navbar;
