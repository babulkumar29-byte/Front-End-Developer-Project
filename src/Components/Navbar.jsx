import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-3 bg-light">
      <Link className="me-3" to="/">Login</Link>
      <Link className="me-3" to="/upload">Upload</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
}
