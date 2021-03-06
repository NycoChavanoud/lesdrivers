import HeaderResa from "../styles/ResaChauffeur.module.css";

export default function texteResa({ phrase1, phrase2, classe, linkTo }) {
  return (
    <div className={classe} onClick={linkTo}>
      <h1>{phrase1}</h1>
      <h1 className={HeaderResa.new}>{phrase2}</h1>
    </div>
  );
}
