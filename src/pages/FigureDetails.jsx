import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";

import Navbar from "../components/Navbar";
import "../styles/Empire.css";

export default function FigureDetails() {

  const { id } = useParams();

  const [figure, setFigure] = useState(null);

  useEffect(() => {

    Papa.parse("/data/figures.csv", {

      download: true,

      header: true,

      complete: (results) => {

        const selectedFigure =
          results.data.find(
            item => item.id === id
          );

        setFigure(selectedFigure);

      }

    });

  }, [id]);

  if (!figure) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Navbar />

      <section className="empire-page">

        <h1 className="empire-title">
          {figure.name}
        </h1>

        <p className="empire-subtitle">
          {figure.category}
        </p>

        <div className="empire-page-card">

          <h3>Basic Information</h3>

          <p>
            <strong>Birth:</strong>
            {" "}
            {figure.birth_year}
          </p>

          <p>
            <strong>Death:</strong>
            {" "}
            {figure.death_year}
          </p>

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

        </div>

        <div
          className="empire-page-card"
          style={{
            marginTop: "30px"
          }}
        >

          <h3>Biography</h3>

          <p>
            {figure.description}
          </p>

        </div>

        <div
          className="empire-page-card"
          style={{
            marginTop: "30px"
          }}
        >

          <h3>Historical Importance</h3>

          <p>
            {figure.importance}
          </p>

        </div>

      </section>

    </>
  );
}