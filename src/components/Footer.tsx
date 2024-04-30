import { Container } from 'react-bootstrap';
import "../styles/footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-4">
      <Container>
        <ul className="list-unstyled">
          <li className="mx-3"><Link to="/">Home</Link></li>
          <li className="mx-3"><Link to="/search">Search</Link></li>
          <li className="mx-3"><Link to="/contact-us">Contact Us</Link></li>
          <li className="mx-3"><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li className="mx-3"><Link to="/terms-of-service">Terms of Service</Link></li>
        </ul>
        <p className="text-center">Oscar Feliz &copy; April 29, 2024</p>
      </Container>
    </footer>
  );
}

export default Footer;
