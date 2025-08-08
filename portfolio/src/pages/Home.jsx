import React from "react";
import Name from "../components/home/Name";
import Typewriter from "../components/home/Typewriter";
import { initScrollReveal } from "../utils/ScrollReveal";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <main>
      <section
        id="Home"
        className="min-screen bg-gray-950 pb-64"
        aria-labelledby="home-heading"
        tabIndex={-1}
      >
        <header className="w-full">
          <h1 id="home-heading" className="sr-only">
            Home
          </h1>
        </header>
        <Name />
        <Typewriter />
      </section>
    </main>
  );
};

export default Home;
