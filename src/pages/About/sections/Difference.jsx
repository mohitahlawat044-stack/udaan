import {
  Lightbulb,
  HeartHandshake,
  Search,
  Layers3,
  ArrowUpRight,
} from 'lucide-react';

import './Difference.css';

import difference1 from '../../../assets/images/difference-1-creative-thinking.png';
import difference2 from '../../../assets/images/difference-2-personalized-planning.png';
import difference3 from '../../../assets/images/difference-3-attention-to-detail.png';
import difference4 from '../../../assets/images/difference-4-seamless-execution.png';

const data = [
  {
    number: '01',
    title: 'CREATIVE THINKING',
    text: 'We look for the idea that gives an event its own character.',
    image: difference1,
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'PERSONALIZED PLANNING',
    text: 'The plan begins with your priorities, not a fixed package.',
    image: difference2,
    icon: HeartHandshake,
  },
  {
    number: '03',
    title: 'ATTENTION TO DETAIL',
    text: 'Small choices shape how the whole occasion feels.',
    image: difference3,
    icon: Search,
  },
  {
    number: '04',
    title: 'SEAMLESS EXECUTION',
    text: 'Clear coordination keeps the experience moving naturally.',
    image: difference4,
    icon: Layers3,
  },
];

export default function Difference() {
  return (
    <section className="difference editorial">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="difference-head">

          <span className="eyebrow">
            WHAT MAKES UDAAN DIFFERENT
          </span>

          <h2 className="section-heading">
            THOUGHTFUL BY DESIGN.
            <br />
            <span className="gold">
              PERSONAL IN EVERY DETAIL.
            </span>
          </h2>

        </div>


        {/* CARDS */}
        <div className="difference-grid">

          {data.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="difference-card"
                key={item.number}
              >

                {/* IMAGE */}
                <div className="difference-image">

                  <img
                    src={item.image}
                    alt={`${item.title} event planning`}
                  />

                  <div className="difference-image-overlay"></div>

                  {/* NUMBER */}
                  <span className="difference-number">
                    {item.number}
                  </span>

                </div>


                {/* ICON */}
                <div className="difference-icon">
                  <Icon
                    size={27}
                    strokeWidth={1.5}
                  />
                </div>


                {/* CONTENT */}
                <div className="difference-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>


                {/* BOTTOM */}
                <div className="difference-bottom">

                  <span className="difference-line"></span>

                  <span className="difference-arrow">
                    <ArrowUpRight size={19} />
                  </span>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}