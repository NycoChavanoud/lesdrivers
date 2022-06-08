import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <Layout pageTitle={t("pageTitle")}>
      <h1>{t("titre")}</h1>
      <p>{t("description")}</p>
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
