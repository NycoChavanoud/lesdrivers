import Image from "next/image";
import Layout from "../../components/Layout";
import logo from "../../public/images/logo-lesdrivers.png";
import binh from "../../public/images/binh.png";
import amr from "../../public/images/amr.png";
import maxime from "../../public/images/maxime.jpg";
import tayeb from "../../public/images/tayeb.jpg";
import magid from "../../public/images/magid.jpg";
import styles from "../../styles/nosServices.module.css";

export default function NosServices() {
  return (
    <Layout pageTitle="Les Drivers - Nos Services">
      <div className={styles.mainContainer}>
        <div className={styles.bgImage} />
        <Image
          src={logo}
          width={100}
          height={100}
          className={styles.logo}
          alt="bgLines"
        />
        <h1 className={styles.mainTitle}>
          Qui sommes <span className={styles.titleColor}>nous ?</span>
        </h1>
        <p className={styles.top_text}>
          Nous sommes un réseau de chauffeurs privés indépendants à Lyon,
          originaires de la ville et ayant travaillés dans différents services
          et compagnies.
        </p>
      </div>
      <div className={styles.photo_container}>
        <h2 className={styles.photo_title}>Les services comme vocation</h2>
        <div className={styles.photo_divs}>
          <Image
            src={binh}
            width={450}
            height={350}
            className={styles.logo_img}
            alt="logo"
          />
          <div className={styles.description_div}>
            <h2 className={styles.name_title}>BINH</h2>
            <p className={styles.name_description}>
              Le spécialiste du transport aérien. De par mon expérience de 20
              ans acquise au sein du groupe Air France, je suis passionné par le
              secteur du transport et du tourisme en général, j’apprécie
              particulièrement les échanges et de partager les atouts de ma
              région
            </p>
          </div>
        </div>
        <div className={styles.photo_divs}>
          <div className={styles.photo_ameur}>
            <Image
              src={amr}
              width={450}
              height={350}
              className={styles.logo_ameur}
              alt="logo"
            />
          </div>

          <div className={styles.description_div}>
            <h2 className={styles.name_title}>AMEUR</h2>
            <p className={styles.name_description}>
              L’adjudant chef. Après avoir exercé une quinzaine d’années à
              l’aéroport comme agent de piste et de régulation, j’ai choisi de
              m’orienter vers un métier de service qui me convient. Aujourd’hui,
              je ne guide plus les avions vers leur parking mais je conduis les
              passagers vers leur terminal de départ. J’apprécie le contact
              humain et de revêtir mon costume chaque matin ! Dans le civil,
              j’aime le calme de la vie à la campagne et écouter de la musique
              classique.
            </p>
          </div>
        </div>
        <div className={styles.photo_divs}>
          <Image
            src={magid}
            width={450}
            height={350}
            className={styles.logo_img}
            alt="logo"
          />
          <div className={styles.description_div}>
            <h2 className={styles.name_title}>MAGID</h2>
            <p className={styles.name_description}>
              Le doyen de l’équipe et jeune papa. J’ai aussi exercé une
              quinzaine d’années à l’aéroport comme chauffeur de bus et
              chauffeur de la navette Satobus, j’ai une grande expérience du
              transport sous ses différentes formes. Et pourtant à la base, j’ai
              une formation de cuisinier et exercé 7 ans en gastronomie
              traditionnelle, ce qui m’a inculqué une grande rigueur et un sens
              de l’effort qui sont toujours utiles !
            </p>
          </div>
        </div>
        <div className={styles.photo_divs}>
          <Image
            src={tayeb}
            width={450}
            height={350}
            className={styles.logo_img}
            alt="logo"
          />
          <div className={styles.description_div}>
            <h2 className={styles.name_title}>TAYEB</h2>
            <p className={styles.name_description}>
              Le spécialiste du transport aérien. De par mon expérience de 20
              ans acquise au sein du groupe Air France, je suis passionné par le
              secteur du transport et du tourisme en général, j’apprécie
              particulièrement les échanges et de partager les atouts de ma
              région
            </p>
          </div>
        </div>
        <div className={styles.photo_divs}>
          <Image
            src={maxime}
            width={450}
            height={350}
            className={styles.logo_img}
            alt="logo"
          />
          <div className={styles.description_div}>
            <h2 className={styles.name_title}>MAXIME</h2>
            <p className={styles.name_description}>
              Le gestionnaire de l’équipe. C’est moi qui suis chargé de réguler
              les réservations et la bonne marche au quotidien de l’activité.
              Mon expérience acquise au sein des sapeurs-pompiers volontaires me
              permet de gérer cette gymnastique !
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
