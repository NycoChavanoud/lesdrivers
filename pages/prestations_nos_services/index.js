import styles from "../../styles/prestations_nos_services.module.css";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function NosServices() {
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
            <button type="button" className={styles.btn}>
              <Link href="/signup" passHref>
                Valider
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
