import {
  Lightbulb,
  PenTool,
  SlidersHorizontal,
  GlassWater,
  ArrowUpRight,
} from 'lucide-react';

import './Process.css';

import process1 from '../../../assets/images/process-1.png';
import process2 from '../../../assets/images/process-2.png';
import process3 from '../../../assets/images/process-3.png';
import process4 from '../../../assets/images/process-4.png';


const processData = [
  {
    number: '01',
    title: 'DISCOVER',
    text: 'Understand the event, vision, priorities and practical requirements.',
    image: process1,
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'DESIGN',
    text: 'Build the creative direction, experience and details around the brief.',
    image: process2,
    icon: PenTool,
  },
  {
    number: '03',
    title: 'EXECUTE',
    text: 'Coordinate the moving parts with care, clarity and precision.',
    image: process3,
    icon: SlidersHorizontal,
  },
  {
    number: '04',
    title: 'CELEBRATE',
    text: 'Deliver an experience that feels natural in the moment and memorable afterwards.',
    image: process4,
    icon: GlassWater,
  },
];


export default function Process() {
  return (
    <section className="process">

      <div className="container">

        {/* =========================
            PROCESS HEADER
        ========================= */}

        <div className="process-head">

          <div className="process-heading">

            <span className="eyebrow">
              OUR PROCESS
            </span>

            <h2 className="section-heading">
              FROM IDEA
              <br />
              TO <span>UNFORGETTABLE.</span>
            </h2>

          </div>


          <p className="process-intro">
            A simple, well-defined process designed to turn your
            vision into a seamless and memorable experience.
          </p>

        </div>


        {/* =========================
            PROCESS CARDS
        ========================= */}

        <div className="process-grid">

          {processData.map((item) => {

            const Icon = item.icon;

            return (
              <article
                className="process-card"
                key={item.number}
              >

                {/* IMAGE */}

                <div className="process-image">

                  <img
                    src={item.image}
                    alt={`${item.title} event process`}
                  />

                  <div className="process-image-overlay"></div>


                  {/* NUMBER */}

                  <span className="process-number">
                    {item.number}
                  </span>

                </div>


                {/* ICON */}

                <div className="process-icon">

                  <Icon
                    size={30}
                    strokeWidth={1.4}
                  />

                </div>


                {/* CONTENT */}

                <div className="process-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>


                {/* BOTTOM */}

                <div className="process-bottom">

                  <span className="process-line"></span>

                  <span className="process-arrow">
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