import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div>
          <h5 className={styles.footerTitle}>Nous contacter</h5>
          <div className={styles.footerContact}>&#9990; +33 7 27 45 70 66 </div>
          <div className={styles.footerContact}>
            &#9993; contact@lesdrivers-airport.fr
          </div>

          <div className={styles.socialIcons}>
            <div className={styles.image}>
              <div className={styles.icons}>
                <Link href="/">
                  <a>
                    <Image
                      src="/icons/facebook.png"
                      alt="facebook"
                      width={20}
                      height={20}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.icons}>
              <Link href="/">
                <a>
                  <Image
                    src="/icons/instagram.png"
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.icons}>
              <Link href="/">
                <a>
                  <Image
                    src="/icons/linkedin.png"
                    alt="linkedin"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </div>
            <div className={styles.icons}>
              <Link href="/">
                <a>
                  <Image
                    src="/icons/whatsapp.png"
                    alt="Whatsapp"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h5 className={styles.footerTitle}>Plan du site</h5>
          <div className={styles.links}>
            <Link href="/reservation">
              <a>Réservation</a>
            </Link>
            <div>
              <Link href="/mentionlegale">
                <a>Mentions légales</a>
              </Link>
            </div>
            <div>
              <Link href="/cgps">
                <a>Plan du site</a>
              </Link>
            </div>
            <div>
              <Link href="/pconfidentialite">
                <a>Politique de confidentialité</a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h5 className={styles.footerTitle}>Mentions legales</h5>
          <div className={styles.links}>
            <div>
              <Link href="/commandes">
                <a>Commandes</a>
              </Link>
            </div>
            <div>
              <Link href="/Mes informations">
                <a>Politique de confidentialite</a>
              </Link>
            </div>
            <div>
              <Link href="/newsletter">
                <a>Newsletter</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logo}>
        <Image
          alt={`logo`}
          className={styles.logo}
          src={`/images/logo-lesdrivers.png`}
          width={`70px`}
          height={`70px`}
        ></Image>
        <p className={styles.logoText}>Voyager en toute sécurité</p>
      </div>
    </div>
  );
}
