import { ArrowUpRight } from 'lucide-react';
import './Approach.css';

const steps = [
  [
    '01',
    'IMAGINE',
    'Start with the feeling, purpose and story behind the event.',
  ],
  [
    '02',
    'PLAN',
    'Translate the vision into a clear, practical experience plan.',
  ],
  [
    '03',
    'EXECUTE',
    'Bring the moving parts together with calm, detailed coordination.',
  ],
];

export default function Approach() {
  return (
    <section className="approach">

      <div className="container">

        <div className="approach-head">

          <div>
            <span className="eyebrow">
              OUR APPROACH
            </span>

            <h2 className="section-heading">
              FROM FIRST IDEA
              <br />
              TO FINAL <span className="gold">DETAIL.</span>
            </h2>
          </div>

          <p className="approach-intro">
            A thoughtful process that turns an initial idea into
            a clear, beautifully considered event experience.
          </p>

        </div>


        <div className="approach-grid">

          {steps.map(([number, title, description]) => (
            <article
              className="approach-card"
              key={number}
            >

              <div className="approach-card-top">

                <span className="approach-number">
                  {number}
                </span>

                <span className="approach-small-line"></span>

              </div>


              <div className="approach-content">

                <h3>{title}</h3>

                <p>{description}</p>

              </div>


              <div className="approach-bottom">

                <span className="approach-line"></span>

                <span className="approach-arrow">
                  <ArrowUpRight size={17} />
                </span>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}