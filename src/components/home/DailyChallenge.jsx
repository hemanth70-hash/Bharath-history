import React from "react";
import { Link } from "react-router-dom";

export default function DailyChallenge() {

  return (

    <section className="daily-section">

      <h2 className="section-title">
        Daily Challenge
      </h2>

      <div className="daily-card">

        <div className="challenge-badge">
          ⚔️ DAILY QUEST
        </div>

        <h3>
          Who founded the Mauryan Empire?
        </h3>

        <p>
          Test your knowledge and earn
          achievements by completing
          daily history challenges.
        </p>

        <Link
          to="/quiz"
          className="explore-btn"
        >
          Take Challenge
        </Link>

      </div>

    </section>

  );
}