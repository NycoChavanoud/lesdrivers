import styleLocation from "../styles/LocaAvecChauffeur.module.css";

export default function ButtonConfirmationCourseAndLoca({ logo, title, data }) {
  return (
    <div className={styleLocation.buttonContainer}>
      <div className={logo}></div>
      <div className={styleLocation.ensembleTexte}>
        <p className={styleLocation.title}>{title}</p>
        <p className={styleLocation.data}>{data}</p>
      </div>
    </div>
  );
}
