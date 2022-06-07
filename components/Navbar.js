import style from "../styles/Navbar.module.css";
import Link from "next/link";

/* EN SUIVANT CE TUTO : https://www.youtube.com/watch?v=hmoavRdx4YM   et sinon voir : https://www.youtube.com/watch?v=GGkBwpxV7AI     https://www.youtube.com/watch?v=0LjNonKAooM      https://www.youtube.com/watch?v=mt7bcvsreMQ  */
// A FAIRE : METTRE NavLink et coloriser

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul className={style.navbar_links}>
        <li className={style.navbar_link_item}>
          <Link href="/">
            <a className={style.link_nav}>Home</a>
          </Link>
        </li>
        <li className={style.navbar_link_item}>
          <Link href="/contact">
            <a className={style.link_nav}>Contact</a>
          </Link>
        </li>
        <li className={style.navbar_link_item}>
          <Link href="/faq">
            <a className={style.link_nav}>FAQ</a>
          </Link>
        </li>
        <li className={style.navbar_link_item}>
          <Link href="/nos_services">
            <a className={style.link_nav}>Nos Services</a>
          </Link>
        </li>
        <li className={style.navbar_link_item}>
          <Link href="/notre_societe">
            <a className={style.link_nav}>Notre société</a>
          </Link>
        </li>
        <li className={style.navbar_link_item}>
          <Link href="/articles">
            <a className={style.link_nav}>Articles</a>
          </Link>
        </li>
      </ul>
      <button className={style.navbar_bar}>
        <span className={style.nburger_bar}>CLICK</span>
      </button>
    </nav>
  );
}
