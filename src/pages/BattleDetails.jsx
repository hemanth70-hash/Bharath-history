import React,
{
  useEffect,
  useState
}
from "react";

import {
  useParams
}
from "react-router-dom";

import Papa from "papaparse";

import Navbar
from "../components/Navbar";

export default function BattleDetails() {

  const { id } =
    useParams();

  const [battle, setBattle] =
    useState(null);

  useEffect(() => {

    Papa.parse(
      "/data/battles.csv",
      {

        download: true,

        header: true,

        complete:
          (results) => {

            const foundBattle =
              results.data.find(
                item =>
                  item.id === id
              );

            setBattle(
              foundBattle
            );

          }

      }
    );

  }, [id]);

  if (!battle) {

    return (
      <>
        <Navbar />

        <section
          style={{
            paddingTop:
              "140px",
            color:
              "white",
            textAlign:
              "center"
          }}
        >
          Loading Battle...
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section
        style={{
          paddingTop:
            "140px",

          maxWidth:
            "1200px",

          margin:
            "auto",

          color:
            "white"
        }}
      >

        <h1>
          ⚔ {battle.name}
        </h1>

        <p>
          <strong>
            Year:
          </strong>
          {" "}
          {battle.year}
        </p>

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

        <div
          style={{
            marginTop:
              "40px"
          }}
        >

          <h2>
            Description
          </h2>

          <p>
            {battle.description}
          </p>

        </div>

        <div
          style={{
            marginTop:
              "40px"
          }}
        >

          <h2>
            Historical Importance
          </h2>

          <p>
            {battle.importance}
          </p>

        </div>

      </section>
    </>
  );
}