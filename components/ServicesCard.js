import styleService from "../styles/Services.module.css";

export default function ServicesCard({
  titreService1,
  titreService2,
  contenuService,
  style,
}) {
  return (
    <div className={style}>
      <div className={styleService.titleService}>
        {titreService1}
        <br />
        {titreService2}
      </div>
      <div className={styleService.descriptionService}>
        <p>{contenuService}</p>
        <button className={styleService.buttonService}>
          Accéder au service
        </button>
      </div>
    </div>
  );
}
