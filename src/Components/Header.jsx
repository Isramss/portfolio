function Header() {
  return (
    <>
      <div className="header">
        <div className="header_box">
          <h3>François Truchon</h3>
          <div className="icons">
            <img src="src/assets/icons/github.svg" alt="" />
            <img src="src/assets/icons/icon.svg" alt="" />
            <img src="src/assets/icons/Linkedin.svg" alt="" />
            <img src="src/assets/icons/carre.svg" alt="" />
          </div>
        </div>
        <div className="header_box2">
          <img className="cercle1" src="src/assets/icons/cercle.svg" alt="" />
          <h1>
            Enchanté de vous rencontrer <br />
            Je suis <u>François Truchon</u>
          </h1>
          <p className="para">Basé à Paris je suis un développeur Fullstack</p>
          <p className="para2">
            passionné par les applications web & l’accesibilité
          </p>
        </div>

        <button className="btn_contact">CONTACTEZ MOI</button>
      </div>
      <hr />
    </>
  );
}

export default Header;
