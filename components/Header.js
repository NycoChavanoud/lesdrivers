import Link from "next/link";
import HeaderStyle from "../styles/Header.module.css";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function Header() {
  const { t } = useTranslation("header");
  const router = useRouter();

  return (
    <header>
      <nav className="navContainer" data-cy="navbarCypress">
        <Link href="/">
          <a className={HeaderStyle.link}>{t("home")}</a>
        </Link>

        <Link href="/contact">
          <a className={HeaderStyle.link}>Contact</a>
        </Link>
        <Link href="/faq">
          <a className={HeaderStyle.link}>FAQ</a>
        </Link>
        <Link href="/nos_services">
          <a className={HeaderStyle.link}>{t("Our Services")}</a>
        </Link>
        <Link href="/notre_societe">
          <a className={HeaderStyle.link}>Notre société</a>
        </Link>
        <Link href="/articles">
          <a className={HeaderStyle.link}>Articles</a>
        </Link>
        <Link
          href={router.asPath}
          locale={router.locale === "fr" ? "en" : "fr"}
        >
          <a data-cy="translate-button">
            {router.locale === "fr" ? "🇬🇧" : "🇫🇷"}
          </a>
        </Link>
      </nav>
    </header>
  );
}
