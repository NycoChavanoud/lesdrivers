import Layout from "../../components/Layout";
import Image from "next/image";
import PhoneButton from "../../components/PhoneButton.js";
import style from "../../styles/infosUtiles.module.css";
import covid from "../../public/images/covid.webp";
import metro from "../../public/images/metro.webp";
import train from "../../public/images/train.webp";
import minibus from "../../public/images/minibus.webp";
import uber from "../../public/images/uber.webp";
import aeroport from "../../public/images/aeroport.webp";
import sky from "../../public/images/sky.webp";
import beujalois from "../../public/images/beujalois.webp";
import terminal from "../../public/images/terminal.webp";
import lyon from "../../public/images/lyon.webp";

export default function infos_utiles() {
  return (
    <Layout pageTitle="Les Drivers - Infos utiles">
      <PhoneButton />
      <h1 className={style.mainTitle}>
        Infos <span className={style.redText}>Utiles</span>
      </h1>
      <h3 className={style.mainText}>
        Si vous avez des questions, envoyez-nous un message et nous vous
        répondrons dans
        <span className={style.blueText}> les plus brefs délais.</span>
      </h3>
      <div className={style.covidContainer}>
        <div className={style.title}>
          Infos <span className={style.blueText}> COVID-19</span>
        </div>

        <div className={style.covidDiv}>
          <div className={style.ButtPrestaWrapper}>
            <div>
              <h1 className={style.title}>
                Les mesures mises en places pour
                <span className={style.redText}> votre sécurité</span>
              </h1>
            </div>

            <div className={style.covidImage}>
              <Image
                src={covid}
                width={300}
                height={200}
                className={style.covid}
                alt="bgLines"
              />
            </div>

            <div className={style.covidText1}>
              <ul className={style.covidList}>
                <li className={style.covidListItems}>
                  Nous avons installé des barrières de protection type plexiglas
                  entre l’arrière et l’avant de nos véhicules.
                </li>
                <li>
                  Les véhicules sont aérés et nettoyés entre chaque course (nous
                  n’enchaînons pas les courses sans un moment de battement)
                </li>
                <li>
                  Nous fournissons un masque et du gel hydro-alcoolique afin que
                  le passager puisse se nettoyer les mains à l’arrivée de son
                  vol.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.covidContainer}>
        <div className={style.title}>
          Se rendre à l&apos;aéroport
          <span className={style.redText}> de Lyon</span>
        </div>

        <div className={style.airportDiv}>
          <div className={style.ButtPrestaWrapper}>
            <div>
              <h1 className={style.title}>
                Comment aller à l’aéroport de
                <span className={style.redText}> Lyon Saint-Éxupery ?</span>
              </h1>
              <h3 className={style.titleText}>
                Vous vous demandez comment rejoindre
                <span className={style.redText}> l’aéroport de Lyon ? </span>
                Évitez le stress des départs en réservant votre trajet auprès de
                nos chauffeurs privés.
                <br /> L’aéroport de Lyon, véritable carrefour de l’Europe de
                l’Ouest, est un endroit très fréquenté par des voyageurs de tout
                horizon et à toute heure de la journée. <br />
                En pleine journée, il est très facile de se rendre jusqu’à
                l’aéroport de
                <span className={style.blueText}> Lyon Saint-Exupéry</span>,
                notamment grâce à nos chauffeurs qui connaissent la route par
                cœur.
              </h3>
            </div>
            <div className={style.covidText}>
              <ul className={style.airportList}>
                <li className={style.airportListItems}>
                  <div className={style.covidImage}>
                    <Image
                      src={aeroport}
                      width={300}
                      height={200}
                      className={style.covid}
                      alt="bgLines"
                    />
                  </div>
                  <div className={style.airportText}>
                    L’aéroport de Lyon Saint-Exupéry est facilement accessible
                    en voiture via l’autoroute A432. Si la circulation est
                    fluide, comptez environ 30 minutes, 55 minutes depuis ou
                    vers Grenoble et Bourg-en-Bresse et une heure pour la
                    liaison avec Chambéry.
                  </div>
                </li>
                <li className={style.airportListItems}>
                  <div className={style.covidImage}>
                    <Image
                      src={terminal}
                      width={300}
                      height={200}
                      className={style.covid}
                      alt="bgLines"
                    />
                  </div>
                  <div className={style.airportText}>
                    Les Drivers Airport ne vous déposent pas seulement à
                    l’aéroport, nous pouvons également vous récupérer à
                    l’arrivée de votre vol. Vous souhaitez être déposés dans le
                    centre-ville de Lyon, aucun souci pour nous, c’est vous qui
                    décidez !
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.covidContainer}>
        <div className={style.title}>
          Les circuits tourisitiques
          <span className={style.blueText}> de Lyon</span>
        </div>

        <div className={style.airportDiv}>
          <div className={style.ButtPrestaWrapper}>
            <div>
              <h1 className={style.title}>
                Les circuits touristiques de
                <span className={style.redText}> Lyon et sa region</span>
              </h1>
              <h3 className={style.titleText}>
                Voici les circuits touristiques que notre équipe
                <span className={style.blueText}> VTC </span>
                vous propose
                <span className={style.redText}> aux alentours de Lyon</span>,
              </h3>
            </div>
            <div className={style.covidText}>
              <ul className={style.airportList}>
                <li className={style.airportListItems}>
                  <div className={style.covidImage}>
                    <Image
                      src={beujalois}
                      width={400}
                      height={300}
                      className={style.covid}
                      alt="bgLines"
                    />
                  </div>
                  <div className={style.airportText}>
                    <span className={style.redText}>Beaujolais:</span> Situé à
                    15 minutes de Lyon, s’étendant jusqu’à Mâcon, la région du
                    Beaujolais abrite de nombreuses surprises, des vignobles
                    pittoresques, une nouvelle vague de jeunes vignerons, ainsi
                    que des bistrots et des chambres d’hôte. La région se divise
                    parfaitement en deux sections. Au nord se trouvent les 10
                    crus célèbres, nommés d’après leur propre village, comme la
                    fleurie, le Morgon, le Chirouble ou le Régnié. Tandis que
                    plus au sud, en dessous de l’imposant Mont Brouilly, vous
                    entrez dans le Beaujolais classique. Vous pourrez y
                    découvrir le pays des « pierres dorées », surnommée la
                    petite Toscane française, des paysages magnifiques avec les
                    villages de pierre et de roches calcaires, teintées par des
                    oxydes de fer… Le temps du déjeuner, profitez d’une pause
                    pour pousser la porte d’un petit restaurant local… La
                    plupart des villages ont des bistrots à l’ancienne où vous
                    pourrez vous régaler de spécialités, comme le saucisson
                    beaujolais, les saucisses mijotées au vin rouge
                  </div>
                </li>
                <li className={style.airportListItems}>
                  <div className={style.covidImage}>
                    <Image
                      src={lyon}
                      width={400}
                      height={300}
                      className={style.covid}
                      alt="bgLines"
                    />
                  </div>
                  <div className={style.airportText}>
                    <span className={style.redText}>Lyon:</span> À été bâtie sur
                    un site exceptionnel qui abrite deux fleuves et deux
                    collines : la colline « qui prie » : Fourvière » et la
                    colline « qui travaille » : la Croix-rousse. Cette dernière
                    est célèbre pour avoir abrité les canuts au 19ᵉ siècle qui
                    étaient les ouvriers de la Soie. De cette période subsistent
                    de magnifiques appartements qui autrefois leur servaient
                    d’ateliers. Ils sont typiques par la hauteur des plafonds,
                    leurs poutres apparentes et leurs murs en pierre. Depuis la
                    Croix-rousse, redescendez vers le quartier de Hôtel de Ville
                    en empruntant le petit train touristique ou en visitant les
                    traboules lyonnaises, ces passages « secrets » permettant de
                    relier une rue à l’autre. N’oublions pas le shopping ! Avec
                    des thématiques aussi variées que la gastronomie avec les
                    Halles Paul Bocuse ou celles du nouvel Hôtel Dieu,
                    magnifiquement rénovées… Des marques de vêtements dans les
                    centres commerciaux de la Part-Dieu ou le Village des
                    Marques de Villefontaine, des créations originales dans les
                    boutiques d’artistes de la Croix rousse…
                  </div>
                </li>
              </ul>
              <li className={style.airportListItems3}>
                <div className={style.covidImage}>
                  <Image
                    src={sky}
                    width={400}
                    height={300}
                    className={style.covid}
                    alt="bgLines"
                  />
                </div>
                <div className={style.airportText3}>
                  <span className={style.redText}>
                    Depuis l’aéroport LYON Saint-Exupéry:
                  </span>{" "}
                  Découvrez le temps d’une journée, d’un weekend ou d’une
                  semaine les charmes d’une région naturelle. L’aéroport
                  Saint-Exupéry est l’aéroport idéal pour atterrir en mode
                  sports d’hiver ! Situé à proximité des Alpes et de la Savoie
                  et à seulement 1 heure de Grenoble. L’aéroport de Lyon est à
                  environ 150 km de grandes stations comme l’Alpe d’Huez ou Les
                  Deux Alpes. Vous serez conduits par l’un de nos chauffeurs dès
                  la descente de l’avion jusqu’à votre destination ! Courchevel,
                  Tignes, Les Arcs, Méribel, La Clusaz, Val d’Isère, La Plagne…
                  N’hésitez pas à consulter notre tableau des tarifs pour
                  choisir votre destination.
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className={style.covidContainer}>
        <div className={style.title}>
          Les avantages <span className={style.blueText}> de Lyon</span>
        </div>

        <div className={style.airportDiv}>
          <div className={style.ButtPrestaWrapper}>
            <div>
              <h1 className={style.title}>
                Les avantages des
                <span className={style.redText}> Drivers airport</span>
              </h1>
              <h3 className={style.titleText}>
                Voici les avantages des
                <span className={style.redText}> VTC </span>
                pour votre Trajet depuis l’aéroport
                <span className={style.blueText}> Lyon Saint-Exupéry</span>,
              </h3>
            </div>
            <div className={style.covidText}>
              <ul className={style.airportList}>
                <li className={style.airportListItems}>
                  <div className={style.covidImage}>
                    <Image
                      src={minibus}
                      width={400}
                      height={300}
                      className={style.covid}
                      alt="bgLines"
                    />
                  </div>
                  <div className={style.airportText}>
                    <span className={style.redText}>Minibus:</span> Faciliter
                    votre voyage en louant un minibus avec chauffeur. Nous
                    pouvons mettre à votre disposition un minibus avec chauffeur
                    de 19 places. Le minibus se révèle aujourd’hui comme la
                    solution la plus adaptée pour se déplacer à plusieurs sur un
                    court ou un long trajet. Aucunes contraintes en termes
                    d’horaires ou d’enregistrement des bagages. e Mercedes
                    Sprinter est le must en termes de confort et d’équipement.
                    L’aménagement intérieur permet un voyage agréable et serein.
                    Le transport de groupes est bien plus agréable quand tous
                    les participants partagent le même véhicule : Votre tribu,
                    collègues ou amis conserveront un très bon souvenir de leur
                    trajet.
                  </div>
                </li>
                <li className={style.airportListItems}>
                  <div className={style.covidImage}>
                    <Image
                      src={train}
                      width={400}
                      height={300}
                      className={style.covid}
                      alt="bgLines"
                    />
                  </div>
                  <div className={style.airportText}>
                    <span className={style.redText}>Le Rhônexpress:</span> À
                    réduit ses amplitudes horaires, le premier départ se fait à
                    05h00 et il n’y a que des départs toutes les 30 minutes. Les
                    horaires du Rhônexpress sont d’autant plus contraignantes
                    pour ceux souhaitant voyager le soir. En effet le dernier
                    départ de l’aéroport se fait à 22h00 ! Ce qui veut dire
                    qu’un passager ayant un vol arrivant après 21h30 risque de
                    devoir prendre un taxi et payer bien plus cher. C’est
                    pourquoi vous pouvez faire confiance à l’équipe des Drivers
                    Airport qui est à votre disposition 24h/24 et 7j/7.
                  </div>
                </li>
              </ul>
              <ul className={style.airportList}>
                <li className={style.airportListItems}>
                  <div className={style.covidImage}>
                    <Image
                      src={uber}
                      width={400}
                      height={300}
                      className={style.covid}
                      alt="bgLines"
                    />
                  </div>
                  <div className={style.airportText}>
                    <span className={style.redText}>Uber:</span> Né en 2009, le
                    pionnier Uber revendique une offre importante avec des
                    centaines de milliers de chauffeurs. La société assure ainsi
                    le traiter les commandes avec un faible temps d’attente. En
                    revanche, la société traite seulement les réservations
                    immédiates. De notre côté, nous sommes partis du constat
                    inverse. Notre équipe locale à Lyon, composée de chauffeurs
                    professionnels mise sur la réservation validée dans un
                    agenda. Notre expérience des trajets aéroport nous montre
                    que ces trajets spécifiques nécessitent de pouvoir compter
                    sur un chauffeur présent à une date et un horaire donné.
                  </div>
                </li>
                <li className={style.airportListItems}>
                  <div className={style.covidImage}>
                    <Image
                      src={metro}
                      width={400}
                      height={300}
                      className={style.covid}
                      alt="bgLines"
                    />
                  </div>
                  <div className={style.airportText}>
                    <span className={style.redText}>Le Rhônexpress:</span> À été
                    beaucoup décrié pour ses niveaux de tarifs onéreux et ses
                    faibles fréquences, aujourd’hui les choses s’améliorent…
                    Cependant, lorsque l’on doit prendre un avion, on doit
                    pouvoir compter sur un mode de transport fiable. Ce qui
                    comprend aussi les ruptures de charge’ entre différents
                    modes de transport en commun ou correspondances. En
                    emprunter les transports en commun pour vous rendre à
                    l’aéroport de Lyon, c’est l’éventuelle possibilité d’arriver
                    trop tard… Voyager avec les Drivers Airport c’est
                    l’assurance de ne pas être sujet à des interruptions de
                    service pour des problèmes de bagages suspects abandonnés ou
                    des soucis de caténaires et vandalisme.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
