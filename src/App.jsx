import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Empire from "./pages/Empire";
import Figure from "./pages/Figure";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Battle from "./pages/Battle";
import NotFound from "./pages/NotFound";
import EmpireDetails from "./pages/EmpireDetails";
import FigureDetails from "./pages/FigureDetails";
import BattleDetails from "./pages/BattleDetails";
import Achievements from "./pages/Achievements";

  
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/timeline"
          element={<Timeline />}
        />

        <Route
          path="/empires"
          element={<Empire />}
        />

        <Route
          path="/figures"
          element={<Figure />}
        />

        <Route
          path="/quiz"
          element={<Quiz />}
        />

        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/battles"
          element={<Battle />}
        />
        <Route
          path="/achievements"
          element={<Achievements />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
        <Route
          path="/empires/:id"
          element={<EmpireDetails />}
        />
      <Route
          path="/figures/:id"
          element={<FigureDetails />}
        />
      <Route
          path="/battles/:id"
          element={<BattleDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;