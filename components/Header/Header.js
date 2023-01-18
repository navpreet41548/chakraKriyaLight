import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import { Squash as Hamburger } from "hamburger-react";
import Form from "../elements/Form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateForm } from "../../store/formSlice";

const Header = () => {
  const formState = useSelector((state) => state.formSlice);
  const [isVisible, setIsVisible] = useState();
  const [register, setRegister] = useState();
  const dispatch = useDispatch();

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

  const handleClick = () => {
    removeClass();
    dispatch(updateForm({ register: false, visible: true }));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    menuRef.current.classList.toggle(`${styles.transformMenu}`);
  };

  useEffect(() => {
    setIsVisible(formState.form.visible);
    setRegister(formState.form.register);
  }, [formState]);

  return (
    <nav id="nav" className={styles.nav}>
      {isVisible && <Form register={register} />}
      {isOpen && <div className={styles.overlay} onClick={removeClass}></div>}
      <div className={styles.left}>
        {/* <Image
          alt="logo"
          width={500}
          height={500}
          src="/images/logo3.png"
          className={styles.logoImg}
        /> */}
        {/* <div className={styles.logoImg}> */}
        <Image
          className={styles.logoImg}
          src={"/images/logo/logo.png"}
          width={100}
          height={100}
          alt="Logo"
        />
        {/* </div> */}
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
        <Link
          href="https://academy.chakrakriya.org/login"
          className={`${styles.button} ${styles.buttonCenter}`}
          // onClick={handleClick}
        >
          LOGIN
        </Link>
      </ul>
      <div className={styles.right}>
        <Link
          href="https://academy.chakrakriya.org/login"
          className={styles.button}
          // onClick={handleClick}
        >
          LOGIN
        </Link>
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
