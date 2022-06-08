import Layout from "../components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation("home");
  const router = useRouter();

  return (
    <Layout pageTitle={t("pageTitle")}>
      <h1> {t("h1")} </h1>
      <p>{t("description")}</p>
      <Link href="/" locale={router.locale === "fr" ? "en" : "fr"}>
        <button>{t("change-locale")}</button>
      </Link>
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
