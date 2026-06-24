import { useTimecode } from "../../../hooks/useTimecode.ts";
import "./Hero.css";

export default function Hero() {
  const tc = useTimecode();

  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid reveal in">
        <div className="slate mono">
          <span>HEISENBURG PRODUCTION HOUSE</span>
          <span>·</span>
          <span>CYPRUS</span>
          <span>·</span>
          <span className="tc">SCENE 01 — TAKE 01</span>
        </div>
        <h1 className="title">
          We&nbsp;cook
          <br />
          <span className="em">videos.</span>
        </h1>
        <p className="lede">
          A Cyprus-based film house that takes a project from{" "}
          <b>first frame to final cut</b> — we shoot, we edit, we deliver. You
          stay behind the story; we handle the rest.
        </p>
        <div className="hero-cta">
          <a className="btn" href="#contact">
            Start a project
          </a>
          <a className="btn ghost" href="#services">
            See what we cook ↓
          </a>
        </div>
      </div>
      <div className="corner-tc">
        <span className="rd" />
        REC <span>{tc}</span>
      </div>
    </header>
  );
}
