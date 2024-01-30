import React from "react";
import aibnbclone from "../assets/portfolio-dev/airbnb-clone.jpg";
import portfoliowebsite from "../assets/portfolio-dev/portfolio-website.jpg";
import Pomodoro from "../assets/portfolio-dev/Pomodoro-app.jpg";
import browser from "../assets/portfolio-dev/In-browser-markdown.jpg";
import API from "../assets/portfolio-dev/REST-Countries-API.jpg";
import Calculator from "../assets/portfolio-dev/Calculator-App.jpg";
import DrumMachine from "../assets/portfolio-dev/Drum-machine.jpg";
import SpaceTourisme from "../assets/portfolio-dev/Space-tourism-website.jpg";
import Random from "../assets/portfolio-dev/Random-quote-app.jpg";
import Projet from "./Projet";

const projets = [
  {
    name: "AIRBNB-CLONE-2023",
    imageUrl: aibnbclone,
    langues: "TAILWIND  TYPESCRIPT  REACT  MONGODB",
  },
  {
    name: "PORTFOLIO",
    imageUrl: portfoliowebsite,
    langues: "TYPESCRIPT  REACT",
  },
  {
    name: "POMODORO APP",
    imageUrl: Pomodoro,
    langues: "TAILWIND  TYPESCRIPT  REACT",
  },
  {
    name: "EDITEUR MARKDOWN",
    imageUrl: browser,
    langues: "TAILWIND  TYPESCRIPT  REACT  MONGODB",
  },
  {
    name: "REST COUNTRIES API",
    imageUrl: API,
    langues: "CSS  TYPESCRIPT  VUE",
  },
  {
    name: "APPLICATION DE CALCULATRICE",
    imageUrl: Calculator,
    langues: "SCSS  TYPESCRIPT  VUE",
  },
  {
    name: "DRUM MACHINE",
    imageUrl: DrumMachine,
    langues: "STYLED  COMPONOENTS  TYPESCRIPT  REACT",
  },
  {
    name: "SITE DE TOURISME DANS L'ESPACE",
    imageUrl: SpaceTourisme,
    langues: "HTML  CSS  TYPESCRIPT",
  },

  {
    name: "RANDOM QUOTE APP",
    imageUrl: Random,
    langues: "TAILWIND  TYPESCRIPT  REACT  MONGODB",
  },
];

function Projets() {
  return (
    <div>
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
    </div>
  );
}

export default Projets;
