import React from "react";
import { Link } from "react-router-dom";

import "../../styles/FeaturedEmpires.css";

export default function FeaturedEmpires() {

  const empires = [

    {
      name: "Mauryan Empire",
      years: "322 BCE - 185 BCE",
      description:
        "First major empire to unify much of India"
    },

    {
      name: "Gupta Empire",
      years: "320 CE - 550 CE",
      description:
        "Golden Age of India"
    },

    {
      name: "Harsha Empire",
      years: "606 CE - 647 CE",
      description:
        "Last great empire of Ancient India"
    }

  ];

  return (

    <section className="featured-section">

      <h2 className="section-title">
        Featured Empires
      </h2>

      <div className="empire-grid">

        {empires.map((empire, index) => (

          <div
            key={index}
            className="empire-card"
          >

            <h3>
              {empire.name}
            </h3>

            <span className="empire-years">
              {empire.years}
            </span>

            <p>
              {empire.description}
            </p>

            <Link
              to="/empires"
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