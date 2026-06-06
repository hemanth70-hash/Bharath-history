import React from "react";
import "../../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          Journey Through
          <span> 5000 Years </span>
          of Indian History
        </h1>

        <p>
          Explore civilizations, empires, rulers,
          battles and historical figures through
          interactive timelines and visual learning.
        </p>

        <button>
          Start Learning
        </button>

      </div>
    </section>
  );
}