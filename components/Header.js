import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          alt={`logo`}
          className={styles.logo}
          src={`/images/logo-lesdrivers.png`}
          width={`70px`}
          height={`70px`}
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
      <Link href="/contact">
        <a> Contact </a>
      </Link>
      <Link href="/reservation">
        <button className={styles.reserver}>Réserver</button>
      </Link>
    </nav>
  );
};

export default Navbar;
