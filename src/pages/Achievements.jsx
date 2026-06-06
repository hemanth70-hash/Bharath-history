import React from "react";

import Navbar from "../components/Navbar";

export default function Achievements() {

  const achievements =
    JSON.parse(
      localStorage.getItem(
        "achievements"
      )
    ) || [];

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

        <h1>
          🏆 Achievements
        </h1>

        {

          achievements.length === 0

          ?

          <p>
            No achievements unlocked yet.
          </p>

          :

          achievements.map(
            (item,index) => (

              <div
                key={index}
                style={{
                  background:
                    "rgba(15,23,42,.65)",

                  padding:
                    "20px",

                  borderRadius:
                    "15px",

                  marginTop:
                    "15px"
                }}
              >

                {item}

              </div>

            )
          )

        }

      </section>

    </>

  );
}