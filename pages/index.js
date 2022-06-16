import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ResaChauf from "../components/ResaChauffeur";
import Prestation from "../components/Prestations";
import Caroussel from "../components/Caroussel";
import WelcomeSection from "../components/WelcomeSection";
import ImageTopSection from "../components/ImageTopSection";
import PhoneButton from "../components/PhoneButton";
import styleWelcomeSection from "../styles/WelcomeSection.module.css";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <Layout pageTitle={t("pageTitle")}>
      <ImageTopSection />
      <PhoneButton />
      <div className={styleWelcomeSection.positionSectionHome}>
        <WelcomeSection />
        <ResaChauf />
        <Prestation />
        <Caroussel />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header", "home"])),
    },
  };
}
