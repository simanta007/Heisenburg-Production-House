import "./Footer.css";

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const IconYouTube = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.46C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
  </svg>
);

const IconVimeo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 7.42c-.09 2-1.5 4.77-4.2 8.28C15 19.38 12.7 21 10.83 21c-1.13 0-2.08-1.04-2.87-3.13L6.22 11.8C5.67 9.71 5.08 8.67 4.46 8.67c-.14 0-.62.29-1.46.86L2 8.33c.92-.81 1.82-1.62 2.7-2.43C5.88 4.83 6.78 4.17 7.4 4.1c1.53-.15 2.47.9 2.83 3.14.38 2.4.65 3.9.8 4.47.44 2 .92 3 1.45 3 .41 0 1.03-.65 1.85-1.94.82-1.3 1.26-2.28 1.3-2.96.12-1.12-.32-1.68-1.3-1.68-.46 0-.94.1-1.44.32.96-3.13 2.78-4.65 5.47-4.57 2 .06 2.94 1.35 2.84 3.52z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span className="mono">© 2026 HEISENBURG PRODUCTION HOUSE</span>
        <span className="mono foot-tagline">We cook videos.</span>
        <div className="foot-soc">
          <a href="#" aria-label="Instagram" className="foot-soc-link">
            <IconInstagram />
            <span>Instagram</span>
          </a>
          <a href="#" aria-label="YouTube" className="foot-soc-link">
            <IconYouTube />
            <span>YouTube</span>
          </a>
          <a href="#" aria-label="Vimeo" className="foot-soc-link">
            <IconVimeo />
            <span>Vimeo</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
