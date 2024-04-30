import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"

interface NavbarProps {
  toggleTheme: () => void;
}

function CustomNavbar({ toggleTheme }: NavbarProps) {
  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/" className="mr-auto btn btn-primary fake-link">pixelHunt</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Link to="/search" className="btn btn-primary fake-link">Search</Link>
          <NavDropdown title="Support" id="basic-nav-dropdown" className="btn btn-primary fake-link dropdown-fake-link">
            <Link to="/contact-us" className="btn btn-primary fake-link">Contact Us</Link>
            <Link to="/terms-of-service" className="btn btn-primary fake-link">Terms of Service</Link>
            <Link to="/privacy-policy" className="btn btn-primary fake-link">Privacy Policy</Link>
          </NavDropdown>
        </Nav>
        <Nav className="ml-auto">
          <button className="btn btn-outline-primary mr-2 fake-link" onClick={toggleTheme}>Change Theme</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
