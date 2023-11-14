import Footer from "../footer/Footer";
import Heading from "../heading/Heading";
import Nav from "../nav/Nav";
import styles from "./Contact.module.css";

// eslint-disable-next-line react/prop-types
function Contact() {
  return (
    <>
      <Nav />
      <section className={styles.contact}>
        <Heading style={{ paddingTop: "10px" }}>Contact</Heading>
        <form
          className={styles.contact__form}
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
            className={styles["contact__form--input"]}
            type="text"
            id="name"
            required
            autoComplete="off"
          />

          <label htmlFor="email">Email:</label>
          <input
            className={styles["contact__form--input"]}
            type="email"
            id="email"
            required
            autoComplete="off"
          />

          <label htmlFor="message">Mesaj:</label>
          <textarea
            className={styles["contact__form--input"]}
            id="message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit">Trimite</button>
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
