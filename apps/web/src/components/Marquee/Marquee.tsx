import "./Marquee.css";

const items = [
  "Wedding Films",
  "Brand Films",
  "Events",
  "Reels & Shorts",
  "Color Grading",
  "Cinematic Edits",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="strip">
      <div className="strip-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
