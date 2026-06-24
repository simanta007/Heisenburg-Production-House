import { useEffect, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function useTimecode() {
  const [tc, setTc] = useState("00:00:00:00");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const id = setInterval(() => {
      frame++;
      const fr = frame % 24;
      const s = Math.floor(frame / 24) % 60;
      const m = Math.floor(frame / 1440) % 60;
      const h = Math.floor(frame / 86400) % 24;
      setTc(`${pad(h)}:${pad(m)}:${pad(s)}:${pad(fr)}`);
    }, 1000 / 24);

    return () => clearInterval(id);
  }, []);

  return tc;
}
