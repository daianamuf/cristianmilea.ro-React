/* eslint-disable react/no-unescaped-entities */
function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-section__heading">
        <span>CRISTIAN MILEA </span>
        <span> "The Fastest"</span>
      </h1>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="./src/images/Hero-filtered.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Hero;
