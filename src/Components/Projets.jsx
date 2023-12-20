function Projet({ name, imageUrl, langues }) {
  return (
    <>
      <div>
        <div className="images">
          <img className="image_grid" src={imageUrl} alt="" />
        </div>
        <div className="text_projets">
          <h3 className="titre_projet">{name}</h3>
          <div className="text_projet">{langues}</div>
        </div>
      </div>
    </>
  );
}

export default Projet;
