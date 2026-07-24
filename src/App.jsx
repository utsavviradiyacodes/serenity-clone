import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import PrayerRhythm from "./components/sections/PrayerRhythm";
import About from "./components/sections/About";
import Practices from "./components/sections/Practices";
import UpcomingRetreats from "./components/sections/UpcomingRetreats";
import SacredSpaces from "./components/sections/SacredSpaces";
import SpiritualDirectors from "./components/sections/SpiritualDirectors";
import Testimonials from "./components/sections/Testimonials";
import JourneyCTA from "./components/sections/JourneyCTA";
import Footer from "./components/layout/Footer";

const THEME_KEY = "serenity-theme";

function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "dark") {
    return true;
  }

  if (savedTheme === "light") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function App() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  function toggleTheme() {
    setIsDark((prevIsDark) => {
      const nextIsDark = !prevIsDark;

      localStorage.setItem(THEME_KEY, nextIsDark ? "dark" : "light");

      return nextIsDark;
    });
  }

  return (
    <main className="font-sans">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <Hero />
      <PrayerRhythm />
      <About />
      <Practices />
      <UpcomingRetreats />
      <SacredSpaces />
      <SpiritualDirectors />
      <Testimonials />
      <JourneyCTA />
      <Footer />
    </main>
  );
}

export default App;
