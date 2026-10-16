
function Hero() {
  return (
    <section className="hero" id="signup">
      <div className="hero-content">
        <h1>Invest in everything</h1>

        <p>
          Online platform to invest in stocks, derivatives,
          mutual funds, ETFs, bonds and more.
        </p>

        <a
          href="https://zerodha.com/open-account/"
          className="primary-btn"
          target="_blank"
          rel="noreferrer"
        >
          Sign up for free
        </a>
      </div>

      <div className="hero-image">
        <img
          src="https://zerodha.com/static/images/landing.png"
          alt="Illustration of investment products"
        />
      </div>
    </section>
  );
}

export default Hero;
