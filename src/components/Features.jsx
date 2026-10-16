
const features = [
  {
    title: "Stocks",
    description: "Invest in companies and build your equity portfolio."
  },
  {
    title: "Mutual Funds",
    description: "Explore mutual funds and invest for your future."
  },
  {
    title: "Futures & Options",
    description: "Explore derivatives markets with the tools you need."
  }
];

function Features() {
  return (
    <>
      <section className="features" id="products">
        <h2>Investment options for everyone</h2>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="info-section" id="about">
        <h2>Investing made simple</h2>
        <p>
          A clean and responsive interface designed to help users
          explore investment products in one place.
        </p>
      </section>

      <section className="info-section pricing-section" id="pricing">
        <h2>Simple, transparent pricing</h2>
        <p>
          Explore the pricing information and charges on Zerodha's
          official website before investing.
        </p>
        <a
          className="primary-btn"
          href="https://zerodha.com/pricing/"
          target="_blank"
          rel="noreferrer"
        >
          View official pricing
        </a>
      </section>
    </>
  );
}

export default Features;
