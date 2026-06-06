import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "../styles/Empire.css";

export default function Battle() {

  const [battles, setBattles] =
    useState([]);

  useEffect(() => {

    Papa.parse("/data/battles.csv", {

      download: true,

      header: true,

      complete: (results) => {

        const cleanData =
          results.data.filter(
            battle => battle.name
          );

        setBattles(cleanData);

      }

    });

  }, []);

  return (
    <>
      <Navbar />

      <section className="empire-page">

        <h1 className="empire-title">
          Major Battles of India
        </h1>

        <p className="empire-subtitle">
          Explore the battles that shaped
          Indian history.
        </p>

        <div className="empire-grid-page">

          {battles.map((battle) => (

            <div
              key={battle.id}
              className="empire-page-card"
            >

              <h2>
                ⚔ {battle.name}
              </h2>

              <span
                className="empire-period"
              >
                {battle.year}
              </span>

              <p>
                <strong>
                  Location:
                </strong>
                {" "}
                {battle.location}
              </p>

              <p>
                <strong>
                  Winner:
                </strong>
                {" "}
                {battle.winner}
              </p>

              <p>
                <strong>
                  Loser:
                </strong>
                {" "}
                {battle.loser}
              </p>

              <p
                className="empire-description"
              >
                {battle.description}
              </p>

              <Link
                to={`/battles/${battle.id}`}
                className="explore-btn"
              >
                Explore Battle
              </Link>

            </div>

          ))}

        </div>

      </section>
    </>
  );
}