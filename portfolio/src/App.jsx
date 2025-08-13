import React from "react";
import Header from "./components/global/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Footer from "./components/global/Footer"

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <hr className="text-green-600"/>
      <Footer />
    </div>
  );
};

export default App;
