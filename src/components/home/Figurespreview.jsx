import React from "react";
import { Link } from "react-router-dom";

import "../../styles/FiguresPreview.css";

export default function FiguresPreview() {

  const figures = [
    {
      name: "Chanakya",
      role: "Scholar & Strategist"
    },
    {
      name: "Aryabhata",
      role: "Mathematician & Astronomer"
    },
    {
      name: "Gautama Buddha",
      role: "Founder of Buddhism"
    },
    {
      name: "Mahavira",
      role: "Jain Tirthankara"
    },
    {
      name: "Kalidasa",
      role: "Classical Poet"
    },
    {
      name: "Xuanzang",
      role: "Chinese Traveler"
    }
  ];

  return (

    <section className="figures-section">

      <h2 className="section-title">
        Historical Figures
      </h2>

      <div className="figures-grid">

        {figures.map((figure, index) => (

          <div
            key={index}
            className="figure-card"
          >

            <div className="figure-avatar">
              {figure.name.charAt(0)}
            </div>

            <h3>
              {figure.name}
            </h3>

            <p>
              {figure.role}
            </p>

            <Link
              to="/figures"
              className="explore-btn"
            >
              Explore
            </Link>

          </div>

        ))}

      </div>

    </section>

  );
}