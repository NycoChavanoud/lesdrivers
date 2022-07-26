import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function footer() {
  return (
    <div className={styles.containerDiv}>
      <div className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.footerDiv1}>
            <h5 className={styles.footerTitle}>Nous contacter</h5>
            <div className={styles.footerContact}>
              &#9990; + 33 4 69 96 60 80{" "}
            </div>
            <div className={styles.footerContact}>
              &#9990; + 33 7 82 75 25 36{" "}
            </div>
            <div className={styles.footerContact}>
              &#9993; contact@navette-aeroport-lyon.fr
            </div>
          </div>
          <div className={styles.footerDivs}>
            <h5 className={styles.footerTitle}>Nos partenaires</h5>
            <div className={styles.socialIcons}>
              <div className={styles.image}>
                <div className={styles.icons}>
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/oveus.png"
                        alt="oveus"
                        width={40}
                        height={40}
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
                      alt="frlangue"
                      width={40}
                      height={40}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.icons}>
                <Link href="/">
                  <a>
                    <Image
                      src="/images/traxion.png"
                      alt="traxion"
                      width={40}
                      height={40}
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
                      width={40}
                      height={40}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <Image
            alt={`logo`}
            className={styles.footerLogo}
            src={`/images/logo-lesdrivers.png`}
            width={80}
            height={80}
          />
          <p className={styles.logoText}>
            © All Rights Reserved To The Drivers Airport 2022
          </p>
        </div>
      </div>
    </div>
  );
}
