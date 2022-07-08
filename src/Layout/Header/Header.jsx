import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.css";
import logo from "../../Assets/logo.svg";
import MetaGrid from "../../Components/MetaGrid/MetaGrid";

function Header() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [bg, setBg] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className={`${styles.headerCont}  ${bg ? styles.blackBg : ""}`}>
      {modal && <MetaGrid setModal={setModal} />}
      <div className={styles.header}>
        <div
          onClick={() => setOpen(false)}
          className={`${styles.overlay}  ${open ? styles.openOverlay : ""}`}
        ></div>
        <img src={logo} className={styles.logo} alt="" />
        <div
          className={`${styles.rightHeader}  ${open ? styles.openHeader : ""}`}
        >
          <FontAwesomeIcon
            onClick={() => setOpen(false)}
            icon={faXmark}
            className={styles.mobile}
          />
          <a
            onClick={() => setOpen(false)}
            href="#"
            className={styles.navLinks}
          >
            Pre-sale
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#"
            className={styles.navLinks}
          >
            Whitepaper
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#"
            className={styles.navLinks}
          >
            About us
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#"
            className={styles.navLinks}
          >
            Contact us
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#"
            className={styles.navLinks}
          >
            chart
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#"
            className={styles.navLinks}
          >
            buy ptx
          </a>
          <a
            onClick={() => setOpen(false)}
            href="#"
            className={styles.navLinks}
          >
            dex
          </a>
          <button
            onClick={() => {
              setModal(true);
              setOpen(false);
            }}
            className={styles.ctaBtn}
          >
            Connect Wallet
          </button>
        </div>
        <FontAwesomeIcon
          onClick={() => setOpen(true)}
          icon={faBars}
          className={styles.mobile}
        />
      </div>
    </div>
  );
}

export default Header;
