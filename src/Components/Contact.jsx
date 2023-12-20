function Contact() {
  return (
    <>
      <div className="box_contact">
        <div className="text_contact">
          <h1>Contact</h1>
          <p className="para_box">
            J'aimerais connaître votre projet et savoir comment je pourrais vous
            aider. je pourrais vous aider. Remplissez le formulaire et je vous
            répondrai dès que possible. dans les plus brefs délais.
          </p>
          <img
            className="demi-cercle_left"
            src="src/assets/icons/demi-cercle_left.svg.svg"
            alt=""
          />
        </div>
        <div className="form_box">
          <form>
            <label for="name" />
            <input type="text" placeholder="NAME" required />
            <label for="email" />
            <input type="text" placeholder="EMAIL" required />
            <textarea id="story" name="story" rows="5" cols="33"></textarea>
          </form>
          <button className="btn_envoyer">Envoyer</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
