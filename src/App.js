import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

function App() {
  const [themeClass, setThemeClass] = useState("");

  const themeHandler = () => {
    if (themeClass === "") {
      setThemeClass("dark_theme");
    } else {
      setThemeClass("");
    }
  };
  return (
    <div className={themeClass}>
      <Header themeSwitch={themeHandler} />
      <main className="main">
        <Home />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
