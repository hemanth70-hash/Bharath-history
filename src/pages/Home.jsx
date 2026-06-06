import React from "react";

import HeroSection from "../components/home/HeroSection";
import FeaturedEmpires from "../components/home/FeaturedEmpires";
import TimelinePreview from "../components/home/TimelinePreview";
import Figurespreview from "../components/home/Figurespreview";
import DailyChallenge from "../components/home/DailyChallenge";
import AchievementSection from "../components/home/AchievementSection";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <FeaturedEmpires />

      <TimelinePreview />

      <Figurespreview />

      <DailyChallenge />

      <AchievementSection />
    </>
  );
}