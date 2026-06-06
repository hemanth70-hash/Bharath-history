import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "../styles/Empire.css";

export default function Figure() {

  const [figures, setFigures] = useState([]);

  useEffect(() => {

    Papa.parse("/data/figures.csv", {

      download: true,

      header: true,

      complete: (results) => {

        const cleanData =
          results.data.filter(
            figure => figure.name
          );

        setFigures(cleanData);

      }

    });

  }, []);

  return (
    <>
      <Navbar />

      <section className="empire-page">

        <h1 className="empire-title">
          Historical Figures
        </h1>

        <p className="empire-subtitle">
          Explore the greatest thinkers, rulers,
          scholars, saints and leaders of Indian history.
        </p>

        <div className="empire-grid-page">

          {figures.map((figure) => (

            <div
              key={figure.id}
              className="empire-page-card"
            >

              <div
                className="empire-accent"
                style={{
                  background:
                    "#d4a24c"
                }}
              />

              <h2>
                {figure.name}
              </h2>

              <span className="empire-period">

                {figure.birth_year}

                {" → "}

                {figure.death_year}

              </span>

              <p>
                <strong>Category:</strong>
                {" "}
                {figure.category}
              </p>

              <p>
                <strong>Related Empire:</strong>
                {" "}
                {figure.related_empire}
              </p>

              <p className="empire-description">
                {figure.description}
              </p>

              <Link
                to={`/figures/${figure.id}`}
                className="explore-btn"
              >
                Explore Figure
              </Link>

            </div>

          ))}

        </div>

      </section>
    </>
  );
}