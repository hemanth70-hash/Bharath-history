import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import "../styles/Empire.css";

export default function Empire() {

  const [empires, setEmpires] = useState([]);

  useEffect(() => {

    Papa.parse("/data/empires.csv", {
      download: true,
      header: true,

      complete: (results) => {

        const cleanData =
          results.data.filter(
            empire => empire.name
          );

        setEmpires(cleanData);
      }
    });

  }, []);

  return (
    <>
      <Navbar />

      <section className="empire-page">

        <h1 className="empire-title">
          Empires of India
        </h1>

        <p className="empire-subtitle">
          Explore the greatest kingdoms and empires that shaped Indian history.
        </p>

        <div className="empire-grid-page">

          {empires.map((empire) => (

            <div
              key={empire.id}
              className="empire-page-card"
            >

              <div
                className="empire-accent"
                style={{
                  background:
                    empire.color || "#d4a24c"
                }}
              />

              <h2>{empire.name}</h2>

              <span className="empire-period">
                {empire.start_year}
                {" → "}
                {empire.end_year}
              </span>

              <p>
                <strong>Capital:</strong> {empire.capital}
              </p>

              <p>
                <strong>Founder:</strong> {empire.founder}
              </p>

              <p>
                <strong>Religion:</strong> {empire.religion}
              </p>

              <p>
                <strong>Government:</strong> {empire.government}
              </p>

              <p className="empire-description">
                {empire.description}
              </p>

              <Link
                to={`/empires/${empire.id}`}
                className="explore-btn"
              >
                Explore Empire
              </Link>

            </div>

          ))}

        </div>

      </section>
    </>
  );
}