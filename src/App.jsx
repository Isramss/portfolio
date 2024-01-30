import Header from "./Components/Header";
import Skill from "./Components/Skils";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Projets from "./Components/Projets";
import "./App.css";
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
      <Projets />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
