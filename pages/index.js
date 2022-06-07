import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("home");
  return (
    <Layout pageTitle="Les Drivers Airport">
      <h1>Bienvenue sur la page d&lsquo;accueil Les Drivers Airport</h1>
      <p>{t("description")}</p>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}
