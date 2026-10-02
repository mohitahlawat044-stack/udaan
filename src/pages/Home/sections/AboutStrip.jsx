import { CalendarDays, Lightbulb, UsersRound, ArrowUpRight } from 'lucide-react';
import './AboutStrip.css';

export default function AboutStrip({ image }) {
  return (
    <section className="about-strip">
      <div className="container about-grid">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img
            src={image}
            alt="Luxury event experience"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-copy">

          <div className="about-eyebrow">
            <span></span>
            <p>ABOUT UDAAN EVENTS</p>
          </div>

          <h2>
            MORE THAN AN EVENT.
            <br />
            <em>IT'S YOUR MOMENT.</em>
          </h2>

          <p className="about-description">
            Every celebration has its own story. We combine thoughtful
            planning, creative concepts and seamless coordination to shape
            that story into an experience that feels considered from the
            first detail to the final goodbye.
          </p>

          <div className="about-line"></div>

          {/* THREE FEATURES */}
          <div className="highlights">

            {/* 01 */}
            <div className="highlight-card">
              <span className="highlight-number">01</span>

              <div className="highlight-icon">
                <CalendarDays size={28} strokeWidth={1.5} />
              </div>

              <h3>
                THOUGHTFUL
                <br />
                PLANNING
              </h3>

              <p>
                Every detail is planned
                <br />
                with purpose.
              </p>
            </div>

            {/* 02 */}
            <div className="highlight-card">
              <span className="highlight-number">02</span>

              <div className="highlight-icon">
                <Lightbulb size={30} strokeWidth={1.5} />
              </div>

              <h3>
                CREATIVE
                <br />
                DIRECTION
              </h3>

              <p>
                Fresh ideas that bring
                <br />
                your vision to life.
              </p>
            </div>

            {/* 03 */}
            <div className="highlight-card">
              <span className="highlight-number">03</span>

              <div className="highlight-icon">
                <UsersRound size={29} strokeWidth={1.5} />
              </div>

              <h3>
                SEAMLESS
                <br />
                EXECUTION
              </h3>

              <p>
                Flawless coordination
                <br />
                from start to finish.
              </p>
            </div>

          </div>

          {/* BUTTON */}
          <a href="/about" className="discover-link">
            <span>DISCOVER UDAAN</span>
            <ArrowUpRight size={19} strokeWidth={1.5} />
          </a>

        </div>
      </div>
    </section>
  );
}