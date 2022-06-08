import Layout from "../../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function ArticleList() {
  const { t } = useTranslation("articles");

  return (
    <Layout pageTitle={t("pageTitle")}>
      <h1>{t("titlePage")}</h1>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "articles",
      ])),
    },
  };
}
