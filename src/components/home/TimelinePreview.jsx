import React from "react";
import { Link } from "react-router-dom";

import "../../styles/TimelinePreview.css";

export default function TimelinePreview() {

  const events = [

    {
      year: "3300 BCE",
      title: "Indus Valley Civilization"
    },

    {
      year: "1500 BCE",
      title: "Vedic Age"
    },

    {
      year: "322 BCE",
      title: "Mauryan Empire"
    },

    {
      year: "320 CE",
      title: "Gupta Empire"
    }

  ];

  return (

    <section className="timeline-section">

      <h2 className="section-title">
        Timeline Preview
      </h2>

      <div className="timeline-container">

        {events.map((event, index) => (

          <div
            className="timeline-item"
            key={index}
          >

            <div className="timeline-dot" />

            <div className="timeline-card">

              <span className="timeline-year">
                {event.year}
              </span>

              <h3>
                {event.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px"
        }}
      >

        <Link
          to="/timeline"
          className="explore-btn"
        >
          View Full Timeline
        </Link>

      </div>

    </section>

  );
}