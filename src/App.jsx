import Header from "./Components/Header";
import Skill from "./Components/Skils";
import Projet from "./Components/Projets";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";

const projets = [
  {
    name: "AIRBNB-CLONE-2023",
    imageUrl: "src/assets/portfolio-dev/airbnb-clone-2023-360e5996.jpg.jpg",
    langues: "TAILWIND  TYPESCRIPT  REACT  MONGODB",
  },
  {
    name: "PORTFOLIO",
    imageUrl:
      "src/assets/portfolio-dev/Section → portfolio-website-5e5ff6dc.jpg.jpg",
    langues: "TYPESCRIPT  REACT",
  },
  {
    name: "POMODORO APP",
    imageUrl:
      "src/assets/portfolio-dev/Section → Pomodoro-app-bdd41802.jpg.jpg",
    langues: "TAILWIND  TYPESCRIPT  REACT",
  },
  {
    name: "EDITEUR MARKDOWN",
    imageUrl:
      "src/assets/portfolio-dev/Section → In-browser-markdown-editor-5dffac4c.jpg.jpg",
    langues: "TAILWIND  TYPESCRIPT  REACT  MONGODB",
  },
  {
    name: "REST COUNTRIES API",
    imageUrl:
      "src/assets/portfolio-dev/Section → REST-Countries-API-3c61139c.jpg.jpg",
    langues: "CSS  TYPESCRIPT  VUE",
  },
  {
    name: "APPLICATION DE CALCULATRICE",
    imageUrl:
      "src/assets/portfolio-dev/Section → Calculator-App-671f73d2.jpg.jpg",
    langues: "SCSS  TYPESCRIPT  VUE",
  },
  {
    name: "DRUM MACHINE",
    imageUrl: "src/assets/portfolio-dev/Drum-machine-39e3fb93.jpg.jpg",
    langues: "STYLED  COMPONOENTS  TYPESCRIPT  REACT",
  },
  {
    name: "SITE DE TOURISME DANS L'ESPACE",
    imageUrl: "src/assets/portfolio-dev/Space-tourism-website-2d4e3d9a.jpg.jpg",
    langues: "HTML  CSS  TYPESCRIPT",
  },

  {
    name: "RANDOM QUOTE APP",
    imageUrl:
      "src/assets/portfolio-dev/Section → Random-quote-app-6953f22c.jpg.jpg",
    langues: "TAILWIND  TYPESCRIPT  REACT  MONGODB",
  },
];

function App() {
  return (
    <>
      <Header />
      <Skill />
      <img
        className="demi-cercle_right"
        src="src/assets/icons/demi-cercle.svg"
        alt=""
      />
      <div className="title_andBtn">
        <h1 className="titre_p">Projet</h1>
        <button className="btn_contact">CONTACTEZ MOI</button>
      </div>

      <div className="grid">
        {projets.map((projet, index) => {
          return (
            <Projet
              key={index}
              name={projet.name}
              imageUrl={projet.imageUrl}
              langues={projet.langues}
            />
          );
        })}
      </div>

      <Contact />
      <Footer />
    </>
  );
}

export default App;
