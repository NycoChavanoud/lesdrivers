import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import User from "../public/images/user.png";
import LogoFR from "../public/images/fr.png";
import LogoANG from "../public/images/ang.png";
import styles from "../styles/Header.module.css";
import Logo from "../public/images/logo-lesdrivers.png";

const Navbar = () => {
  const [showLinks, setshowLinks] = useState(false);
  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <nav
      className={`${styles.navbar} ${showLinks ? styles.show_menu : "hidden"}`}
    >
      <div className={styles.logocontainer}>
        <Link href="/" className={styles.logoLink}>
          <a>
            <Image
              src={Logo}
              width={60}
              height={60}
              className={styles.logo_img}
              alt="logo"
            />
          </a>
        </Link>
        <ul className={styles.navItems}>
          <li>
            <Link href="/notre_societe" className={styles.navLinks}>
              <a
                className={
                  currentRoute === "/notre_societe"
                    ? styles.active
                    : styles.non_active
                }
              >
                Qui-sommes nous ?
              </a>
            </Link>
          </li>
          <li>
            <Link href="/nos_services" className={styles.navbarlink}>
              <a
                className={
                  currentRoute === "/nos_services"
                    ? styles.active
                    : styles.non_active
                }
              >
                Nos services
              </a>
            </Link>
          </li>
          <li>
            <Link href="/infos_utiles" className={styles.navbarlink}>
              <a
                className={
                  currentRoute === "/infos_utiles"
                    ? styles.active
                    : styles.non_active
                }
              >
                Infos utiles
              </a>
            </Link>
          </li>
          <li>
            <Link href="/faq" className={styles.navbarlink}>
              <a
                className={
                  currentRoute === "/faq" ? styles.active : styles.non_active
                }
              >
                Faq
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navbarlink}>
              <a
                className={
                  currentRoute === "/contact"
                    ? styles.active
                    : styles.non_active
                }
              >
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/reservation" className={styles.navbarlink}>
              <a>
                <button className={styles.reserver}>Reserver</button>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.userIcon}>
        <Link href="/">
          <a>
            <Image
              src={User}
              className={styles.logo_icon}
              alt="user"
              height={40}
              width={40}
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image
              src={LogoFR}
              className={styles.logo_icon2}
              alt="fr"
              height={36}
              width={36}
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Image
              src={LogoANG}
              className={styles.logo_icon3}
              alt="ang"
              height={36}
              width={36}
            />
          </a>
        </Link>
      </div>
      <div className={styles.btnBurger} onClick={handleShowLinks}>
        <span className={styles.burger_Line} />
      </div>
    </nav>
  );
};
export default Navbar;
