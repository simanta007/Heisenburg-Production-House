import { useReveal } from "../../../hooks/useReveal.ts";
import "./Services.css";

export default function Services() {
  const headRef = useReveal();
  const track1Ref = useReveal();
  const track2Ref = useReveal();
  const also1Ref = useReveal();
  const also2Ref = useReveal();

  return (
    <section id="services">
      <div className="wrap">
        <div ref={headRef} className="sec-head reveal">
          <span className="eyebrow">02 — What we cook</span>
          <h2>Two ways to work with us.</h2>
          <p>
            Need the whole thing handled? Take the full-production track.
            Already shooting and just buried in post? Hand us the footage.
          </p>
        </div>

        <div className="tracks">
          <div ref={track1Ref} className="track reveal">
            <span className="tag">End-to-end</span>
            <h3>Full Production</h3>
            <p className="desc">
              Concept to final cut, fully managed. We plan it, our crew shoots
              it, our editors grade and cut it. One team, one point of contact,
              zero headache for you.
            </p>
            <ul>
              <li>Wedding &amp; event films</li>
              <li>Brand &amp; commercial films</li>
              <li>On-location shooting in Cyprus</li>
              <li>Direction, edit, color &amp; sound</li>
            </ul>
            <div className="who">
              For couples, brands and businesses who want the finished film, not
              the process.
            </div>
            <a className="cta" href="#contact">
              Start a project →
            </a>
          </div>

          <div ref={track2Ref} className="track reveal">
            <span className="tag">Post-production only</span>
            <h3>Video Editing</h3>
            <p className="desc">
              Already shot it? Send us the raw footage and get back a cinematic
              edit on a predictable turnaround. Built for studios and creators
              who'd rather be behind the camera than stuck in a timeline.
            </p>
            <ul>
              <li>Wedding &amp; highlight edits</li>
              <li>Short-form: reels, shorts, ads</li>
              <li>Color grading &amp; sound mix</li>
              <li>White-label for other studios</li>
            </ul>
            <div className="who">
              For videographers and studios who shoot plenty but run out of
              editing hours.
            </div>
            <a className="cta" href="#contact">
              Send us your footage →
            </a>
          </div>
        </div>

        <div className="also">
          <div ref={also1Ref} className="also-card reveal">
            <div>
              <span className="sm-tag">Also available</span>
              <h4>Digital Marketing</h4>
              <p>
                Great video deserves an audience. We help brands grow online —
                social content, paid ads, web and content strategy — so the work
                doesn't just look good, it sells.
              </p>
            </div>
            <a href="#contact">Ask what we can do</a>
          </div>
          <div ref={also2Ref} className="also-card reveal">
            <div>
              <span className="sm-tag">New</span>
              <h4>AI Automation</h4>
              <p>
                The newest thing we cook. Simple automations that hand business
                owners back their time — bookings, follow-ups and lead handling,
                quietly running in the background.
              </p>
            </div>
            <a href="#contact">Book a free intro call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
