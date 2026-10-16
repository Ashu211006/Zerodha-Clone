
function Footer() {
  return (
    <footer className="footer" id="support">
      <a className="logo" href="#">
        ZERODHA
      </a>

      <p>
        A student-built frontend project inspired by Zerodha.
      </p>

      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#pricing">Pricing</a>
        <a href="#support">Support</a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Zerodha Clone — Educational project.
      </p>
    </footer>
  );
}

export default Footer;
