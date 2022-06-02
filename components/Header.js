import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="nav-container">
        <div className="nav-div">
          <Link href="/">
            <a className="nav-logo">The Drivers HEADER</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
