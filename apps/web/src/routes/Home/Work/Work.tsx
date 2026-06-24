import { useReveal } from "../../../hooks/useReveal.ts";
import "./Work.css";

const frames = [
  { badge: "FILM", kind: "WEDDING", title: "Cinematic Wedding Films" },
  { badge: "FILM", kind: "BRAND", title: "Brand & Commercial" },
  { badge: "EDIT", kind: "EVENT", title: "Event Coverage" },
  { badge: "EDIT", kind: "SOCIAL", title: "Reels & Shorts" },
];

function Frame({ badge, kind, title }: { badge: string; kind: string; title: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="frame reveal">
      <span className="badge">{badge}</span>
      <div className="meta">
        <div className="k mono">{kind}</div>
        <div className="t">{title}</div>
      </div>
    </div>
  );
}

export default function Work() {
  const headRef = useReveal();

  return (
    <section id="work">
      <div className="wrap">
        <div ref={headRef} className="sec-head reveal">
          <span className="eyebrow">04 — Selected work</span>
          <h2>The reel.</h2>
          <p>A taste of what we shoot and cut. Full showreel landing soon.</p>
        </div>
        <div className="reel">
          {frames.map((f) => (
            <Frame key={f.kind} {...f} />
          ))}
        </div>
        <p className="reel-note">
          // Showreel in production — get in touch for samples in the meantime.
        </p>
      </div>
    </section>
  );
}
