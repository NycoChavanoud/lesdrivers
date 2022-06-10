import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarDiv}>
          <Link href="/">
            <Image
              alt={`logo`}
              className={styles.logo}
              src={`/images/logo-lesdrivers.png`}
              width={`60px`}
              height={`60px`}
            ></Image>
          </Link>
          <Link href="notre_societe">
            <a> Notre société </a>
          </Link>
          <Link href="/nos_services">
            <a> Nos services</a>
          </Link>
          <Link href="/infos-utiles">
            <a> Infos utiles </a>
          </Link>
          <Link href="/faq">
            <a>Faq </a>
          </Link>
          <Link href="/contact">
            <a> Contact </a>
          </Link>
        </div>

        <div className={styles.navbarLogin}>
          <Link href="/user">
            {/* pas encore cree*/}
            <Image
              alt={`user`}
              className={styles.user}
              src={`/images/user.png`}
              width={`30px`}
              height={`30px`}
            ></Image>
          </Link>
          <Link href="/reservation">
            <button className={styles.reserver}>Réserver</button>
          </Link>
          <Image
            alt={`fr`}
            className={styles.logoFr}
            src={`/images/fr.png`}
            width={`30px`}
            height={`30px`}
          ></Image>
          <Image
            alt={`ang`}
            className={styles.logoAng}
            src={`/images/ang.png`}
            width={`30px`}
            height={`30px`}
          ></Image>
          <Link href="/">
            <Image
              alt={`btnBurger`}
              className={styles.btnBurger}
              src={`/images/Buttons menu.png`}
              width={`30px`}
              height={`30px`}
            ></Image>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
