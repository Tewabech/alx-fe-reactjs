import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    padding: "1rem",
    background: "#333",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
  };

  const linkHover = {
    color: "#ff9800",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;