
function Navbar() {
  return (
    <header className="navbar">
      <a className="logo" href="#" aria-label="Zerodha home">
        ZERODHA
      </a>

      <nav className="nav-links">
        <a href="#signup">Signup</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#pricing">Pricing</a>
        <a href="#support">Support</a>
      </nav>
    </header>
  );
}

export default Navbar;
