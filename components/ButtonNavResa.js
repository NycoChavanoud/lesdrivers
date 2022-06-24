import Link from "next/link";
import HeaderResa from "../styles/ResaChauffeur.module.css";

export default function texteResa({ phrase1, phrase2, classe }) {
  return (
    <Link href="/transfert_aeroport" passHref>
      <div className={classe}>
        <h1>{phrase1}</h1>
        <h1 className={HeaderResa.new}>{phrase2}</h1>
      </div>
    </Link>
  );
}
