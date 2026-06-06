import React from "react";
import { Link } from "react-router-dom";

export default function AchievementSection() {

  const achievements = [

    {
      icon: "🏺",
      title: "Ancient Explorer"
    },

    {
      icon: "📜",
      title: "Mauryan Scholar"
    },

    {
      icon: "👑",
      title: "History Master"
    }

  ];

  return (

    <section className="achievement-section">

      <h2 className="section-title">
        Achievements
      </h2>

      <div className="achievement-grid">

        {achievements.map((item, index) => (

          <div
            key={index}
            className="achievement-card"
          >

            <div className="achievement-icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

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
          to="/achievements"
          className="explore-btn"
        >
          View All Achievements
        </Link>

      </div>

    </section>

  );
}