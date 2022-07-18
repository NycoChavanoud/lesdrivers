import styleLocation from "../styles/LocaAvecChauffeur.module.css";

export default function ButtonConfirmationCourseAndLoca({
  logo,
  title,
  data,
  nameData,
  valueData,
}) {
  return (
    <div className={styleLocation.buttonContainer}>
      <div className={logo}></div>
      <div className={styleLocation.ensembleTexte}>
        <p className={styleLocation.title}>{title}</p>
        <input
          className={styleLocation.data}
          placeholder={data}
          name={nameData}
          defaultValue={valueData}
        />
      </div>
    </div>
  );
}
