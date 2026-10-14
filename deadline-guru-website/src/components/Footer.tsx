import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-note">From idea to submission — support for your academic journey.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/contact">Contact us</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:8309629331">8309629331</a>
          <a href="tel:9381326651">9381326651</a>
          <a href="https://wa.me/918309629331" target="_blank" rel="noreferrer">WhatsApp us</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Deadline Guru. All rights reserved.</span>
        <span>Academic guidance • Research support • Project mentoring</span>
      </div>
    </footer>
  );
}