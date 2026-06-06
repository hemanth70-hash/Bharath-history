import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Papa from "papaparse";

import Navbar from "../components/Navbar";

export default function EmpireDetails() {

  const { id } = useParams();

  const [empire, setEmpire] = useState(null);
  const [rulers, setRulers] = useState([]);
  const [battles, setBattles] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {

    Papa.parse("/data/empires.csv", {

      download: true,

      header: true,

      complete: (results) => {

        const foundEmpire =
          results.data.find(
            item => item.id === id
          );

        setEmpire(foundEmpire);
      }

    });

    Papa.parse("/data/rulers.csv", {

      download: true,

      header: true,

      complete: (results) => {

        const filteredRulers =
          results.data.filter(
            ruler =>
              ruler.empire_id === id
          );

        setRulers(filteredRulers);

      }

    });
    Papa.parse("/data/battles.csv", {

  download: true,

  header: true,

  complete: (results) => {

    const filteredBattles =
      results.data.filter(
        battle =>
          battle.empire_id === id
      );

    setBattles(filteredBattles);

  }

});
Papa.parse("/data/history.csv", {

  download: true,

  header: true,

  complete: (results) => {

    const filteredHistory =
      results.data.filter(
        item =>
          item.empire_id === id
      );

    setHistory(filteredHistory);

  }

});

  }, [id]);

  if (!empire) {

    return (
      <>
        <Navbar />

        <section
          style={{
            paddingTop: "140px",
            color: "white",
            textAlign: "center"
          }}
        >
          Loading Empire...
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section
        style={{
          paddingTop: "140px",
          maxWidth: "1200px",
          margin: "auto",
          color: "white"
        }}
      >

        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px"
          }}
        >
          {empire.name}
        </h1>

        <p>
          <strong>Founded By:</strong>
          {" "}
          {empire.founder}
        </p>

        <p>
          <strong>Capital:</strong>
          {" "}
          {empire.capital}
        </p>

        <p>
          <strong>Religion:</strong>
          {" "}
          {empire.religion}
        </p>

        <p>
          <strong>Government:</strong>
          {" "}
          {empire.government}
        </p>

        <p>
          <strong>Period:</strong>
          {" "}
          {empire.start_year}
          {" → "}
          {empire.end_year}
        </p>

        <p
          style={{
            marginTop: "30px",
            lineHeight: "1.8"
          }}
        >
          {empire.description}
        </p>

        <div
          style={{
            marginTop: "70px"
          }}
        >
<div
  style={{
    marginTop: "70px"
  }}
>

  <h2
    style={{
      marginBottom: "30px"
    }}
  >
    📜 Historical Content
  </h2>

  {history.map((item) => (

    <div
      key={item.id}
      style={{
        background:
          "rgba(15,23,42,.65)",

        border:
          "1px solid rgba(255,255,255,.08)",

        borderRadius: "18px",

        padding: "25px",

        marginBottom: "25px"
      }}
    >

      <h3>
        {item.title}
      </h3>

      <p
        style={{
          color: "#d4a24c",
          marginTop: "10px"
        }}
      >
        {item.section}
      </p>

      <p
        style={{
          marginTop: "15px",
          lineHeight: "1.8"
        }}
      >
        {item.content}
      </p>

    </div>

  ))}

</div>
          <h2
            style={{
              marginBottom: "30px"
            }}
          >
            👑 Important Rulers
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(300px,1fr))",
              gap: "25px"
            }}
          >

            {rulers.map((ruler) => (

              <div
                key={ruler.id}
                style={{
                  background:
                    "rgba(15,23,42,.65)",
                  border:
                    "1px solid rgba(255,255,255,.08)",
                  borderRadius: "18px",
                  padding: "25px"
                }}
              >

                <h3>
                  {ruler.name}
                </h3>

                <p>
                  Reign:
                  {" "}
                  {ruler.start_year}
                  {" → "}
                  {ruler.end_year}
                </p>

                <p>
                  {ruler.description}
                </p>

                <p
                  style={{
                    marginTop: "10px",
                    color: "#d4a24c"
                  }}
                >
                  {ruler.achievements}
                </p>

              </div>

            ))}

          </div>

        </div>
<div
  style={{
    marginTop: "80px"
  }}
>

  <h2
    style={{
      marginBottom: "30px"
    }}
  >
    ⚔ Important Battles
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(320px,1fr))",
      gap: "25px"
    }}
  >

    {battles.map((battle) => (

      <div
        key={battle.id}
        style={{
          background:
            "rgba(15,23,42,.65)",
          border:
            "1px solid rgba(255,255,255,.08)",
          borderRadius: "18px",
          padding: "25px"
        }}
      >

        <h3>
          {battle.name}
        </h3>

        <p>
          <strong>Year:</strong>
          {" "}
          {battle.year}
        </p>

        <p>
          <strong>Location:</strong>
          {" "}
          {battle.location}
        </p>

        <p>
          <strong>Winner:</strong>
          {" "}
          {battle.winner}
        </p>

        <p>
          <strong>Loser:</strong>
          {" "}
          {battle.loser}
        </p>

        <p
          style={{
            marginTop: "10px"
          }}
        >
          {battle.description}
        </p>

        <p
          style={{
            marginTop: "15px",
            color: "#d4a24c"
          }}
        >
          {battle.importance}
        </p>

      </div>

    ))}

  </div>

</div>

      </section>
    </>
  );
}