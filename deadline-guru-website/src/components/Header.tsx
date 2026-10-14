import Link from "next/link";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
        <a className="nav-cta" href="https://wa.me/918309629331" target="_blank" rel="noreferrer">Talk to us <span>↗</span></a>
      </div>
    </header>
  );
}