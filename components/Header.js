import Link from "next/link";
import HeaderStyle from "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className="navContainer">
        <Link href="/">
          <a className={HeaderStyle.link}>Home</a>
        </Link>

        <Link href="/contact">
          <a className={HeaderStyle.link}>Contact</a>
        </Link>
        <Link href="/faq">
          <a className={HeaderStyle.link}>FAQ</a>
        </Link>
        <Link href="/nosservices">
          <a className={HeaderStyle.link}>Nos Services</a>
        </Link>
        <Link href="/notresociete">
          <a className={HeaderStyle.link}>Notre société</a>
        </Link>
        <Link href="/articles">
          <a className={HeaderStyle.link}>Articles</a>
        </Link>
      </nav>
    </header>
  );
}
