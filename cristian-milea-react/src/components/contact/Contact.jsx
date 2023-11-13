import Footer from "../footer/Footer";
import Heading from "../heading/Heading";
import Nav from "../nav/Nav";

// eslint-disable-next-line react/prop-types
function Contact({ contactRef }) {
  return (
    <>
      <Nav />
      <section ref={contactRef} className="contact ">
        <Heading>Contact</Heading>
        <form
          className="contact__form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="be6eeaf9-8feb-4de2-be37-79c3273c0ada"
          />

          <label htmlFor="name">Nume:</label>
          <input
            className="contact__form--input name-input"
            type="text"
            id="name"
            required
            autoComplete="off"
          />

          <label htmlFor="email">Email:</label>
          <input
            className="contact__form--input email-input"
            type="email"
            id="email"
            required
            autoComplete="off"
          />

          <label htmlFor="message">Mesaj:</label>
          <textarea
            className="contact__form--input"
            id="message"
            required
            autoComplete="off"
          ></textarea>
          <button className="submit-btn" type="submit">
            Trimite
          </button>
        </form>
        <script
          src="https://web3forms.com/client/script.js"
          async
          defer
        ></script>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
