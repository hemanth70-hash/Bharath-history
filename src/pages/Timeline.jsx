import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import "../styles/Timeline.css";

export default function Timeline() {

  const [events, setEvents] = useState([]);

  useEffect(() => {

    Papa.parse("/data/timeline.csv", {
      download: true,
      header: true,
      complete: (results) => {

        const cleanData =
          results.data.filter(
            event => event.year
          );

        setEvents(cleanData);
      }
    });

  }, []);

  return (
    <>
      <Navbar />

      <section className="timeline-page">

        <h1 className="timeline-title">
          Indian History Timeline
        </h1>

        <p className="timeline-subtitle">
          Travel through 5000 years of Indian civilization.
        </p>

        <div className="timeline-container">

          <div className="timeline-line" />

          {events.map((event, index) => (

            <motion.div
              key={index}
              className="timeline-item"
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05
              }}
            >

              <div className="timeline-dot" />

              <div className="timeline-card">

                <h3>
                  {event.year}
                </h3>

                <h4>
                  {event.title}
                </h4>

                <p>
                  {event.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>
    </>
  );
}