import styleService from "../styles/Services.module.css";

export default function ServicesCard({
  titreService1,
  titreService2,
  contenuService,
  style,
  showService,
  linkTo,
  backgroundDesktopMobile,
}) {
  return (
    <div className={style} onClick={showService}>
      <div className={backgroundDesktopMobile}>
        {titreService1}
        <br />
        {titreService2}
      </div>
      <div className={styleService.descriptionService}>
        <p>{contenuService}</p>
        <button className={styleService.buttonService} onClick={linkTo}>
          Accéder au service
        </button>
      </div>
    </div>
  );
}
