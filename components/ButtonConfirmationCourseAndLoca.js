import styleLocation from "../styles/LocaAvecChauffeur.module.css";

export default function ButtonConfirmationCourseAndLoca({
  logo,
  title,
  data,
  nameData,
}) {
  return (
    <div className={styleLocation.buttonContainer}>
      <div className={logo}></div>
      <div className={styleLocation.ensembleTexte} name={nameData}>
        <p className={styleLocation.title}>{title}</p>
        <input className={styleLocation.data} placeholder={data} />
      </div>
    </div>
  );
}
