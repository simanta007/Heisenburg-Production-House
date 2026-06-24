import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span className="mono">© 2026 HEISENBURG PRODUCTION HOUSE</span>
        <span className="mono">We cook videos.</span>
        <div className="foot-soc">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="YouTube">YouTube</a>
          <a href="#" aria-label="Vimeo">Vimeo</a>
        </div>
      </div>
    </footer>
  );
}
