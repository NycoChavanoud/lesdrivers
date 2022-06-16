import Link from "next/link";
import HeaderStyle from "../styles/Header.module.css";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// FROM MUI (for the select translation):
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function Header() {
  const { t } = useTranslation("header");
  const router = useRouter();

  const onSelectChange = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, {
      locale,
      scroll: false,
    });
  };

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
        <Link href="/transfert_aeroport">
          <a className={HeaderStyle.link}>Transfert aeroport</a>
        </Link>
        <select
          name="languages"
          id="language-select"
          onChange={onSelectChange}
          value={router.locale}
          data-cy="translate-button"
        >
          {router.locales.map((language, index) => (
            <option value={language} key={index}>
              {language === "en" ? "🇬🇧" : language === "fr" ? "🇫🇷" : null}
            </option>
          ))}
        </select>
        <Select
          // sx={{ border: 0 }}
          name="languages"
          id="language-select"
          value={router.locale}
          label="Languages"
          onChange={onSelectChange}
          data-cy="translate-button"
        >
          {router.locales.map((language, index) => (
            <MenuItem value={language} key={index}>
              {language === "en" ? "🇬🇧" : language === "fr" ? "🇫🇷" : null}
            </MenuItem>
          ))}
        </Select>
      </nav>
    </header>
  );
}
