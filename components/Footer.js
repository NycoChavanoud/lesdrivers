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
          <div className={styles.footerContact}>
            &#9990; + 33 4 69 96 60 80{" "}
          </div>
          <div className={styles.footerContact}>
            &#9993; contact@navette-aeroport-lyon.fr
          </div>

          <div className={styles.socialIcons}>
            <div className={styles.image}>
              <div className={styles.icons}>
                <Link href="/">
                  <a>
                    <Image
                      src="/images/oveus.png"
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
                    src="/images/frlangue.png"
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
                    src="/images/traxion.png"
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
                    src="/images/ebv.png"
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
            <Link href="/newslatter">
              <a>Newslatter</a>
            </Link>
            <div>
              <Link href="/mentionlegale">
                <a>Mentions légales</a>
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
                <a>Réservation</a>
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
          width={`80px`}
          height={`80px`}
        ></Image>
        <p className={styles.logoText}>
          All Rights Reserved To The Drivers Airport
        </p>
      </div>
    </div>
  );
}
