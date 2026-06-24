import { useReveal } from "../../../hooks/useReveal.ts";
import "./About.css";

const facts = [
  { v: "Concept → Cut", l: "Fully managed production" },
  { v: "Cyprus", l: "Local crew, on the ground" },
  { v: "Studio-grade", l: "Dedicated post-production team" },
  { v: "One contact", l: "No agency runaround" },
];

export default function About() {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section
      id="about"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="wrap">
        <div className="about-grid">
          <div ref={leftRef} className="reveal">
            <span className="eyebrow">05 — Who we are</span>
            <h2 className="about-h2">A small house with a big kitchen.</h2>
            <p>
              Heisenburg is a Cyprus-based production house built on one idea:
              clients want the <b>finished film</b>, not the headache of
              producing it. So we run the whole kitchen — direction, shooting,
              editing, color and sound — and you get a result that looks like it
              cost a lot more than it did.
            </p>
            <p>
              We pair <b>local shooting in Cyprus</b> with a dedicated
              post-production team, which means cinematic quality, predictable
              turnarounds, and a single person who actually answers your
              messages.
            </p>
          </div>
          <div ref={rightRef} className="facts reveal">
            {facts.map((f) => (
              <div className="fact" key={f.v}>
                <div className="v">{f.v}</div>
                <div className="l">{f.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
