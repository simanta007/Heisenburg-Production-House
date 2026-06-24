import { useReveal } from "../../../hooks/useReveal.ts";
import "./Process.css";

const steps = [
  {
    n: "STEP 01",
    title: "Brief",
    desc: "We learn your story, references, style and deadline — so we cut for what you actually want.",
  },
  {
    n: "STEP 02",
    title: "Shoot / Send",
    desc: "We film on location, or you upload your raw footage. Clear handover, no chaos.",
  },
  {
    n: "STEP 03",
    title: "Edit & grade",
    desc: "Cut, color, sound and motion — assembled into a film that feels cinematic, not generic.",
  },
  {
    n: "STEP 04",
    title: "Deliver",
    desc: "Review, revisions, then final delivery in every format you need — ready to publish.",
  },
];

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="step reveal">
      <div className="n mono">{n}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

export default function Process() {
  const headRef = useReveal();

  return (
    <section
      id="process"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <div ref={headRef} className="sec-head reveal">
          <span className="eyebrow">03 — How it runs</span>
          <h2>From raw to final cut.</h2>
          <p>
            A simple, predictable process whether we're shooting it or just
            editing it.
          </p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <Step key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
