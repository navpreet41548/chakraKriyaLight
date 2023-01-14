import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import styles from "./header.module.css";
import { Squash as Hamburger } from "hamburger-react";

const Header = () => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = [
    { display: "HOME", path: "/#home" },
    { display: "ABOUT", path: "/#about" },
    { display: "REVIEWS", path: "/#review" },
    { display: "COURSES", path: "/#courses" },
    { display: "CONTACT", path: "/#contact" },
  ];

  const removeClass = () => {
    setIsOpen(false);
    menuRef.current.classList.remove(`${styles.transformMenu}`);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    menuRef.current.classList.toggle(`${styles.transformMenu}`);
  };

  return (
    <nav id="nav" className={styles.nav}>
      {isOpen && <div className={styles.overlay} onClick={removeClass}></div>}
      <div className={styles.left}>
        {/* <Image
          alt="logo"
          width={500}
          height={500}
          src="/images/logo3.png"
          className={styles.logoImg}
        /> */}
        <div className={styles.logoImg}></div>
        <h2 className={styles.logoText}>CHAKRA KRIYA</h2>
      </div>
      <ul className={styles.center} ref={menuRef}>
        {NavLinks.map((item, i) => (
          <li key={i} className={styles.list}>
            <Link
              scroll={false}
              href={item.path}
              className={styles.link}
              onClick={removeClass}
            >
              {item.display}
            </Link>
          </li>
        ))}
        <button className={`${styles.button} ${styles.buttonCenter}`}>
          LOGIN
        </button>
      </ul>
      <div className={styles.right}>
        <button className={styles.button}>LOGIN</button>
      </div>
      <div className={styles.burger} onClick={toggleMenu}>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          rounded
          color="#383838"
        />
        {/* <Hamburger rounded color="#fff" /> */}
      </div>
    </nav>
  );
};

export default Header;
