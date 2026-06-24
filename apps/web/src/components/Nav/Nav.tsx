import { useState } from "react";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <nav>
      <a href="#top" className="brand">
        <span className="dot" />
        HEISENBURG
      </a>
      <div className={`nav-links${open ? " open" : ""}`} id="menu">
        <a className="link" href="#services" onClick={close}>Services</a>
        <a className="link" href="#process" onClick={close}>Process</a>
        <a className="link" href="#work" onClick={close}>Work</a>
        <a className="link" href="#about" onClick={close}>About</a>
        <a className="btn" href="#contact" onClick={close}>Start a project</a>
      </div>
      <button
        className="nav-toggle"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>
    </nav>
  );
}
