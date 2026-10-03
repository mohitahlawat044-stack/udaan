import { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import './Experiences.css';

export default function Experiences({ images }) {

  const sliderRef = useRef(null);

  const data = [
    [
      'Wedding Experiences',
      images.wedding,
      'Celebrations with atmosphere and detail.'
    ],
    [
      'Corporate Experiences',
      images.corporate,
      'Polished environments built for people and purpose.'
    ],
    [
      'Celebration Experiences',
      images.experience,
      'Personal moments made visually memorable.'
    ],
    [
      'Event Production',
      images.hero,
      'The moving parts behind a seamless experience.'
    ]
  ];


  const slide = (direction) => {

    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const card = slider.querySelector('.experience-card');

    if (!card) return;

    const gap = 10;

    const amount = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction * amount,
      behavior: 'smooth'
    });
  };


  return (
    <section className="experiences section">

      <div className="container">

        {/* =================================
            INTRO
        ================================= */}

        <div className="experience-intro">

          <h2 className="section-heading">
            THE DETAILS
            <br />
            MAKE THE <span className="gold-emphasis">DIFFERENCE.</span>
          </h2>


          <div className="experience-intro-left">

            <div className="experience-intro-label">

              <span className="experience-line"></span>

              <span className="eyebrow">
                OUR EVENT EXPERIENCES
              </span>

            </div>

          </div>

        </div>


        {/* =================================
            SLIDER AREA
        ================================= */}

        <div className="experience-slider-wrap">

          <div
            className="experience-grid"
            ref={sliderRef}
          >

            {data.map(([title, img, text], i) => (

              <article
                className={`experience-card ec${i + 1}`}
                key={title}
              >

                <img
                  src={img}
                  alt={title}
                />

                <div className="experience-overlay"></div>


                <div className="experience-label">

                  <span className="experience-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>


                  <div className="experience-content">

                    <h3>{title}</h3>

                    <p>{text}</p>

                  </div>


                  <button
                    type="button"
                    className="experience-arrow"
                    aria-label={`Open ${title}`}
                  >
                    <ArrowUpRight size={18} />
                  </button>

                </div>

              </article>

            ))}

          </div>


          {/* =================================
              MOBILE SLIDER CONTROLS
          ================================= */}

          <div className="experience-slider-controls">

            <button
              type="button"
              className="experience-slider-btn"
              onClick={() => slide(-1)}
              aria-label="Previous experience"
            >
              <ArrowLeft size={17} />
            </button>


            <div className="experience-slider-dots">
              <span className="active"></span>
              <span></span>
              <span></span>
              <span></span>
            </div>


            <button
              type="button"
              className="experience-slider-btn"
              onClick={() => slide(1)}
              aria-label="Next experience"
            >
              <ArrowRight size={17} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}