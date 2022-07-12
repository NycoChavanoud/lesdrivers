import styles from "../../styles/prestations_nos_services.module.css";
import map from "../../public/images/maplyon2.webp";
import { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function NosServices() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Layout pageTitle="prestations_nos_services">
      <div className={styles.mainContainer}>
        <div className={styles.bgImage} />
        <h1 className={styles.mainTitle}>
          Combien ça <span className={styles.titleColor}>coute ?</span>
        </h1>
        <p className={styles.top_text}>
          Le tarif s’applique en fonction du trajet au départ de l’aéroport
          <span className={styles.bold_text}>
            {" "}
            jusqu’à la zone géographique de destination.
          </span>
        </p>
        <p className={styles.top_text}>
          Pour tout transfert de nuit une
          <span className={styles.bold_text}> majoration</span> s’applique:
        </p>
        <p className={styles.top_text}>
          <span className={styles.titleColor2}>15% </span>supplémentaire entre
          <span className={styles.titleColor2}> 21h00 et 06h00 du matin</span>
        </p>
        <div className={styles.calculator_container}>
          <div className={styles.bg_calculator}>
            <h3 className={styles.calculator_text}>
              Veuillez indiquer vorte ville pour estimer et réserver votre
              chauffeur:
            </h3>
            <h3 className={styles.calculator_text2}>Votre ville</h3>
            <form>
              <div className={styles.dropdown}>
                <div
                  className={styles.dropdown_btn}
                  onClick={() => setIsActive(!isActive)}
                >
                  Choissisez votre ville
                  <span className={styles.spans}></span>
                </div>
                {isActive && (
                  <div className={styles.dropdown_content}>
                    <div className={styles.dropdown_item}>Bron</div>
                    <div className={styles.dropdown_item}>Caluire-et-Cuire</div>
                    <div className={styles.dropdown_item}>Décines</div>
                    <div className={styles.dropdown_item}>La Mulatière</div>
                    <div className={styles.dropdown_item}>Lyon</div>
                    <div className={styles.dropdown_item}>Meyzieu</div>
                    <div className={styles.dropdown_item}>
                      Neuville-sur-Saône
                    </div>
                    <div className={styles.dropdown_item}>Décines-Charpieu</div>
                    <div className={styles.dropdown_item}>Feyzin</div>
                    <div className={styles.dropdown_item}>Lyon</div>
                    <div className={styles.dropdown_item}>Rillieux-la-Pape</div>
                    <div className={styles.dropdown_item}>Oullins</div>
                    <div className={styles.dropdown_item}>Villeurbanne</div>
                    <div className={styles.dropdown_item}>Vaulx-en-Velin</div>
                    <div className={styles.dropdown_item}>Vennissieux</div>
                  </div>
                )}
              </div>
              <button type="button" className={styles.btn}>
                <Link href="/signup" passHref>
                  Valider
                </Link>
              </button>
            </form>
          </div>
        </div>
        <div className={styles.map_container}>
          <div className={styles.map_div}>
            <Image
              src={map}
              width={650}
              height={450}
              className={styles.map_img}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
