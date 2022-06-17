import Layout from "../../components/Layout";
import Trajectform from "../../components/Trajectform";
import styleTransfert from "../../styles/TransfertAeroport.module.css";

export default function TransfertAeroport() {
  return (
    <Layout pageTitle="Transfert aeroport">
      <div className={styleTransfert.transfertContainer}>
        <h1 className={styleTransfert.mainTitle}>Transport aéroport</h1>
        <div className={styleTransfert.transfertFirstSection}>
          <h2 className={styleTransfert.secondTitle}> Combien ça coûte ?</h2>
          <p>
            Le tarif s’applique en fonction du trajet au départ de l’aéroport
            <span className={styleTransfert.gras}>
              {" "}
              jusqu’à la zone géographique de destination
            </span>
          </p>
          <p className={styleTransfert.gras}>
            Pour tout transfert entre{" "}
            <span className={styleTransfert.grasRed}>21h et 6h</span> une
            majoration de <span className={styleTransfert.grasRed}> 15%</span>{" "}
            s’applique.
          </p>
        </div>
        <Trajectform />
      </div>
    </Layout>
  );
}
