import Link from "next/link";
import HeaderStyle from "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className="navContainer">
        <Link href="/">
          <a className={HeaderStyle.link}>Home</a>
        </Link>
        <Link href="/articles">
          <a className={HeaderStyle.link}>Articles</a>
        </Link>
      </nav>
    </header>
  );
}
