import Layout from "../../components/Layout";
import styleFAQ from "../../styles/faq.module.css";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "Quels sont les horaires du Rhône Express ? ",
      content:
        "Le Rhône Express dessert la gare TGV de l’aéroport Saint-Exupéry depuis Lyon Part-Dieu. <br/><br/>La navette a réduit ses horaires récemment : <br/>Le premier départ se fait à 05h00 <br/> - Le dernier départ de l’aéroport se fait à 22h00 <br/> - Il y a des départs toutes les 30 minutes <br/><br/>Un passager ayant un vol arrivant après 21h30 risque de devoir prendre un taxi et payer bien plus cher. De plus, le fait d’attendre 30 minutes entre chaque passage peut considérablement augmenter votre temps de trajet. ",
    },
    {
      title: "Comment réserver un chauffeur ?",
      content:
        "Vous pouvez réserver une navette en quelques clics sur Drivers Airport ou en nous appelant directement au 07 82 75 25 36. Des conseillers dédiés vous répondront.<br/>Vous pouvez alors prendre rendez-vous et vous recevrez par mail une confirmation de votre réservation.<br/>La navigation facile sur notre site vous permet de réserver vous-même votre navette en choisissant votre créneau et le lieu de destination. <br/>De la même manière vous recevez e-mail pour confirmer la réservation de votre chauffeur.",
    },
    {
      title: "Comment retrouver mon chauffeur",
      content:
        "Une fois arrivé à l’aéroport, vous récupérez vos bagages. Vous voulez maintenant récupérer votre chauffeur préalablement réservé. <br/><br/>C’est dès cet instant que nous prenons soin de vous, notre chauffeur vous attend au terminal d’arrivée avec un panneau lumineux nominatif. Vous le retrouvez alors sans aucun souci. Vous êtes pris en charge dès la sortie de l’avion jusqu’au pied de votre porte.",
    },
    {
      title: "Comment être sûr de ne pas rater mon vol ?",
      content:
        "Vous avez réservé votre chauffeur sur notre site. Vous avez reçu un e-mail de confirmation de votre réservation. Il est par contre normal si vous avez réservé longtemps avant, que vous soyez inquiet pour votre transport, ou que vous pensiez que l’on vous oublie ! <br/><br/>Heureusement votre réservation est bien notée dans nos services. De votre côté, vous recevez un e-mail de confirmation 24 h avant votre départ, récapitulant toutes les informations concernant votre trajet à venir. De plus, le chauffeur vous contacte 10 minutes avant son arrivée par SMS pour vous avertir. Vous êtes alors rassuré. ",
    },
    {
      title: "Comment régler ma course ?",
      content:
        "Nous vous offrons plusieurs possibilités pour payer votre course. Vous pouvez payer en espèce ou par carte bancaire une fois arrivé à destination avec le chauffeur.<br/><br/>Il est également possible de payer en avance, si vous demandez un RIB, ou pour des groupes.<br/><br/> Votre paiement suivra votre course dans votre dossier, ainsi si vous avez payé en ligne, votre chauffeur ne vous demandera pas de payer à la fin de la course.",
    },
    {
      title: "Puis-je annuler ma course ?",
      content:
        "Vous avez réservé une course sur Drivers Airport, malheureusement pour une raison, peu importe laquelle, vous ne pouvez plus l’honorer…<br/><br/>Prévenez-nous le plus rapidement possible par téléphone ou par email. Votre course est annulée et aucuns frais n’est appliqué.",
    },
    {
      title: "Puis je emmener mes enfants avec moi? Même petit ?",
      content:
        "Nous mettons tout en œuvre pour que vous puissiez voyager avec nous.<br/><br/>Il suffit de nous spécifier le nombre de personnes, et de bagages que vous avez à l’arrivée ou au départ, et nous nous adaptons.<br/><br/>Nous avons donc des sièges autos pour emmener des enfants, même petits, et sans surplus sur le prix !",
    },
    {
      title: "Des frais supplémentaires sont-ils être appliqués de nuit ? ",
      content:
        "Oui la nuit les prix de base sont majorés de 15 %, entre 21 heures et 6 heures.",
    },
    {
      title: "Si mon avion a du retard, mon chauffeur va t'il m'attendre ?",
      content:
        "Le prix donné lors de la réservation est fixe, et maintenu même lors d’un retard. Car ce sont des évènements qui sont indépendants de votre volonté.<br/><br/>La seule condition ou le prix pourra augmenter, est le moment où le chauffeur attend et que l’arrivée en retard passera en tarif de nuit.",
    },
  ],
};

const styles = {
  bgColor: "white",
  titleTextColor: "#2a2a92",
  rowTitleColor: "#2a2a92",
  rowContentColor: "#000000",
  arrowColor: "red",
};

export default function FAQ() {
  return (
    <Layout pageTitle="Les Drivers - FAQ">
      <div className={styleFAQ.faqMainContainer}>
        <div className={styleFAQ.faqMainTitre}>
          <p className={styleFAQ.title}>
            Vous avez une question ? <br />
            <span>Nous avons la réponse !</span>
          </p>
        </div>
        <div className={styleFAQ.faqContainer}>
          <Faq data={data} styles={styles} />
        </div>
      </div>
    </Layout>
  );
}
